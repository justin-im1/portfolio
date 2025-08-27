'use client';

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Edges } from "@react-three/drei";
import { useEffect, useState } from "react";
import { useColor } from "@/contexts/ColorContext";

export const ColorCube = () => {
  const [faceSize, setFaceSize] = useState(5);
  const [webglAvailable, setWebglAvailable] = useState(true);
  const { setCurrentColor } = useColor();

  useEffect(() => {
    const checkWebGL = () => {
      try {
        const canvas = document.createElement('canvas');
        const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
        if (!gl) {
          setWebglAvailable(false);
          return;
        }
        
        const testCanvas = document.createElement('canvas');
        testCanvas.width = 1;
        testCanvas.height = 1;
        const testGl = testCanvas.getContext('webgl');
        if (!testGl) {
          setWebglAvailable(false);
        } else {
          setCurrentColor('#FF6B6B');
        }
      } catch {
        setWebglAvailable(false);
      }
    };

    checkWebGL();
  }, [setCurrentColor]);

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

  const faces = [
    { colour: "#FF6B6B", position: [0, 0, faceSize / 2] as [number, number, number], rotation: [0, 0, 0] as [number, number, number] },
    { colour: "#10B981", position: [0, 0, -faceSize / 2] as [number, number, number], rotation: [0, Math.PI, 0] as [number, number, number] },
    { colour: "#F59E0B", position: [faceSize / 2, 0, 0] as [number, number, number], rotation: [0, Math.PI / 2, 0] as [number, number, number] },
    { colour: "#8B5CF6", position: [-faceSize / 2, 0, 0] as [number, number, number], rotation: [0, -Math.PI / 2, 0] as [number, number, number] },
  ];

  const handleFaceClick = (colour: string) => {
    if (webglAvailable) {
      setCurrentColor(colour);
    }
  };

  if (!webglAvailable) {
    return null;
  }

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
          enableRotate={true}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
          autoRotate
          autoRotateSpeed={1.75}
          rotateSpeed={0.25}
        />
      </Canvas>
    </div>
  );
}; 