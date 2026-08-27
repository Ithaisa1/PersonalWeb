export const projects = [
  {
    id: 'gamescape',
    cat: 'application',
    type: 'Aplicación web',
    year: '2026',
    thumb: '🎮',
    title: 'GameScape',

    desc: 'Plataforma web para descubrir, explorar y gestionar videojuegos.',

    role: 'Desarrollo frontend',
    technologies: ['React', 'Vite', 'JavaScript', 'RAWG API'],

    url: 'https://game-scape-mu.vercel.app/',
    demoUrl: 'https://game-scape-mu.vercel.app/',
    hasDemo: true,

    objective:
      'Crear una aplicación web que permitiera descubrir videojuegos de forma sencilla y visual, utilizando una API externa como fuente principal de información.',

    challenge:
      'Uno de los principales retos fue trabajar con datos externos y gestionar correctamente las peticiones a la API, además de organizar la información para mostrar listados, detalles y diferentes estados de la aplicación.',

    solution:
      'Desarrollé la interfaz con React y Vite, creando componentes reutilizables y conectando la aplicación con la API de RAWG. La información se organiza en diferentes vistas para facilitar la exploración y consulta de los videojuegos.',

    result:
      'El resultado fue una aplicación interactiva que permite explorar videojuegos y consultar su información desde una interfaz orientada a la experiencia de usuario.',
  },

  {
    id: 'circle-studio',
    cat: 'web',
    type: 'Web multipágina',
    year: '2026',
    thumb: '🌀',
    title: 'Circle Studio',

    desc: 'Web multipágina para un estudio digital ficticio.',

    role: 'Desarrollo frontend',
    technologies: ['HTML', 'CSS', 'JavaScript', 'API'],

    url: 'https://circle-studio.netlify.app/',
    demoUrl: 'https://circle-studio.netlify.app/',
    hasDemo: true,

    objective:
      'Desarrollar una web multipágina para un estudio digital ficticio, poniendo en práctica los fundamentos de HTML, CSS y JavaScript y creando una experiencia responsive.',

    challenge:
      'El proyecto requería combinar varias páginas, contenido dinámico, consumo de una API externa e interacciones de interfaz manteniendo una estructura coherente y adaptable a diferentes tamaños de pantalla.',

    solution:
      'Construí la estructura utilizando HTML y CSS y añadí la lógica interactiva mediante JavaScript. También incorporé contenido obtenido desde una API externa y diferentes interacciones para hacer que la navegación resultara más dinámica.',

    result:
      'El proyecto permitió crear una experiencia web completa y responsive, combinando maquetación, lógica JavaScript, consumo de datos externos e interacción con el usuario.',
  },

  {
    id: 'oraculo-aethelgard',
    cat: 'experimental',
    type: 'Aplicación interactiva · IA',
    year: '2026',
    thumb: '🔮',
    title: 'Oráculo Aethelgard',

    desc: 'Interfaz interactiva para explorar dioses y mitologías mediante datos locales e inteligencia artificial.',

    role: 'Desarrollo frontend + integración de IA',
    technologies: ['JavaScript', 'Groq', 'Llama 3.3', 'API'],

    url: 'https://ithaisa1.github.io/oraculo-aethelgard/',
    demoUrl: 'https://oraculo-aethelgard.vercel.app/',
    hasDemo: true,

    objective:
      'Crear una experiencia de chat diferente a una aplicación convencional, utilizando una temática mitológica para experimentar con interfaces conversacionales e inteligencia artificial.',

    challenge:
      'El reto principal fue combinar información almacenada localmente con respuestas generadas mediante IA. La aplicación debía poder responder rápidamente sobre las deidades disponibles y recurrir a la IA cuando la información no estuviera presente en el registro local.',

    solution:
      'Desarrollé una interfaz de chat que consulta primero la información disponible localmente y utiliza Groq con Llama 3.3 para ampliar las respuestas o responder sobre deidades que no forman parte de la base de datos.',

    result:
      'El resultado fue una experiencia interactiva centrada en la conversación y la exploración, combinando datos estructurados con generación de contenido mediante IA.',
  },

  {
    id: 'adastrasky',
    cat: 'fullstack',
    type: 'Aplicación Full Stack · IA',
    year: '2025',
    thumb: '🌌',
    title: 'AdAstraSky',

    desc: 'Plataforma de astroturismo que combina información astronómica, meteorología e inteligencia artificial.',

    role: 'Desarrollo Full Stack',

    technologies: [
      'React',
      'Vite',
      'Tailwind',
      'Node.js',
      'Express',
      'PostgreSQL',
      'Python',
      'IA',
    ],

    url: 'https://adastra-sky.vercel.app/',
    demoUrl: 'https://adastra-sky.vercel.app/',
    hasDemo: false,

    objective:
      'Desarrollar una plataforma de astroturismo que ayudara a encontrar lugares adecuados para observar el cielo nocturno combinando información astronómica, meteorológica y sobre contaminación lumínica.',

    challenge:
      'El proyecto implicaba trabajar con diferentes servicios y tecnologías, conectar varias APIs y coordinar información procedente del frontend, backend, base de datos y servicios desarrollados en Python. También fue necesario resolver problemas relacionados con CORS, despliegue y comunicación entre servicios.',

    solution:
      'Construí una arquitectura Full Stack con React y Tailwind en el frontend, Node.js y Express en el backend y PostgreSQL como base de datos. Además, incorporé servicios en Python para el procesamiento astronómico y un sistema basado en IA para ampliar la experiencia de consulta.',

    result:
      'El proyecto terminó convirtiéndose en una plataforma completa que integra diferentes fuentes de información y tecnologías dentro de una misma experiencia de usuario, siendo uno de los proyectos más ambiciosos desarrollados durante el proceso de formación.',
  },
]

export const sliderItems = [
  'Zona Comercial',
  'Asesores',
  'Clínica Dental',
  'Universidad',
  'Vinoteca',
  'Farmacias',
  'Instalaciones Eléctricas',
  'Instalaciones Hidráulicas',
  'Artistas',
  'Consultoría',
  'Sistemas Contra Incendios',
]

export const categories = [
  { key: 'all', label: 'Todos' },
  { key: 'application', label: 'Aplicaciones' },
  { key: 'web', label: 'Web' },
  { key: 'experimental', label: 'Experimental' },
  { key: 'fullstack', label: 'Full Stack' },
]