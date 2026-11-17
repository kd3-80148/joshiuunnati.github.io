import Reveal, { SectionHead } from './Reveal'
import { projects } from '../data/projects'
import { profile } from '../data/portfolio'
import { ArrowUpRight, Github } from './Icons'

export default function Projects() {
  return (
    <section id="projects" className="section container">
      <SectionHead index="04" title="Personal Projects" kicker="Things I build outside of work — always growing." />

      <div className="projects-grid">
        {projects.map((p, i) => (
          <Reveal key={p.title} className={`project-card ${p.placeholder ? 'project-card--placeholder' : ''}`} delay={(i % 3) * 0.08}>
            {p.image && <img className="project-img" src={p.image} alt={`${p.title} screenshot`} loading="lazy" />}
            <div className="project-top">
              <span className="project-num">{String(i + 1).padStart(2, '0')}</span>
              {p.placeholder && <span className="pill pill--soft">Coming soon</span>}
            </div>
            <h3>{p.title}</h3>
            <p className="muted">{p.description}</p>
            {p.tech?.length > 0 && (
              <div className="tags">
                {p.tech.map((t) => <span key={t} className="tag">{t}</span>)}
              </div>
            )}
            {(p.github || p.live) && (
              <div className="project-links">
                {p.github && <a href={p.github} target="_blank" rel="noreferrer"><Github /> Code</a>}
                {p.live && <a href={p.live} target="_blank" rel="noreferrer"><ArrowUpRight /> Live</a>}
              </div>
            )}
          </Reveal>
        ))}

        <Reveal className="project-card project-card--cta" delay={0.1}>
          <h3>More on GitHub</h3>
          <p className="muted">Experiments, practice repos and work in progress.</p>
          <a className="btn btn--ghost" href={profile.github} target="_blank" rel="noreferrer"><Github /> Visit GitHub</a>
        </Reveal>
      </div>
    </section>
  )
}
