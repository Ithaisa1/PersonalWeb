import { useRef, useState, useCallback } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { sendContactForm } from '../services/emailjs'

export default function Contact() {
  const formRef = useRef(null)
  const animRef = useScrollAnimation()
  const leftRef = useScrollAnimation()
  const [status, setStatus] = useState({ text: '✉ Enviar mensaje', disabled: false })

  const setFormRef = useCallback((node) => {
    formRef.current = node
    animRef.current = node
  }, [animRef])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!formRef.current) return

    setStatus({ text: '⏳ Enviando...', disabled: true })

    try {
      await sendContactForm(formRef.current)
      setStatus({ text: '✅ ¡Mensaje enviado!', disabled: true })
      formRef.current.reset()
      setTimeout(() => setStatus({ text: '✉ Enviar mensaje', disabled: false }), 3000)
    } catch {
      setStatus({ text: '❌ Error al enviar', disabled: true })
      setTimeout(() => setStatus({ text: '✉ Enviar mensaje', disabled: false }), 3000)
    }
  }

  return (
    <section className="section section-dark" id="contact" style={{ background: 'var(--dark2)' }}>
      <div style={{ textAlign: 'center', marginBottom: 50 }}>
        <div className="label">CONTACTO</div>
        <h2 className="section-title">¿Tienes un proyecto <em>en mente?</em></h2>
        <p style={{ color: 'var(--gray)', fontSize: '0.9rem', marginTop: 8 }}>Cuéntamelo y buscaremos la mejor solución.</p>
      </div>
      <div className="contact-inner">
        <div className="contact-left fade-up" ref={leftRef}>
          <div className="contact-info">
            <div className="contact-info-item"><span className="ci-icon">📍</span> Gran Canaria, España</div>
            <div className="contact-info-item"><span className="ci-icon">✉️</span> ithaisasanchezgonzalez@gmail.com</div>
            <div className="contact-info-item"><span className="ci-icon">📞</span> +34 672 075 340</div>
          </div>
        </div>
        <form className="contact-form fade-up" ref={setFormRef} onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>Nombre *</label>
              <input type="text" name="user_name" placeholder="Tu nombre" required />
            </div>
            <div className="form-group">
              <label>Correo electrónico *</label>
              <input type="email" name="user_email" placeholder="tu@email.com" required />
            </div>
          </div>
          <div className="form-group">
            <label>Mensaje *</label>
            <textarea name="message" placeholder="Cuéntame sobre tu proyecto..." required />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>LinkedIn</label>
              <input type="text" name="linkedin" placeholder="linkedin.com/in/..." />
            </div>
            <div className="form-group">
              <label>Email adicional</label>
              <input type="email" name="additional_email" placeholder="otro@email.com" />
            </div>
          </div>
          <button type="submit" className="btn-send" disabled={status.disabled}>
            {status.text}
          </button>
        </form>
      </div>
    </section>
  )
}
