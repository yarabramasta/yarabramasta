'use client'

import { Canvas } from '@react-three/fiber'

export default function Icosahedron() {
  return (
    <div className="relative h-full">
      <Canvas className="h-full transform-gpu bg-transparent"></Canvas>
    </div>
  )
}
