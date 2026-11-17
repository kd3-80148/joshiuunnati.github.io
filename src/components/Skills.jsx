import Reveal, { SectionHead } from './Reveal'
import { skills } from '../data/portfolio'

export default function Skills() {
  return (
    <section id="skills" className="section container">
      <SectionHead index="03" title="Skills" kicker="The toolkit I reach for every day." />

      <div className="skills-grid">
        {skills.map((s, i) => (
          <Reveal key={s.group} className="skill-group" delay={(i % 3) * 0.08}>
            <h3>{s.group}</h3>
            <div className="tags">
              {s.items.map((item) => <span key={item} className="tag">{item}</span>)}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
