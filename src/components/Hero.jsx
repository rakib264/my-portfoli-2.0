import { Float, MeshDistortMaterial, OrbitControls, Sparkles } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { motion } from "framer-motion";
import { Suspense, useRef } from "react";
import * as THREE from 'three';

import { styles } from "../styles";

const ImageCard = () => {
  const meshRef = useRef();
  const glowRef = useRef();
  const texture = new THREE.TextureLoader().load('/assets/me.png');
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    // Smooth floating animation
    meshRef.current.position.y = Math.sin(time * 0.5) * 0.1;
    // Subtle breathing effect for the glow
    glowRef.current.scale.x = 1 + Math.sin(time * 0.8) * 0.05;
    glowRef.current.scale.y = 1 + Math.sin(time * 0.8) * 0.05;
  });

  return (
    <Float
      speed={2}
      rotationIntensity={0.3}
      floatIntensity={0.3}
      position={[0, -0.1, 0]}
    >
      <group scale={[1.05, 1.05, 1.05]}>
        {/* Glowing backdrop */}
        <mesh 
          ref={glowRef} 
          position={[0, 0, -0.2]} 
          scale={[3.0, 4.0, 1]}
        >
          <planeGeometry />
          <MeshDistortMaterial
            color="#4B0082"
            opacity={0.15}
            transparent
            distort={0.4}
            speed={1.5}
            roughness={0.5}
          />
        </mesh>

        {/* Main image */}
        <mesh 
          ref={meshRef} 
          scale={[2.8, 3.8, 1]}
        >
          <planeGeometry args={[1, 1]} />
          <meshBasicMaterial 
            map={texture} 
            side={THREE.DoubleSide}
            transparent
            opacity={0.95}
          />
        </mesh>

        {/* Adjusted sparkles scale */}
        <Sparkles 
          count={60}
          scale={[4.2, 5.2, 2]}
          size={2}
          speed={0.2}
          color="#915EFF"
          opacity={0.7}
        />
        
        <Sparkles 
          count={30}
          scale={[3.7, 4.7, 1]}
          size={3}
          speed={0.1}
          color="#ffffff"
          opacity={0.3}
        />
      </group>
    </Float>
  );
};

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 z-20`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Redwan Rakib</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}> 
          I am an entrepreneurial software engineer specializing in scalable<br className="sm:block hidden" />
          web and mobile applications that empower businesses to grow.
          </p>
        </div>
      </div>

      <div className="absolute w-full h-[85vh] bottom-0 left-0"> {/* Increased height */}
        <Canvas
          camera={{ 
            position: [0, 0, 6], // Moved camera back slightly
            fov: 45,
            near: 0.1,
            far: 1000
          }}
          className="w-full h-full"
        >
          <Suspense fallback={null}>
            {/* Enhanced lighting setup */}
            <ambientLight intensity={0.6} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <spotLight 
              position={[-5, 5, 5]} 
              intensity={0.8}
              angle={0.3}
              penumbra={1}
              castShadow
            />
            <pointLight
              position={[0, 2, 3]}
              intensity={0.6}
              color="#915EFF"
            />
            {/* Additional rim light for better depth */}
            <pointLight
              position={[-2, 0, -2]}
              intensity={0.3}
              color="#ffffff"
            />
            
            <ImageCard />
            
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              autoRotate
              autoRotateSpeed={0.4}
              minAzimuthAngle={-Math.PI / 16}
              maxAzimuthAngle={Math.PI / 16}
              minPolarAngle={Math.PI / 2 - Math.PI / 32}
              maxPolarAngle={Math.PI / 2 + Math.PI / 32}
            />
          </Suspense>
        </Canvas>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-20">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
