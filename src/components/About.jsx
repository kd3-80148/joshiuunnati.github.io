import Reveal, { SectionHead } from './Reveal'
import { profile, education } from '../data/portfolio'
import { Pin } from './Icons'

export default function About() {
  return (
    <section id="about" className="section container">
      <SectionHead index="01" title="About" />

      <div className="bento">
        <Reveal className="card card--wide">
          <p className="card-label">Who I am</p>
          <p className="lead">{profile.summary}</p>
        </Reveal>

        <Reveal className="card card--accent" delay={0.1}>
          <p className="card-label">The plot twist</p>
          <p className="equation">∫ f(x) dx <span>→</span> f = x =&gt; …</p>
          <p>I started out teaching mathematics. The same love for clean logic and breaking hard problems into small steps is what I bring to code today.</p>
        </Reveal>

        <Reveal className="card" delay={0.05}>
          <p className="card-label">Based in</p>
          <p className="big"><Pin /> {profile.location}</p>
          <p className="muted">Open to on-site, hybrid and remote roles.</p>
        </Reveal>

        <Reveal className="card card--wide" delay={0.1}>
          <p className="card-label">Education</p>
          <ul className="edu">
            {education.map((e) => (
              <li key={e.degree}>
                <div>
                  <strong>{e.degree}</strong>
                  <span className="muted">{e.school}</span>
                </div>
                <span className="edu-meta">{e.period}<em>{e.score}</em></span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
