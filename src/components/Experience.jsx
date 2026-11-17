import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Reveal, { SectionHead } from './Reveal'
import { experience } from '../data/portfolio'
import { ArrowUpRight } from './Icons'

export default function Experience() {
  const [main, ...rest] = experience
  const [active, setActive] = useState(0)
  const project = main.projects[active]

  return (
    <section id="work" className="section container">
      <SectionHead index="02" title="Experience" kicker="Products I've helped build, end to end." />

      <Reveal className="job">
        <div className="job-head">
          <div>
            <h3>{main.company}</h3>
            <p className="muted">{main.role} · {main.location}</p>
          </div>
          <span className="pill">{main.period}</span>
        </div>

        <div className="tabs" role="tablist">
          {main.projects.map((p, i) => (
            <button
              key={p.name}
              role="tab"
              aria-selected={i === active}
              className={`tab ${i === active ? 'tab--active' : ''}`}
              onClick={() => setActive(i)}
            >
              <span className="tab-num">0{i + 1}</span>{p.name}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={project.name}
            className="project-detail"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="project-detail-head">
              <h4>
                {project.link
                  ? <a href={project.link} target="_blank" rel="noreferrer">{project.name} <ArrowUpRight /></a>
                  : project.name}
              </h4>
              <p className="muted">{project.blurb}</p>
            </div>
            <ul className="points">
              {project.points.map((pt) => <li key={pt}>{pt}</li>)}
            </ul>
            <div className="tags">
              {project.tags.map((t) => <span key={t} className="tag">{t}</span>)}
            </div>
          </motion.div>
        </AnimatePresence>
      </Reveal>

      {rest.map((job) => (
        <Reveal key={job.company} className="job job--compact">
          <div className="job-head">
            <div>
              <h3>{job.company}</h3>
              <p className="muted">{job.role} · {job.note}</p>
            </div>
            <span className="pill">{job.period}</span>
          </div>
        </Reveal>
      ))}
    </section>
  )
}
