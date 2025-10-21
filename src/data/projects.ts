// 1. Definimos la "forma" que tendrá cada objeto de proyecto
export interface Project {
  title: string;
  description: string;
  image: string; 
  tech: string[];
  githubUrl: string;
  liveUrl?: string;
  isFeatured: boolean;
}

export const projects: Project[] = [
  // --- PROYECTOS DESTACADOS ---
  {
    title: "Sistema Web de Login (Node.js)",
    description: "Un sistema completo de registro y autenticación de usuarios usando Node.js, Express, EJS y MySQL.",
    image: "/images/proyecto-login-node.jpg", // Crearemos esta imagen luego
    tech: ["Node.js", "Express", "MySQL", "EJS"],
    githubUrl: "https://github.com/DIEGOJGS/Sistema-Web-Login-Registro-Node-MySql",
    isFeatured: true, // <-- ¡Este es un proyecto destacado!
  },
  {
    title: "Login con Google Sheets como DB",
    description: "Una aplicación web creativa que utiliza una hoja de Google Sheets como base de datos para la autenticación de usuarios.",
    image: "/images/proyecto-google-sheets.jpg", // Crearemos esta imagen luego
    tech: ["HTML", "CSS", "JavaScript", "Google Apps Script"],
    githubUrl: "https://github.com/DIEGOJGS/App-Web-Login-Registro-Google-Sheets",
    isFeatured: true, // <-- ¡Este también es destacado!
  },

  // --- OTROS PROYECTOS ---
  {
    title: "Nerdearla Vibeathon 2025",
    description: "Dashboard de seguimiento para el Semillero Digital, presentado en la Vibeathon.",
    image: "/images/proyecto-nerdearla.jpg", // Crearemos esta imagen luego
    tech: ["HTML", "CSS"],
    githubUrl: "https://github.com/DIEGOJGS/nerdearla-vibeathon-2025",
    isFeatured: false, // <-- Este no es destacado
  },
  {
    title: "Foro Alura",
    description: "Un backend de API REST para un foro, creado como parte del challenge de Alura.",
    image: "/images/proyecto-foro-alura.jpg", // Crearemos esta imagen luego
    tech: ["Java", "Spring Boot", "JPA"],
    githubUrl: "https://github.com/DIEGOJGS/foro_Alura",
    isFeatured: false, // <-- Este tampoco
  },
  // ... ¡Puedes añadir más proyectos aquí cuando quieras!
];