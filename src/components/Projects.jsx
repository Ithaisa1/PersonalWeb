import { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { projects, sliderItems, categories } from '../data/projects'

export default function Projects() {
  const [filter, setFilter] = useState('all')
  const sliderRef = useScrollAnimation()
  const filterRef = useScrollAnimation()
  const gridRef = useScrollAnimation()

  const filtered = filter === 'all' ? projects : projects.filter((p) => p.cat === filter)

  return (
    <section className="section section-alt" id="projects">
      <div className="label" style={{ textAlign: 'center' }}>PROYECTOS</div>
      <h2 className="section-title" style={{ textAlign: 'center' }}>Trabajos que <em>hablan por sí solos</em></h2>

      <div className="infinite-slider fade-up" ref={sliderRef}>
        <div className="slider-track">
          {[...sliderItems, ...sliderItems].map((item, i) => (
            <div className="slider-item" key={`${item}-${i}`}>{item}</div>
          ))}
        </div>
      </div>

      <div className="projects-filters fade-up" ref={filterRef}>
        {categories.map((cat) => (
          <button
            key={cat.key}
            className={`filter-btn${filter === cat.key ? ' active' : ''}`}
            onClick={() => setFilter(cat.key)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="projects-grid fade-up" ref={gridRef}>
        {filtered.map((p) => (
          <div className="project-card" key={p.title}>
            <div className="project-thumb">{p.thumb}</div>
            <div className="project-body">
              <h4>{p.title}</h4>
              <p>{p.desc}</p>
              <a href={p.url} className="project-link" target="_blank" rel="noopener noreferrer">Ver proyecto →</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
