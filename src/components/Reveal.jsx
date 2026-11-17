import { motion } from 'framer-motion'

// Fades and lifts children into view once as they scroll into the viewport
export default function Reveal({ children, delay = 0, as = 'div', className, ...rest }) {
  const Tag = motion[as]
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </Tag>
  )
}

export function SectionHead({ index, title, kicker }) {
  return (
    <Reveal className="section-head">
      <span className="section-index">{index}</span>
      <h2 className="section-title">{title}</h2>
      {kicker && <p className="section-kicker">{kicker}</p>}
    </Reveal>
  )
}
