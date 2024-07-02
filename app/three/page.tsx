/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { Canvas, GroupProps } from '@react-three/fiber';
import React, { FC, useRef } from 'react';
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three';

const Cube: FC<GroupProps> = (props) => {
  const meshRef = useRef(null);

  const boxGeo = new THREE.BoxGeometry(1, 1, 1);
  const edgesGeo = new THREE.EdgesGeometry(boxGeo);

  return (
    <group {...props}>
      <mesh  ref={meshRef}>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial color={'white'} />
      </mesh>
      <lineSegments geometry={edgesGeo}>
        <lineBasicMaterial color={'black'} linewidth={1} />
      </lineSegments>
    </group>
  );
};

const Grid = ({ x = 20, y = 20, spacing = 1.1 }) => {
  const cubes = [];

  for (let i = 0; i < y; i++) {
    for (let j = 0; j < x; j++) {
      cubes.push(<Cube key={`${i}-${j}`} position={[i * spacing, j * spacing, 0]} />);
    }
  }

  return <group position={[0, 0, -20]}>{cubes}</group>;
};
const Three: React.FC = () => {

  return (
    <div className='h-screen w-screen'>
      <Canvas >
        {/* <OrbitControls /> */}
        <ambientLight intensity={Math.PI / 2} />
        <pointLight position={[10, 10, 10]} />
        <Grid />
      </Canvas>
    </div>
  );
};

export default Three;