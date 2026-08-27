import { Link, useParams } from 'react-router-dom'
import { projects } from '../data/projects'
import '../styles/ProjectDetail.css'

export default function ProjectDetail() {
  const { id } = useParams()

  const project = projects.find((p) => p.id === id)

  if (!project) {
    return (
      <main className="project-detail">
        <div className="project-detail-container">

          <Link to="/#projects" className="back-link">
            ← Volver a proyectos
          </Link>

          <section className="project-not-found">
            <span>🔍</span>
            <h1>Proyecto no encontrado</h1>
            <p>
              El proyecto que buscas no existe.
            </p>

            <Link to="/#projects" className="project-detail-button">
              Ver proyectos
            </Link>
          </section>

        </div>
      </main>
    )
  }

  return (
    <main className="project-detail">

      <div className="project-detail-container">

        {/* Volver */}
        <Link to="/#projects" className="back-link">
          ← Volver a proyectos
        </Link>

        {/* Hero */}
        <section className="project-detail-hero">

          <div className="project-detail-icon">
            {project.thumb}
          </div>

          <div className="project-detail-category">
            {project.cat}
          </div>

          <h1>
            {project.title}
          </h1>

          <p className="project-detail-description">
            {project.desc}
          </p>

          <div className="project-detail-actions">

            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-detail-button primary"
            >
              Ver proyecto ↗
            </a>

            <Link
              to={`/demos/${project.id}`}
              className="project-detail-button secondary"
            >
              Ver demo
            </Link>

          </div>

        </section>

        {/* Información */}
        <section className="project-detail-info">

          <div className="project-info-card">

            <span className="project-info-label">
              MI ROL
            </span>

            <h2>
              {project.role}
            </h2>

          </div>

          <div className="project-info-card">

            <span className="project-info-label">
              TECNOLOGÍAS
            </span>

            <div className="project-technologies">

              {project.technologies?.map((technology) => (
                <span
                  key={technology}
                  className="project-tech"
                >
                  {technology}
                </span>
              ))}

            </div>

          </div>

        </section>

        {/* Caso de estudio */}
<section className="project-case-study">

  <div className="project-case-study-header">
    <span className="project-info-label">
      CASO DE ESTUDIO
    </span>

    <h2>
      Cómo planteé este proyecto
    </h2>

    <p>
      Un vistazo al proceso, las decisiones y las soluciones detrás
      de {project.title}.
    </p>
  </div>

  <div className="project-case-study-content">

    <article>
      <span className="project-case-number">
        01
      </span>

      <div>
        <span className="project-info-label">
          OBJETIVO
        </span>

        <h3>
          El objetivo
        </h3>

        <p>
          {project.objective}
        </p>
      </div>
    </article>

    <article>
      <span className="project-case-number">
        02
      </span>

      <div>
        <span className="project-info-label">
          DESAFÍO
        </span>

        <h3>
          El desafío
        </h3>

        <p>
          {project.challenge}
        </p>
      </div>
    </article>

    <article>
      <span className="project-case-number">
        03
      </span>

      <div>
        <span className="project-info-label">
          SOLUCIÓN
        </span>

        <h3>
          La solución
        </h3>

        <p>
          {project.solution}
        </p>
      </div>
    </article>

    <article>
      <span className="project-case-number">
        04
      </span>

      <div>
        <span className="project-info-label">
          RESULTADO
        </span>

        <h3>
          El resultado
        </h3>

        <p>
          {project.result}
        </p>
      </div>
    </article>

  </div>

</section>

      </div>

    </main>
  )
}