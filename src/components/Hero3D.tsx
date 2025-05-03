import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";
import { Group } from "three";

function BackgroundStars() {
  const { isDarkMode } = useTheme();
  const count = 5000;
  const positions = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 100;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 100;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 100;
    }
    return positions;
  }, []);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        color={isDarkMode ? "#ffffff" : "#1e293b"}
        sizeAttenuation
        transparent
        opacity={0.8}
      />
    </points>
  );
}

function Galaxy() {
  const groupRef = useRef<Group>(null);
  const targetRotation = useRef({ x: 0, y: 0 });
  const currentRotation = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      // Convert mouse position to normalized coordinates (-1 to 1)
      targetRotation.current = {
        x: (event.clientY / window.innerHeight) * 2 - 1,
        y: (event.clientX / window.innerWidth) * 2 - 1,
      };
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      // Base rotation speed
      const baseRotationY = state.clock.getElapsedTime() * 0.03;

      // Even smoother interpolation with much lower factor
      const smoothFactor = 0.008;

      // Update current rotation with smoother interpolation and reduced influence
      currentRotation.current.x +=
        (targetRotation.current.x * 0.1 - currentRotation.current.x) *
        smoothFactor;
      currentRotation.current.y +=
        (baseRotationY +
          targetRotation.current.y * 0.1 -
          currentRotation.current.y) *
        smoothFactor;

      // Apply rotation
      groupRef.current.rotation.x = currentRotation.current.x;
      groupRef.current.rotation.y = currentRotation.current.y;
    }
  });

  return (
    <group ref={groupRef}>
      <BackgroundStars />
    </group>
  );
}

const Hero3D = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className="absolute inset-0 w-full h-full"
      style={{ zIndex: 0 }}
    >
      <Canvas
        camera={{ position: [0, 0, 15], fov: 60 }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Galaxy />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </motion.div>
  );
};

export default Hero3D;
