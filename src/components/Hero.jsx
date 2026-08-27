import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { useMouseGlow } from '../hooks/useMousePosition'

const cards = [
  { title: '🎯 Diseño responsivo y funcional', text: 'Cada sitio que creo se adapta a todos los dispositivos y convierte visitas en clientes reales.' },
  { title: '📝 Contenido sin problemas', text: 'Puedes administrar tu sitio en WordPress sin tener que saber programar en cada día.' },
  { title: '📈 Estrategia detrás de cada página', text: 'Cada sección está pensada para llevar al visitante desde el descubrimiento hasta la compra.' },
  { title: '💬 Trato directo y transparente', text: 'Sin intermediarios: una comunicación clara y honesta para que sepas exactamente qué esperar.' },
]

export default function Hero() {
  const animRef = useScrollAnimation()
  const { ref: glowRef, x, y } = useMouseGlow()

  return (
    <section className="hero" id="hero" ref={glowRef}>
      <div className="mouse-glow" style={{ left: x, top: y, opacity: x > 0 ? 1 : 0 }} />
      <div className="float-orb" style={{ width: 60, height: 60, top: '15%', right: '10%', background: 'rgba(79, 140, 255, 0.1)', animation: 'float 6s ease-in-out infinite' }} />
      <div className="float-orb" style={{ width: 40, height: 40, top: '60%', right: '5%', background: 'rgba(79, 140, 255, 0.08)', animation: 'float-delayed 8s ease-in-out infinite' }} />

      <div className="hero-left">
        <div className="hero-badge hero-badge-animated">Diseñadora web &amp; desarrolladora</div>
        <h1>Tu web<br />profesional,<br /><em className="hero-text-gradient">lista<br />para crecer</em></h1>
        <p className="hero-sub">
          Soy <strong>Ithaisa Sánchez González</strong>, y desarrollo sitios web en WordPress que incorporan confianza, posicionamiento y un <strong>crecimiento comprobado</strong>.
        </p>
        <div className="hero-actions">
          <a href="#contact" className="btn-primary btn-ripple">Cuéntame tu idea</a>
          <a href="#projects" className="btn-outline">Explorar proyectos</a>
        </div>
      </div>
      <div className="hero-cards stagger-children fade-up" ref={animRef}>
        {cards.map((c) => (
          <div className="hero-card card-hover-lift" key={c.title}>
            <h4>{c.title}</h4>
            <p>{c.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
