// Mobile menu toggle
const menuToggle = document.querySelector('.nav-menu-toggle');
const navLinks = document.querySelector('.nav-links');
if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
  // Close menu when link clicked
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
    });
  });
}

// Nav scroll effect
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    nav?.classList.add('scrolled');
  } else {
    nav?.classList.remove('scrolled');
  }
});

// Scroll animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// Testimonials
const testimonials = [
  { text: '"Trabajar con ella es sinónimo de profesionalismo, compromiso y compañerismo. Aporta seriedad y lealtad a cualquier equipo en el que participe."', name: 'Carlos Díaz', role: 'Colega en el área de sistemas', initials: 'CD' },
  { text: '"Compartimos varios proyectos de informática y siempre demostró dedicación, compromiso y ganas de dar lo mejor en cada entrega."', name: 'Sara Curbelo', role: 'Antigua compañera de clase', initials: 'SC' },
  { text: '"Fue la mejor decisión. Ordenada, confiable, detallista y con una iniciativa que contagia. No para hasta lograr el mejor resultado posible."', name: 'Alejandra C', role: 'Compañera en agencia de talentos', initials: 'AC' },
  { text: '"Un trabajo impecable y con excelente comunicación. Su enfoque en diseño web y UX logra que todo sea más intuitivo y visualmente atractivo. Totalmente recomendable."', name: 'Raúl G', role: 'Cliente satisfecho', initials: 'RG' },
  { text: '"Escucha, adapta y resuelve con imaginación. Me hizo ver errores que yo no detectaba y los solucionó de forma profesional. Quedé altamente satisfecho."', name: 'Damian M', role: 'Cliente satisfecho', initials: 'DM' },
  { text: '"Transformó nuestra web en algo visualmente atractivo y coherente. Sus mejoras en tipografías, botones y secciones marcaron la diferencia. Ahora transmitimos la imagen profesional que buscábamos."', name: 'Lucía R', role: 'Emprendedora satisfecha', initials: 'LR' }
];
let currentT = 0;
function setTestimonial(i) {
  currentT = i;
  const t = testimonials[i];
  document.getElementById('testimonial-text').textContent = t.text;
  document.getElementById('testimonial-name').textContent = t.name;
  document.getElementById('testimonial-role').textContent = t.role;
  document.getElementById('testimonial-avatar').textContent = t.initials;
  document.querySelectorAll('.dot').forEach((d, idx) => d.classList.toggle('active', idx === i));
}
setInterval(() => setTestimonial((currentT + 1) % testimonials.length), 5000);

// Project filter
function filterProjects(cat, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.project-card').forEach(card => {
    card.style.display = (cat === 'all' || card.dataset.cat === cat) ? 'block' : 'none';
  });
}

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    const href = a.getAttribute('href');
    if (href !== '#') {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});

// EmailJS initialization - esperar a que esté disponible
let emailjsReady = false;
const checkEmailJS = setInterval(() => {
  if (typeof emailjs !== 'undefined') {
    emailjs.init('TIXtjCPnwtGwqkRsR');
    emailjsReady = true;
    console.log('✓ EmailJS inicializado');
    clearInterval(checkEmailJS);
  }
}, 100);

// Timeout después de 5 segundos
setTimeout(() => {
  if (!emailjsReady) {
    console.error('⚠️ Cargando EmailJS de forma alternativa...');
    if (typeof emailjs !== 'undefined') {
      emailjs.init('TIXtjCPnwtGwqkRsR');
      emailjsReady = true;
    }
  }
}, 5000);

// Form submit
function handleSubmit(e) {
  e.preventDefault();
  const btn = document.querySelector('.btn-send');
  const form = document.getElementById('contactForm');

  // Si EmailJS no está listo, esperar un poco más
  if (!emailjsReady) {
    btn.textContent = '⏳ Cargando servicio...';
    btn.disabled = true;

    // Intentar nuevamente después de 1 segundo
    setTimeout(() => handleSubmit(e), 1000);
    return;
  }

  // Verificar que emailjs esté disponible
  if (typeof emailjs === 'undefined') {
    btn.textContent = '❌ Error: Servicio no disponible';
    btn.style.background = '#ef4444';
    console.error('EmailJS no está disponible');
    return;
  }

  // Show sending state
  btn.textContent = '⏳ Enviando...';
  btn.disabled = true;

  // Send email via EmailJS
  emailjs.sendForm('service_a6u6dl8', 'template_7w5dvaq', form)
    .then(() => {
      // Success message
      btn.textContent = '✅ ¡Mensaje enviado!';
      btn.style.background = '#22c55e';
      form.reset();

      // Reset button after 3 seconds
      setTimeout(() => {
        btn.textContent = '✉ Enviar mensaje';
        btn.style.background = '';
        btn.disabled = false;
      }, 3000);
    })
    .catch((error) => {
      // Error message
      console.error('Error:', error);
      btn.textContent = '❌ Error al enviar';
      btn.style.background = '#ef4444';

      // Reset button after 3 seconds
      setTimeout(() => {
        btn.textContent = '✉ Enviar mensaje';
        btn.style.background = '';
        btn.disabled = false;
      }, 3000);
    });
}