import { Link } from 'react-router-dom'
import { useState } from 'react'

import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { useTiltEffect } from '../hooks/useTiltEffect'
import { projects, sliderItems, categories } from '../data/projects'

const brandColors = {
  'Aurelis Dental': ['#0ea5e9', '#06b6d4'],
  'Arquimia Artesanal': ['#f59e0b', '#d97706'],
  'Dmoares': ['#8b5cf6', '#6366f1'],
  'Becky Browne': ['#ec4899', '#f43f5e'],
}

function ProjectCard({ project }) {
  const { ref, handleMouseMove, handleMouseLeave } = useTiltEffect()

  const colors =
    brandColors[project.title] || ['#4f8cff', '#3a78f0']

  return (
    <div
      className="project-card card-border-glow"
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="project-gradient"
        style={{
          background: `linear-gradient(135deg, ${colors[0]} 0%, ${colors[1]} 100%)`,
        }}
      >
        <span className="project-icon">
          {project.thumb}
        </span>

        <span className="project-url-overlay">
          {project.url
            ? project.url.replace(/https?:\/\//, '')
            : 'Proyecto'}
        </span>
      </div>

      <div className="project-body">
        <h4>{project.title}</h4>

        <p>{project.desc}</p>

        <Link
          to={`/proyectos/${project.id}`}
          className="project-link"
        >
          Ver proyecto →
        </Link>
      </div>
    </div>
  )
}

export default function Projects() {
  const [filter, setFilter] = useState('all')

  const sliderRef = useScrollAnimation()
  const filterRef = useScrollAnimation()
  const gridRef = useScrollAnimation()

  const filtered =
    filter === 'all'
      ? projects
      : projects.filter((p) => p.cat === filter)

  return (
    <section
      className="section section-alt"
      id="projects"
    >
      <div
        className="label"
        style={{ textAlign: 'center' }}
      >
        PROYECTOS
      </div>

      <h2
        className="section-title"
        style={{ textAlign: 'center' }}
      >
        Trabajos que <em>hablan por sí solos</em>
      </h2>

      <div
        className="infinite-slider fade-up"
        ref={sliderRef}
      >
        <div className="slider-track">
          {[...sliderItems, ...sliderItems].map(
            (item, i) => (
              <div
                className="slider-item"
                key={`${item}-${i}`}
              >
                {item}
              </div>
            )
          )}
        </div>
      </div>

      <div
        className="projects-filters fade-up"
        ref={filterRef}
      >
        {categories.map((cat) => (
          <button
            key={cat.key}
            className={`filter-btn${
              filter === cat.key ? ' active' : ''
            }`}
            onClick={() => setFilter(cat.key)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div
        className="projects-grid stagger-children fade-up"
        ref={gridRef}
      >
        {filtered.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </div>
    </section>
  )
}