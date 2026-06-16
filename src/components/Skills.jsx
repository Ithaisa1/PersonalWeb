import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { skillGroups, softSkills } from '../data/skills'

export default function Skills() {
  const titleRef = useScrollAnimation()
  const gridRef = useScrollAnimation()
  const softRef = useScrollAnimation()

  return (
    <section className="section section-white" id="skills">
      <div style={{ textAlign: 'center', marginBottom: 10 }}>
        <div className="label" style={{ display: 'inline-block' }}>SKILLS</div>
      </div>
      <h2 className="section-title fade-up" ref={titleRef} style={{ textAlign: 'center' }}>
        Las herramientas y cualidades que <em>marcan la diferencia</em>
      </h2>

      <div className="skills-grid fade-up" ref={gridRef}>
        {skillGroups.map((group) => (
          <div className="skill-card" key={group.title}>
            <h4>{group.title}</h4>
            <div className="skill-tags">
              {group.tags.map((tag) => (
                <span className={`skill-tag${tag.blue ? ' blue' : ''}`} key={tag.label}>{tag.label}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: 32 }}>
        <div className="label" style={{ display: 'inline-block', color: 'var(--accent)' }}>Aptitudes personales</div>
      </div>
      <div className="soft-skills fade-up" ref={softRef}>
        {softSkills.map((s) => (
          <div className="soft-tag" key={s.label}>
            <span className="icon">{s.icon}</span> {s.label}
          </div>
        ))}
      </div>
    </section>
  )
}
