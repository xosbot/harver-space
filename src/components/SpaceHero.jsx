import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Stars, OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

function AnimatedStars() {
  const starsRef = useRef()
  
  useFrame((state) => {
    if (starsRef.current) {
      starsRef.current.rotation.x = state.clock.elapsedTime * 0.005
      starsRef.current.rotation.y = state.clock.elapsedTime * 0.002
    }
  })

  return (
    <Stars
      ref={starsRef}
      radius={100}
      depth={50}
      count={5000}
      factor={4}
      saturation={0.1}
      fade
      speed={0.5}
    />
  )
}

function Earth() {
  const meshRef = useRef()
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.05
    }
  })

  return (
    <group position={[0, 0, 0]}>
      {/* Earth Sphere */}
      <Sphere ref={meshRef} args={[2, 64, 64]} scale={1}>
        <MeshDistortMaterial
          color="#1a3a5c"
          emissive="#0a1628"
          emissiveIntensity={0.2}
          roughness={0.4}
          metalness={0.8}
          distort={0.1}
          speed={2}
        />
      </Sphere>
      
      {/* Atmosphere Glow */}
      <Sphere args={[2.3, 64, 64]} scale={1}>
        <meshBasicMaterial
          color="#7DD3FC"
          transparent
          opacity={0.1}
          side={THREE.BackSide}
        />
      </Sphere>
      
      {/* Outer Glow */}
      <Sphere args={[2.6, 32, 32]} scale={1}>
        <meshBasicMaterial
          color="#7DD3FC"
          transparent
          opacity={0.03}
          side={THREE.BackSide}
        />
      </Sphere>
    </group>
  )
}

function OrbitingParticles() {
  const particlesRef = useRef()
  const count = 200
  
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2
      const radius = 3.5 + Math.random() * 2
      pos[i * 3] = Math.cos(angle) * radius
      pos[i * 3 + 1] = (Math.random() - 0.5) * 0.5
      pos[i * 3 + 2] = Math.sin(angle) * radius
    }
    return pos
  }, [])

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.1
    }
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#D4AF37"
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  )
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#7DD3FC" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#C084FC" />
      
      <AnimatedStars />
      <Earth />
      <OrbitingParticles />
      
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 1.5}
        minPolarAngle={Math.PI / 3}
      />
    </>
  )
}

export default function SpaceHero() {
  return (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 1,
    }}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        style={{ background: 'transparent' }}
        gl={{ antialias: true, alpha: true }}
      >
        <Scene />
      </Canvas>
    </div>
  )
}
