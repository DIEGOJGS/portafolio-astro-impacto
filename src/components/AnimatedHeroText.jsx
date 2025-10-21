import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// 1. REGISTRAR EL PLUGIN
// Tenemos que hacer esto una vez para que GSAP sepa que existe ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export default function AnimatedHeroText() {
  // 2. Refs para "sujetar" los elementos del DOM
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  // 3. useEffect se ejecuta cuando el componente se carga
  useEffect(() => {
    // 4. Esta es nuestra animación GSAP
    gsap.to(titleRef.current, { // Animar el <h1>
      opacity: 0, // Desvanecer
      y: -30,     // Mover 30px hacia arriba
      scrollTrigger: {
        trigger: 'section', // El 'trigger' es el <section> padre
        start: 'top top',   // Empezar cuando la parte superior de la sección
                            // llega a la parte superior de la pantalla
        end: 'bottom top',  // Terminar cuando el fondo de la sección
                            // llega a la parte superior de la pantalla
        scrub: true,        // ¡LA MAGIA! Conecta la animación al scroll
      },
    });

    gsap.to(subtitleRef.current, { // Animar el <h2>
      opacity: 0,
      y: -20,
      scrollTrigger: {
        trigger: 'section',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
        delay: 0.1, // Un pequeño retraso para que no se mueva
                    // exactamente al mismo tiempo que el título
      },
    });
  }, []); // El [] vacío asegura que esto solo se ejecute una vez

  // 5. El HTML que renderiza este componente
  return (
    <div>
      <h1 ref={titleRef} className="text-5xl font-bold">Diego JGS</h1>
      <h2 ref={subtitleRef} className="text-3xl text-neutral-400">
        Desarrollador Full-Stack
      </h2>
    </div>
  );
}