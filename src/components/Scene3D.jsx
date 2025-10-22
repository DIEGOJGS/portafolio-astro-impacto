import { useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

// 1. Importamos TODOS nuestros modelos
import { Model as OctocatModel } from './OctocatModel.jsx'
import { Model as ReactModel } from './ReactLogo.jsx'
import { Model as JavascriptModel } from './JavascriptLogo.jsx'
import { Model as HtmlModel } from './HtmlLogo.jsx'
import { Model as CssModel } from './CssLogo.jsx'
import { Model as GithubModel } from './GithubLogo.jsx'


function OrbitingIcons() {
  // 2. Creamos una "Ref" para CADA icono
  const octocatRef = useRef()
  const reactRef = useRef()
  const jsRef = useRef()
  const htmlRef = useRef()
  const cssRef = useRef()
  const githubRef = useRef()

  const { viewport } = useThree()
  const scale = viewport.width < 5 ? 0.6 : 1.0

  // Ajustamos el radio de la órbita para que sea responsivo
  const orbitRadius = 2.5 * scale

  // 3. Animamos CADA icono
  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime()

    // El Octocat en el centro rota sobre sí mismo
    if (octocatRef.current) {
      octocatRef.current.rotation.y += delta * 0.2
    }

    // Icono de React (órbita X-Z)
    if (reactRef.current) {
      reactRef.current.position.x = Math.sin(time * 0.3) * orbitRadius
      reactRef.current.position.z = Math.cos(time * 0.3) * orbitRadius
      reactRef.current.rotation.y += 0.01
    }

    // Icono de Javascript (órbita X-Z, más rápida y en otra posición)
    if (jsRef.current) {
      jsRef.current.position.x = Math.sin(time * 0.5) * (orbitRadius * 0.8) // Radio más corto
      jsRef.current.position.z = Math.cos(time * 0.5) * (orbitRadius * 0.8)
      jsRef.current.rotation.y += 0.02
    }

    // Icono de HTML (órbita X-Y, vertical)
    if (htmlRef.current) {
      htmlRef.current.position.x = Math.cos(time * 0.4) * orbitRadius
      htmlRef.current.position.y = Math.sin(time * 0.4) * orbitRadius
      htmlRef.current.rotation.x += 0.01
    }

    // Icono de CSS (órbita Y-Z, vertical)
    if (cssRef.current) {
      cssRef.current.position.y = Math.cos(time * 0.2) * (orbitRadius * 1.1) // Radio más largo
      cssRef.current.position.z = Math.sin(time * 0.2) * (orbitRadius * 1.1)
      cssRef.current.rotation.z += 0.01
    }

    // Icono de GitHub (órbita X-Z, pero desfasada)
    if (githubRef.current) {
      githubRef.current.position.x = Math.cos(time * 0.3) * orbitRadius
      githubRef.current.position.z = Math.sin(time * 0.3) * orbitRadius
      githubRef.current.rotation.y += 0.01
    }
  })

  return (
    <>
      {/* --- El Octocat (Centro) --- */}
      <group 
        ref={octocatRef} 
        scale={scale * 4.5} // El tamaño grande que ajustamos
        position={[0, -1.5, 0]} // La posición baja que ajustamos
      >
        <OctocatModel />
      </group>

      {/* --- 4. LOS ICONOS ORBITANDO --- */}
      {/* ¡Ya no hay esfera ni octaedro! */}

      <group ref={reactRef} scale={scale * 0.3}>
        <ReactModel />
      </group>

      <group ref={jsRef} scale={scale * 0.3}>
        <JavascriptModel />
      </group>

      <group ref={htmlRef} scale={scale * 0.1}>
        <HtmlModel />
      </group>

      <group ref={cssRef} scale={scale * 0.1}>
        <CssModel />
      </group>

      <group ref={githubRef} scale={scale * 0.3}>
        <GithubModel />
      </group>
    </>
  )
}

// El componente principal de la escena (sin cambios)
export default function Scene3D() {
  return (
    <Canvas>
      <ambientLight intensity={1.5} />
      <directionalLight position={[10, 10, 5]} intensity={2} />
      <OrbitingIcons />
      <OrbitControls enableZoom={false} />
    </Canvas>
  )
}