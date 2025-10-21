import { useRef } from 'react' // 1. Importar 'useRef'
import { Canvas, useFrame } from '@react-three/fiber' // 2. Importar 'useFrame'
import { OrbitControls, TorusKnot } from '@react-three/drei'

// 3. Vamos a mover el objeto a su propio componente
//    para poder animarlo limpiamente.
function ObjetoAnimado() {
  // 4. useRef nos da una "referencia" al objeto 3D
  const objetoRef = useRef()

  // 5. useFrame se ejecuta en CADA fotograma (frame)
  useFrame((state, delta) => {
    // 'delta' es el tiempo desde el último fotograma
    // Esto hace que la rotación sea suave e independiente
    // de la velocidad de fotogramas (FPS) del monitor.
    if (objetoRef.current) {
      objetoRef.current.rotation.y += delta * 0.2
      objetoRef.current.rotation.x += delta * 0.1
    }
  })

  return (
    // 6. Asignamos la referencia a nuestro objeto
    <TorusKnot ref={objetoRef} args={[1, 0.4, 128, 32]} scale={1.5}>
      <meshStandardMaterial color="#f72585" />
    </TorusKnot>
  )
}

// Este es tu componente principal
export default function Scene3D() {
  return (
    <Canvas>
      <ambientLight intensity={1.5} />
      <directionalLight position={[10, 10, 5]} intensity={2} />

      {/* 7. Usamos nuestro nuevo componente animado */}
      <ObjetoAnimado />

      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
    </Canvas>
  )
}