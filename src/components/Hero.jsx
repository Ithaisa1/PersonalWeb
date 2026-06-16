import { useScrollAnimation } from '../hooks/useScrollAnimation'

const cards = [
  { title: '🎯 Diseño responsivo y funcional', text: 'Cada sitio que creo se adapta a todos los dispositivos y convierte visitas en clientes reales.' },
  { title: '📝 Contenido sin problemas', text: 'Puedes administrar tu sitio en WordPress sin tener que saber programar en cada día.' },
  { title: '📈 Estrategia detrás de cada página', text: 'Cada sección está pensada para llevar al visitante desde el descubrimiento hasta la compra.' },
  { title: '💬 Trato directo y transparente', text: 'Sin intermediarios: una comunicación clara y honesta para que sepas exactamente qué esperar.' },
]

export default function Hero() {
  const animRef = useScrollAnimation()

  return (
    <section className="hero" id="hero">
      <div className="hero-left">
        <div className="hero-badge">Diseñadora web &amp; desarrolladora</div>
        <h1>Tu web<br />profesional,<br /><em>lista<br />para crecer</em></h1>
        <p className="hero-sub">
          Soy <strong>Ithaisa Sánchez González</strong>, y desarrollo sitios web en WordPress que incorporan confianza, posicionamiento y un <strong>crecimiento comprobado</strong>.
        </p>
        <div className="hero-actions">
          <a href="#contact" className="btn-primary">Cuéntame tu idea</a>
          <a href="#projects" className="btn-outline">Explorar proyectos</a>
        </div>
      </div>
      <div className="hero-cards fade-up" ref={animRef}>
        {cards.map((c) => (
          <div className="hero-card" key={c.title}>
            <h4>{c.title}</h4>
            <p>{c.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
