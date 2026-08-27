import { useScrollAnimation } from '../hooks/useScrollAnimation'

const items = [
  { icon: '🎨', title: 'Diseño orientado a resultados', text: 'Cada web que creo tiene un objetivo claro: generar confianza, captar leads o impulsar ventas.' },
  { icon: '⚙️', title: 'Construcción en múltiples stacks', text: 'WordPress, Elementor, HTML/CSS. Elijo las herramientas adecuadas según las necesidades del proyecto.' },
  { icon: '🏆', title: 'Comunicación multilingüe', text: 'Adapto mensajes y contenidos a distintos idiomas y audiencias con naturalidad.' },
  { icon: '📊', title: 'Optimización constante', text: 'Analizo, mido y mejoro cada proyecto para que evolucione junto a tu negocio.' },
]

export default function About() {
  const leftRef = useScrollAnimation()
  const rightRef = useScrollAnimation()

  return (
    <section className="section section-light" id="about">
      <div className="about-grid">
        <div className="about-left fade-up" ref={leftRef}>
          <div className="label">SOBRE MÍ</div>
          <h2 className="section-title">Transformo ideas en <em>experiencias digitales</em></h2>
          <p>Soy diseñadora web especializada en <strong>WordPress y marketing digital</strong>. Mi objetivo es claro: ayudar a que tu negocio pase al siguiente nivel con una presencia en línea que funcione de verdad.</p>
          <p>Me apasiona cuando puedo combinar creatividad con estrategia para crear páginas web que no sólo se vean bien, sino que realmente <strong>conviertan y crezcan</strong> con cada cliente.</p>
          <p>Mi formación en Desarrollo de Aplicaciones Web, certificaciones en marketing digital e IA generativa y el programa Diginnova me han permitido trabajar en proyectos reales de mejora de visibilidad online y experiencia de usuario.</p>
          <p>Para mí, una web no es solo diseño: es estrategia, rendimiento y usabilidad. Me apasiona el UX/UI porque la sencillez bien ejecutada es lo que convierte visitas en resultados.</p>
          <a href="#contact" className="btn-primary btn-ripple" style={{ marginTop: 24, display: 'inline-block' }}>Hablemos de tu proyecto</a>
        </div>
        <div className="about-right stagger-children fade-up" ref={rightRef}>
          {items.map((item) => (
            <div className="about-item card-hover-lift" key={item.title} style={{ padding: '8px', borderRadius: 12 }}>
              <div className="about-icon">{item.icon}</div>
              <div>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
