import { Link, useParams } from 'react-router-dom'
import { projects } from '../data/projects'
import '../styles/Demo.css'

export default function Demo() {
  const { id } = useParams()

  const project = projects.find((p) => p.id === id)

  if (!project) {
    return (
      <main className="demo-page">
        <div className="demo-container">
          <Link to="/" className="back-link">
            ← Volver al inicio
          </Link>

          <div className="demo-empty">
            <span className="demo-empty-icon">🔍</span>
            <h1>Demo no encontrada</h1>
            <p>
              El proyecto que buscas no existe o todavía no tiene una demo.
            </p>

            <Link to="/#projects" className="demo-button">
              Ver proyectos
            </Link>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="demo-page">

      <div className="demo-container">

        {/* Volver */}
        <Link to={`/proyectos/${project.id}`} className="back-link">
          ← Volver al proyecto
        </Link>

        {/* Hero */}
        <section className="demo-hero">

          <div className="demo-label">
            DEMO INTERACTIVA
          </div>

          <h1>
            {project.title}
          </h1>

          <p className="demo-description">
            Explora una demostración interactiva del proyecto y descubre
            cómo se ha planteado su experiencia digital.
          </p>

          <div className="demo-actions">

            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="demo-button primary"
              >
                Abrir demo ↗
              </a>
            )}

            <Link
              to={`/proyectos/${project.id}`}
              className="demo-button secondary"
            >
              Ver caso de estudio
            </Link>

          </div>

        </section>

        {/* Preview */}
        <section className="demo-preview">

          <div className="demo-preview-header">
            <span>PREVISUALIZACIÓN</span>
          </div>

          <div className="demo-preview-content">

            {project.demoUrl ? (
              <iframe
                src={project.demoUrl}
                title={`Demo de ${project.title}`}
                className="demo-iframe"
              />
            ) : (
              <div className="demo-placeholder">

                <span className="demo-placeholder-icon">
                  ✦
                </span>

                <h2>Demo próximamente</h2>

                <p>
                  Esta demo todavía no está disponible.
                  Estamos preparando la experiencia interactiva.
                </p>

              </div>
            )}

          </div>

        </section>

        {/* Información */}
        <section className="demo-info">

          <div>
            <span className="demo-info-label">
              PROYECTO
            </span>

            <h2>
              {project.title}
            </h2>
          </div>

          <div>
            <span className="demo-info-label">
              TECNOLOGÍAS
            </span>

            <div className="demo-technologies">
              {project.technologies?.map((technology) => (
                <span
                  key={technology}
                  className="demo-tech"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>

        </section>

      </div>

    </main>
  )
}