/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { Canvas, extend, useLoader } from '@react-three/fiber';
import React, { FC, ReactElement, useMemo } from 'react';
import * as THREE from 'three';
import { motion } from 'framer-motion-3d';
import { MotionConfig } from 'framer-motion';

extend({BoxGeometry: motion.boxGeometry})

type CubeProps = {
  position: number[], index: number[], dimensions: number[]
}

type GridProps = {
  x: number, y: number, spacing: number
}

const Cube: FC<CubeProps> = ({position, index, dimensions}) => {


  const face1 = useLoader(THREE.ImageBitmapLoader, `/portait/block_${index[0]}-${dimensions[1]-index[1]-1}.jpg`, loader => loader.setOptions({imageOrientation: 'flipY'}));
  const face2 = useLoader(THREE.ImageBitmapLoader, `/portait_abstract/block_${index[0]}-${dimensions[1]-index[1]-1}.jpg`, loader => loader.setOptions({imageOrientation: 'flipY'}));
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
      position={new THREE.Vector3(position[0], position[1], position[2])}
      animate={{rotateY: [0, Math.PI/2, Math.PI/2, Math.PI/2, Math.PI/2, 0]}}
      transition={{repeat: Infinity, duration: 6, delay, repeatDelay: 4, ease: 'linear'}}
    >
      <motion.mesh material={cubeMaterials} >
        <motion.boxGeometry args={[1, 1, 1]} />
      </motion.mesh>
    </motion.group>
  );
};

const Grid: FC<GridProps> = ({ x = 20, y = 20, spacing = 1.2 }) => {


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
    <motion.group position={[-x/2, -y/1.5, -6]}>
      {cubes}
    </motion.group>);
};
const ImageGrid: React.FC = () => {

  return (
    <div className='h-[60vh] w-[50vw] flex justify-center items-center'>
      <Canvas>
        <MotionConfig >
          <Grid x={20} y={15} spacing={1.1}/>
        </MotionConfig>
      </Canvas>
    </div>
  );
};


export default ImageGrid;