import { motion } from 'framer-motion'
import { profile, stats } from '../data/portfolio'
import { ArrowDown, Download } from './Icons'

const marquee = ['React', 'TypeScript', 'Node.js', 'Redux', 'NestJS', 'PostgreSQL', 'OpenAPI', 'Playwright', 'AWS', 'Docker', 'Next.js', 'Tailwind CSS']

const rise = (delay) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container">
        {profile.available && (
          <motion.div className="status" {...rise(0)}>
            <span className="status-dot" /> Available to join immediately
          </motion.div>
        )}

        <h1 className="hero-title">
          <span className="line"><motion.span {...rise(0.1)}>Unnati</motion.span></span>
          <span className="line"><motion.span {...rise(0.2)}>Joshi<span className="accent">.</span></motion.span></span>
        </h1>

        <div className="hero-bottom">
          <motion.p className="hero-tagline" {...rise(0.35)}>
            <strong>{profile.role}</strong> — {profile.tagline}
          </motion.p>

          <motion.div className="hero-ctas" {...rise(0.45)}>
            <a className="btn" href="#work">See my work <ArrowDown /></a>
            <a className="btn btn--ghost" href={profile.resume} download><Download /> Download resume</a>
          </motion.div>
        </div>

        <motion.ul className="stats" {...rise(0.55)}>
          {stats.map((s) => (
            <li key={s.label}>
              <span className="stat-value">{s.value}</span>
              <span className="stat-label">{s.label}</span>
            </li>
          ))}
        </motion.ul>
      </div>

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {[...marquee, ...marquee].map((t, i) => (
            <span key={i}>{t}<i>✦</i></span>
          ))}
        </div>
      </div>
    </section>
  )
}
