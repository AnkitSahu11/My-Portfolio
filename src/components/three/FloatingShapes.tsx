import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

/**
 * Individual floating shape with distortion and rotation
 */
const FloatingShape = ({ position, color, speed }: any) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.x = time * speed * 0.5;
    meshRef.current.rotation.y = time * speed * 0.3;
    meshRef.current.position.y = position[1] + Math.sin(time * speed) * 0.5;
  });

  return (
    <mesh ref={meshRef} position={position}>
      <icosahedronGeometry args={[1, 0]} />
      <MeshDistortMaterial
        color={color}
        attach="material"
        distort={0.4}
        speed={2}
        roughness={0.2}
        metalness={0.8}
      />
    </mesh>
  );
};

/**
 * Collection of floating 3D shapes for background
 */
const FloatingShapes = () => {
  const shapes = [
    { position: [-4, 0, -5], color: '#00f0ff', speed: 0.5 },
    { position: [4, 2, -8], color: '#a855f7', speed: 0.3 },
    { position: [0, -2, -6], color: '#ec4899', speed: 0.4 },
    { position: [-3, 3, -10], color: '#10b981', speed: 0.6 },
    { position: [3, -3, -7], color: '#00f0ff', speed: 0.35 },
  ];

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#a855f7" />
      
      {shapes.map((shape, index) => (
        <FloatingShape key={index} {...shape} />
      ))}
    </>
  );
};

export default FloatingShapes;