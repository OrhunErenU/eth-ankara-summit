'use client'

import { useRef, useMemo } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import * as THREE from 'three'

function EthDiamond() {
  const meshRef = useRef<THREE.Mesh>(null!)
  const materialRef = useRef<THREE.MeshStandardMaterial>(null!)

  const geometry = useMemo(() => {
    const geo = new THREE.OctahedronGeometry(1, 0)
    geo.scale(1, 1.4, 1)
    return geo
  }, [])

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={0.5}>
      <mesh ref={meshRef} geometry={geometry}>
        <meshStandardMaterial
          ref={materialRef}
          color="#627EEA"
          emissive="#627EEA"
          emissiveIntensity={0.4}
          metalness={0.8}
          roughness={0.2}
          transparent
          opacity={0.9}
        />
      </mesh>
      <mesh geometry={geometry} scale={1.02}>
        <meshBasicMaterial
          color="#627EEA"
          transparent
          opacity={0.1}
          wireframe
        />
      </mesh>
    </Float>
  )
}

function ParticleField({ count = 500 }: { count?: number }) {
  const meshRef = useRef<THREE.InstancedMesh>(null!)
  const dummy = useMemo(() => new THREE.Object3D(), [])

  const particles = useMemo(() => {
    return Array.from({ length: count }, () => ({
      x: (Math.random() - 0.5) * 20,
      y: (Math.random() - 0.5) * 20,
      z: (Math.random() - 0.5) * 20,
      speed: 0.2 + Math.random() * 0.5,
      offset: Math.random() * Math.PI * 2,
    }))
  }, [count])

  const sphereGeo = useMemo(() => new THREE.SphereGeometry(0.015, 6, 6), [])
  const material = useMemo(
    () =>
      new THREE.MeshBasicMaterial({
        color: '#627EEA',
        transparent: true,
        opacity: 0.6,
      }),
    []
  )

  useFrame((state) => {
    if (!meshRef.current) return
    const time = state.clock.elapsedTime

    particles.forEach((p, i) => {
      dummy.position.set(
        p.x + Math.sin(time * p.speed + p.offset) * 0.3,
        p.y + Math.cos(time * p.speed + p.offset) * 0.3,
        p.z + Math.sin(time * p.speed * 0.5) * 0.2
      )
      dummy.updateMatrix()
      meshRef.current.setMatrixAt(i, dummy.matrix)
    })
    meshRef.current.instanceMatrix.needsUpdate = true
  })

  return (
    <instancedMesh ref={meshRef} args={[sphereGeo, material, count]} />
  )
}

function OrbitalRings() {
  const ringRef1 = useRef<THREE.Mesh>(null!)
  const ringRef2 = useRef<THREE.Mesh>(null!)

  const ringGeo = useMemo(() => new THREE.TorusGeometry(2.2, 0.008, 16, 100), [])
  const ringMat = useMemo(
    () =>
      new THREE.MeshBasicMaterial({
        color: '#C5A55A',
        transparent: true,
        opacity: 0.3,
      }),
    []
  )

  useFrame((state) => {
    const time = state.clock.elapsedTime
    if (ringRef1.current) {
      ringRef1.current.rotation.x = Math.PI / 3 + Math.sin(time * 0.2) * 0.1
      ringRef1.current.rotation.y = time * 0.15
    }
    if (ringRef2.current) {
      ringRef2.current.rotation.x = -Math.PI / 4 + Math.cos(time * 0.2) * 0.1
      ringRef2.current.rotation.y = -time * 0.1
    }
  })

  return (
    <>
      <mesh ref={ringRef1} geometry={ringGeo} material={ringMat} />
      <mesh ref={ringRef2} geometry={ringGeo} material={ringMat} />
    </>
  )
}

export function HeroScene() {
  const { viewport } = useThree()
  const isMobile = viewport.width < 5

  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={1} color="#627EEA" />
      <pointLight position={[-5, -3, 3]} intensity={0.5} color="#C5A55A" />

      <EthDiamond />
      <OrbitalRings />
      <ParticleField count={isMobile ? 150 : 500} />
    </>
  )
}
