import { Suspense, useEffect, useRef, useState } from 'react'

import type * as THREE from 'three'
import type { GLTF } from 'three-stdlib'

import {
  ContactShadows,
  Environment,
  OrbitControls,
  useGLTF
} from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'

import { useTheme } from '~/hooks/use-theme'

type GLTFResult = GLTF & {
  nodes: {
    Icosphere: THREE.Mesh
  }
  materials: {
    ['Recycled Paper']: THREE.MeshStandardMaterial
  }
}

export default function IcosphereScene() {
  const [isDragging, setDragging] = useState(false)

  return (
    <div className="relative h-full">
      <Canvas
        shadows
        camera={{ position: [0, 0, 3], fov: 60 }}
        className="h-full bg-transparent"
      >
        <Suspense fallback={null}>
          <IcosphereModel isDragging={isDragging} />

          <ambientLight intensity={0.3} />
          <directionalLight
            position={[5, 5, 5]}
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
          />

          <Environment preset="city" />

          <ContactShadows
            position={[0, -1, 0]}
            opacity={0.4}
            scale={5}
            blur={2.5}
            far={5}
          />

          <OrbitControls
            enableZoom={false}
            enablePan={false}
            minPolarAngle={Math.PI / 2.5}
            maxPolarAngle={Math.PI / 2.5}
            onStart={() => setDragging(true)}
            onEnd={() => setDragging(false)}
          />
        </Suspense>
      </Canvas>
    </div>
  )
}

interface IcosphereModelProps {
  isDragging: boolean
}

function IcosphereModel({ isDragging }: IcosphereModelProps) {
  const { theme } = useTheme()

  const ref = useRef<THREE.Group>(null)
  const { nodes, materials } = useGLTF(
    '/uninode-obj.glb'
  ) as unknown as GLTFResult

  const idleTime = useRef(0)
  const [scale, setScale] = useState(0)

  useEffect(() => {
    let animationFrame: number
    let start: number | null = null

    const animateScale = (timestamp: number) => {
      if (!start) start = timestamp
      const elapsed = timestamp - start
      const newScale = Math.min(1, elapsed / 300)
      setScale(newScale)
      if (newScale < 1) {
        animationFrame = requestAnimationFrame(animateScale)
      }
    }

    animationFrame = requestAnimationFrame(animateScale)
    return () => cancelAnimationFrame(animationFrame)
  }, [])

  useFrame((_, delta) => {
    if (!ref.current) return

    idleTime.current += delta
    ref.current.position.y = Math.sin(idleTime.current * 2) * 0.05

    if (!isDragging) {
      ref.current.rotation.y += delta * 0.3
    }
  })

  useEffect(() => {
    if (isDragging || !ref.current) return

    const timeout = setTimeout(() => {
      if (ref.current) {
        ref.current.rotation.set(0, 0, 0)
      }
    }, 3000)

    return () => clearTimeout(timeout)
  }, [isDragging])

  useEffect(() => {
    const mat = materials['Recycled Paper']
    mat.color.set(theme === 'dark' ? '#3b3a37' : '#dad9d6')
  }, [theme, materials])

  return (
    <group ref={ref} scale={scale} dispose={null} rotation={[0.3, 0.4, 0]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere.geometry}
        material={materials['Recycled Paper']}
      />
    </group>
  )
}

useGLTF.preload('/uninode-obj.glb')
