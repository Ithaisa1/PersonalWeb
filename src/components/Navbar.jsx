import { useState, useEffect, useCallback } from 'react'

const links = [
  { href: '#about', label: 'Sobre mí' },
  { href: '#skills', label: 'Habilidades' },
  { href: '#experience', label: 'Experiencia' },
  { href: '#projects', label: 'Proyectos' },
  { href: '#testimonials', label: 'Testimonios' },
  { href: '#contact', label: 'Contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = useCallback((e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }, [])

  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <a href="#hero" className="nav-logo nav-logo-animated" onClick={(e) => handleClick(e, '#hero')}>
        ISG<span>Digital</span>
      </a>
      <ul className={`nav-links${menuOpen ? ' active' : ''}`}>
        {links.map((l) => (
          <li key={l.href}>
            <a href={l.href} className="nav-link-underline" onClick={(e) => handleClick(e, l.href)}>{l.label}</a>
          </li>
        ))}
      </ul>
      <a href="https://wa.me/34672075340?text=%C2%A1Hola!%20%F0%9F%91%8B%20Me%20encantar%C3%ADa%20hablar%20contigo%20sobre%20mi%20proyecto.%20%C2%BFPodemos%20charlar%20un%20momento?" className="nav-cta" target="_blank" rel="noopener noreferrer">Hablemos</a>
      <button className="nav-menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menú de navegación">
        {menuOpen ? '✕' : '☰'}
      </button>
    </nav>
  )
}
