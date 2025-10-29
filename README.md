# Portafolio Personal v2 (Diego JGS)

Este es el repositorio de mi portafolio web personal, enfocado en crear una experiencia de usuario única, interactiva y moderna.

El proyecto está construido bajo una filosofía de "islas de Astro", usando un stack de alto rendimiento para la estructura (Astro) e "islas" de React para las partes de alta interactividad, como la escena 3D.

## 🚀 Demo en Vivo

**[Enlace a tu portafolio]** (Próximamente, después del despliegue en Vercel)

---

## ✨ Características Principales

* **Hero 3D Interactivo:** Una escena 3D en la cabecera construida con **React Three Fiber (R3F)**. Presenta al Octocat de GitHub como protagonista, con logos de mi stack tecnológico (React, JS, HTML, CSS) orbitando a su alrededor.
* **Animación "Scrollytelling":** Animaciones fluidas que se activan al hacer scroll, creadas con **GSAP (GreenSock)** y el plugin ScrollTrigger.
* **Diseño 100% Responsivo:** Un layout híbrido (fila en desktop, columna en móvil) y un Navbar con menú hamburguesa funcional en React.
* **CMS de Contenido:** Las secciones de "Proyectos" y "Habilidades" se generan dinámicamente desde archivos `.ts` en la carpeta `data/`, haciéndolo fácil de actualizar.

---

## 💻 Stack Tecnológico

Este proyecto fue construido usando:

* **Framework:** [Astro](https://astro.build/)
* **UI/3D:** [React](https://react.dev/)
* **Motor 3D:** [React Three Fiber (R3F)](https://docs.pmnd.rs/react-three-fiber) y [Drei](https://github.com/pmndrs/drei)
* **Animación:** [GSAP (GreenSock)](https://gsap.com/) y [ScrollTrigger](https://gsap.com/scrolltrigger/)
* **Estilos:** [Tailwind CSS](https://tailwindcss.com/)
* **Despliegue:** (Próximamente Vercel)

---

## 🛠️ Cómo Ejecutarlo Localmente

1.  **Clonar el repositorio:**
    ```bash
    git clone [https://github.com/DIEGOJGS/portafolio-astro-impacto.git](https://github.com/DIEGOJGS/portafolio-astro-impacto.git)
    cd portafolio-astro-impacto
    ```

2.  **Instalar dependencias:**
    ```bash
    npm install
    ```

3.  **Iniciar el servidor de desarrollo:**
    ```bash
    npm run dev
    ```

4.  Abrir `http://localhost:4321` en tu navegador.
