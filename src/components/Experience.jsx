import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { experience } from '../data/experience'

function TimelineItem({ item }) {
  const ref = useScrollAnimation()

  return (
    <div className={`timeline-item ${item.side} fade-up`} ref={ref}>
      {item.side === 'right' && <div />}
      <div className="timeline-content">
        <div className="timeline-dot" />
        <div className="tc-company">{item.company}</div>
        <div className="tc-role">{item.role}</div>
        <div className="tc-period">{item.period}</div>
        <ul className="tc-list">
          {item.items.map((i) => <li key={i}>{i}</li>)}
        </ul>
      </div>
      {item.side === 'left' && <div />}
    </div>
  )
}

export default function Experience() {
  return (
    <section className="section section-dark" id="experience">
      <div className="label" style={{ textAlign: 'center' }}>EXPERIENCIA</div>
      <h2 className="section-title" style={{ textAlign: 'center' }}>Mi <em>recorrido profesional</em></h2>
      <div className="experience-timeline">
        <div className="timeline-line" />
        {experience.map((item) => (
          <TimelineItem key={item.company + item.period} item={item} />
        ))}
      </div>
    </section>
  )
}
