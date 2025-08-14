'use client';

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Edges } from "@react-three/drei";
import { useEffect, useState } from "react";
import { useColor } from "@/contexts/ColorContext";

export const ColorCube = () => {
  const [faceSize, setFaceSize] = useState(5);
  const { setCurrentColor } = useColor();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setFaceSize(4);
      } else {
        setFaceSize(5);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Define each face with its color, position, and rotation
  const faces = [
    { colour: "#3b82f6", position: [0, 0, faceSize / 2] as [number, number, number], rotation: [0, 0, 0] as [number, number, number] }, // Front - Blue
    { colour: "#f59e0b", position: [0, 0, -faceSize / 2] as [number, number, number], rotation: [0, Math.PI, 0] as [number, number, number] }, // Back - Amber
    { colour: "#ef4444", position: [faceSize / 2, 0, 0] as [number, number, number], rotation: [0, Math.PI / 2, 0] as [number, number, number] }, // Right - Red
    { colour: "#10b981", position: [-faceSize / 2, 0, 0] as [number, number, number], rotation: [0, -Math.PI / 2, 0] as [number, number, number] }, // Left - Emerald
    { colour: "#8b5cf6", position: [0, faceSize / 2, 0] as [number, number, number], rotation: [-Math.PI / 2, 0, 0] as [number, number, number] }, // Top - Purple
    { colour: "#06b6d4", position: [0, -faceSize / 2, 0] as [number, number, number], rotation: [Math.PI / 2, 0, 0] as [number, number, number] }, // Bottom - Cyan
  ];

  const handleFaceClick = (colour: string) => {
    setCurrentColor(colour);
  };

  return (
    <div className="w-24 h-24">
      <Canvas camera={{ position: [7, 7, 7], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <group>
          {faces.map((face, i) => (
            <mesh
              key={i}
              position={face.position}
              rotation={face.rotation}
              onClick={() => handleFaceClick(face.colour)}
              onPointerOver={() => (document.body.style.cursor = "pointer")}
              onPointerOut={() => (document.body.style.cursor = "default")}
            >
              <planeGeometry args={[faceSize, faceSize]} />
              <meshStandardMaterial color={face.colour} />
              <Edges color="white" lineWidth={3} />
            </mesh>
          ))}
        </group>
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.2}
          rotateSpeed={0.2}
        />
      </Canvas>
    </div>
  );
}; 