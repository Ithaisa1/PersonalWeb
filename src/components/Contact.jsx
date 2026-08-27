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

  const handleRipple = useCallback((e) => {
    const btn = e.currentTarget
    const rect = btn.getBoundingClientRect()
    const ripple = document.createElement('span')
    ripple.className = 'ripple-effect'
    ripple.style.left = `${e.clientX - rect.left}px`
    ripple.style.top = `${e.clientY - rect.top}px`
    ripple.style.width = ripple.style.height = '20px'
    btn.appendChild(ripple)
    setTimeout(() => ripple.remove(), 600)
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!formRef.current) return

    setStatus({ text: '⏳ Enviando...', disabled: true })

    try {
      await sendContactForm(formRef.current)
      setStatus({ text: '✅ ¡Mensaje enviado!', disabled: true })
      formRef.current.reset()
      setTimeout(() => setStatus({ text: '✉ Enviar mensaje', disabled: false }), 3000)
    } catch (err) {
      console.error('EmailJS error:', err)
      const msg = err?.text || err?.message || 'Error al enviar'
      setStatus({ text: `❌ ${msg}`, disabled: true })
      setTimeout(() => setStatus({ text: '✉ Enviar mensaje', disabled: false }), 5000)
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
            {[
              { icon: '📍', text: 'Gran Canaria, España' },
              { icon: '✉️', text: 'ithaisasanchezgonzalez@gmail.com' },
              { icon: '📞', text: '+34 672 075 340' },
            ].map((item) => (
              <div className="contact-info-item card-hover-lift" key={item.text} style={{ padding: '8px', borderRadius: 8 }}>
                <span className="ci-icon">{item.icon}</span> {item.text}
              </div>
            ))}
          </div>
        </div>
        <form className="contact-form fade-up" ref={setFormRef} onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group form-group-focus">
              <label>Nombre *</label>
              <input type="text" name="user_name" placeholder="Tu nombre" required />
            </div>
            <div className="form-group form-group-focus">
              <label>Correo electrónico *</label>
              <input type="email" name="user_email" placeholder="tu@email.com" required />
            </div>
          </div>
          <div className="form-group form-group-focus">
            <label>Mensaje *</label>
            <textarea name="message" placeholder="Cuéntame sobre tu proyecto..." required />
          </div>
          <div className="form-row">
            <div className="form-group form-group-focus">
              <label>LinkedIn</label>
              <input type="text" name="linkedin" placeholder="linkedin.com/in/..." />
            </div>
            <div className="form-group form-group-focus">
              <label>Email adicional</label>
              <input type="email" name="additional_email" placeholder="otro@email.com" />
            </div>
          </div>
          <button type="submit" className="btn-send btn-ripple" disabled={status.disabled} onClick={handleRipple}>
            {status.text}
          </button>
        </form>
      </div>
    </section>
  )
}
