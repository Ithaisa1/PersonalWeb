import { useState, useEffect, useCallback } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { testimonials } from '../data/testimonials'

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [fading, setFading] = useState(false)
  const cardRef = useScrollAnimation()

  const changeTestimonial = useCallback((i) => {
    setFading(true)
    setTimeout(() => {
      setCurrent(i)
      setFading(false)
    }, 300)
  }, [])

  const goTo = useCallback((i) => changeTestimonial(i), [changeTestimonial])

  useEffect(() => {
    const id = setInterval(() => {
      changeTestimonial((current + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(id)
  }, [current, changeTestimonial])

  const t = testimonials[current]

  return (
    <section className="section section-white" id="testimonials">
      <div style={{ textAlign: 'center' }}>
        <div className="label" style={{ display: 'inline-block' }}>TESTIMONIOS</div>
        <h2 className="section-title">Opiniones de quienes <em>ya han confiado en mí</em></h2>
      </div>
      <div className="testimonial-wrap">
        <div className="testimonial-card fade-up" ref={cardRef}>
          <div className={`testimonial-fade${fading ? ' fading' : ''}`}>
            <blockquote>&ldquo;{t.text}&rdquo;</blockquote>
            <div className="testimonial-author">
              <div className="author-avatar" style={{ animation: 'pulse-glow 2s ease-in-out infinite' }}>{t.initials}</div>
              <div>
                <div className="author-name">{t.name}</div>
                <div className="author-role">{t.role}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="testimonial-dots">
          {testimonials.map((_, i) => (
            <div
              key={i}
              className={`dot${i === current ? ' active' : ''}`}
              onClick={() => goTo(i)}
              style={{ transition: 'all 0.3s ease', transform: i === current ? 'scale(1.4)' : 'scale(1)' }}
            />
          ))}
        </div>
        <div className="testimonial-cta">
          <p>¿Quieres compartir tu experiencia trabajando conmigo?</p>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSdrYOhVNWTQp-VFkmj-ic-VXHPipBUGBz0z4KZd1zVsTTNuZA/viewform?usp=header" target="_blank" rel="noopener noreferrer">
            ¿Te ha gustado trabajar juntos? Me encantaría saber de ti.
          </a>
        </div>
      </div>
    </section>
  )
}
