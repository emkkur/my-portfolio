/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import { Canvas, extend, useLoader } from '@react-three/fiber';
import React, { FC, ReactElement, useMemo } from 'react';
import * as THREE from 'three';
import { motion } from 'framer-motion-3d';
import { MotionConfig, MotionValue, useMotionValue, useSpring, useTransform } from 'framer-motion';
import useMeasure, { RectReadOnly } from 'react-use-measure';

extend({BoxGeometry: motion.boxGeometry});

type CubeProps = {
  position: number[], index: number[], dimensions: number[]
}

type GridProps = {
  x: number, y: number, spacing: number, bounds: RectReadOnly
}

const Cube: FC<CubeProps> = ({position, index, dimensions}) => {


  const face1 = useLoader(THREE.ImageBitmapLoader, `/portrait/block_${index[0]}-${dimensions[1]-index[1]-1}.jpg`, loader => loader.setOptions({imageOrientation: 'flipY'}));
  const face2 = useLoader(THREE.ImageBitmapLoader, `/portrait_bw/block_${index[0]}-${dimensions[1]-index[1]-1}.jpg`, loader => loader.setOptions({imageOrientation: 'flipY'}));
  const texture1 = new THREE.CanvasTexture(face1);
  const texture2 = new THREE.CanvasTexture(face2);

  const cubeMaterials = [
    new THREE.MeshBasicMaterial({ color: 0x000000 }),
    new THREE.MeshBasicMaterial({ map: texture2 }),
    new THREE.MeshBasicMaterial({ color: 0x000000 }),
    new THREE.MeshBasicMaterial({ color: 0x000000 }),
    new THREE.MeshBasicMaterial({ map: texture1 }),
    new THREE.MeshBasicMaterial({ color: 0x000000 }),
  ];

  const distanceFromCenter = Math.sqrt(Math.pow(index[0] - dimensions[0]/2, 2) + Math.pow(index[1] - dimensions[1]/2, 2));
  const delay = distanceFromCenter * 0.4;

  return (
    <motion.group
      position={new THREE.Vector3(position[0] - dimensions[1]/2, position[1] - dimensions[0]/2, 0)}
      animate={{rotateY: [0, Math.PI/2, Math.PI/2, Math.PI/2, Math.PI/2, 0]}}
      transition={{repeat: Infinity, duration: 6, delay, repeatDelay: 4, ease: 'linear'}}
      castShadow
    >
      <motion.mesh material={cubeMaterials} >
        <motion.boxGeometry args={[1, 1, 1]} />
      </motion.mesh>
    </motion.group>
  );
};

type SmoothTransformArgs = {
  stiffness: number, damping: number
}


const mouseToLightRotationY = (v: number) => {
  const rotate = (1 * v) / 200;
  if (rotate > 0.1) return 0.1;
  if (rotate < -0.1) return -0.1;
  return rotate;
};

const mouseToLightRotationX = (v: number) => {
  const rotate = (1 * v) / 200;
  if (rotate > 0.1) return 0.1;
  if (rotate < -0.1) return -0.1;
  return rotate;
};

function useSmoothTransform(value: MotionValue<number>, springOptions: SmoothTransformArgs, transformer: any) {
  return useSpring(useTransform(value, transformer), springOptions);
}

const spring: SmoothTransformArgs = { stiffness: 600, damping: 30 };

const Grid: FC<GridProps> = ({ x = 20, y = 20, spacing = 1.2, bounds }) => {

  const mouseX = useMotionValue(-bounds.width);
  const mouseY = useMotionValue(0);

  const resetMousePosition = () => {
    mouseX.set(-bounds.width);
    mouseY.set(0);
  };
  const lightRotateY = useSmoothTransform(mouseX, spring, mouseToLightRotationX);
  const lightRotateX = useSmoothTransform(mouseY, spring, mouseToLightRotationY);

  const cubes: ReactElement[] = useMemo(() => {
    const tempcubes: ReactElement[] = [];
    for (let i = 0; i < y; i++) {
      for (let j = 0; j < x; j++) {
        tempcubes.push(
          <Cube
            key={`${i}-${j}`}
            position={[i * spacing, j * spacing, 0]}
            index={[j, i]}
            dimensions={[x, y]}
          />);
      }
    }
    return tempcubes;
  }, []);

  return (
    <motion.group
      castShadow
      position={[0, 0, -11.8]}
      rotation={[lightRotateX, lightRotateY, 0]}
      onPointerEnter={resetMousePosition}
      onPointerOut={resetMousePosition}
      
      onPointerMove={(e) => {
        mouseX.set(e.clientX - bounds.x - bounds.width / 2);
        mouseY.set(e.clientY - bounds.y - bounds.height / 2);
      }}
    >
      {cubes}
    </motion.group>);
};
const ImageGrid: React.FC = () => {

  const [ref, bounds] = useMeasure({scroll: false});

  return (
    <div ref={ref} className='md:h-3/5 md:w-3/4 h-1/2  w-full flex justify-center items-center'>
      <Canvas>
        <MotionConfig >
          <motion.pointLight position={[-10, -10, 0]} distance={5} color={'#EEEEEE'} intensity={5} />
          <motion.spotLight
            castShadow
            position={[0, 0, 0]}
            intensity={2}
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
            shadow-bias={-0.0001}
          />
          <mesh
            receiveShadow
            renderOrder={1000}
            position={[0, 0, 0]}
          >
            <planeGeometry args={[10, 10]} />
            <motion.shadowMaterial
              transparent
              opacity={0.5}
            />
          </mesh>
          <Grid x={20} y={15} spacing={1.1} bounds={bounds}/>
        </MotionConfig>
      </Canvas>
    </div>
  );
};


export default ImageGrid;