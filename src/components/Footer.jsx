export default function Footer() {
  const handleClick = (e, href) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer>
      <div className="footer-logo">ISG<span>Digital</span></div>
      <p>© 2026 ISG Digital – Diseño &amp; Desarrollo Web</p>
      <div className="footer-links">
        <a href="#about" onClick={(e) => handleClick(e, '#about')}>Sobre mí</a>
        <a href="#projects" onClick={(e) => handleClick(e, '#projects')}>Proyectos</a>
        <a href="#contact" onClick={(e) => handleClick(e, '#contact')}>Contacto</a>
        <a href="https://www.linkedin.com/in/ithaisa-sg" target="_blank" rel="noopener noreferrer" title="LinkedIn">
          <svg width="18" height="18" viewBox="0 0 34 34" xmlns="http://www.w3.org/2000/svg">
            <rect width="34" height="34" rx="4" fill="#0A66C2" />
            <path fill="#fff" d="M8 12h4v14H8V12zm2-7a2 2 0 110 4 2 2 0 010-4zm6 7h4v2h.1c.6-1 2-2 4-2 4 0 5 2.6 5 6V26h-4v-6c0-1.5 0-3.5-2-3.5s-2 .5-2 3.5v6h-4V12z" />
          </svg>
        </a>
      </div>
    </footer>
  )
}
