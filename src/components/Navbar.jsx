// src/components/Navbar.jsx
import { useState } from 'react';


const navLinks = [
  { href: "#proyectos", label: "Proyectos" },
  { href: "#habilidades", label: "Habilidades" },
  { href: "#sobre-mi", label: "Sobre Mí" },
  { href: "#contacto", label: "Contacto" },
];

// Este es un componente de React
export default function Navbar() {
  // 1. Añadimos "estado" para saber si el menú está abierto
  const [isOpen, setIsOpen] = useState(false);

  // 2. Función para cerrar el menú al hacer clic en un enlace
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-neutral-950/80 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <nav className="flex justify-between items-center h-16">
          {/* Tu Logo/Nombre */}
          <a href="/" className="text-white text-xl font-bold hover:text-neutral-300">
            Diego JGS
          </a>

          {/* Enlaces de Navegación (Escritorio) */}
          <div className="hidden md:flex gap-6">
            {navLinks.map((link) => (
              <a 
                key={link.href}
                href={link.href} 
                className="text-neutral-300 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* 3. Botón Hamburguesa (Móvil) */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} // 4. Evento de clic para cambiar el estado
              className="text-white p-2"
              aria-label="Abrir menú"
            >
              {/* Icono de Hamburguesa (cambia si está abierto) */}
              {isOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </nav>
      </div>

      {/* 5. Menú Desplegable (Móvil) */}
      {/* Se muestra solo si 'isOpen' es true */}
      <div 
        className={`
          ${isOpen ? 'flex' : 'hidden'} 
          flex-col md:hidden bg-neutral-900/95 backdrop-blur-md
          absolute top-16 left-0 w-full
          text-center p-4 space-y-2
        `}
      >
        {navLinks.map((link) => (
          <a 
            key={link.href}
            href={link.href} 
            onClick={handleLinkClick} // 6. Clic para cerrar el menú
            className="text-neutral-200 hover:text-white text-lg py-2 rounded-md"
          >
            {link.label}
          </a>
        ))}
      </div>
    </header>
  );
}