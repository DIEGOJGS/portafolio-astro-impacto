import { Canvas } from '@react-three/fiber'
import { OrbitControls, TorusKnot } from '@react-three/drei'

// Este es un componente de React, por eso usamos 'export default function'
export default function Scene3D() {
  return (
    <Canvas>
      {/* Luz ambiental para iluminar toda la escena */}
      <ambientLight intensity={1.5} />

      {/* Luz direccional, como el sol */}
      <directionalLight position={[10, 10, 5]} intensity={2} />

      {/* Este es nuestro objeto 3D. 
          Viene de 'drei', ¡así de fácil! */}
      <TorusKnot args={[1, 0.4, 128, 32]} scale={1.5}>
        {/* El material del objeto */}
        <meshStandardMaterial color="#f72585" />
      </TorusKnot>

      {/* Controles para que el usuario pueda rotar
          el objeto con el mouse */}
      <OrbitControls enableZoom={false} />
    </Canvas>
  )
}