import { useState } from 'react'
import Reveal from './Reveal'
import { profile, FORMSPREE_ID } from '../data/portfolio'
import { ArrowUpRight, Github, Linkedin, Mail } from './Icons'

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  async function handleSubmit(e) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    // No Formspree ID yet: fall back to the visitor's email app
    if (!FORMSPREE_ID) {
      const subject = encodeURIComponent(`Portfolio enquiry from ${data.get('name')}`)
      const body = encodeURIComponent(`${data.get('message')}\n\n— ${data.get('name')} (${data.get('email')})`)
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
      return
    }

    setStatus('sending')
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (!res.ok) throw new Error('Request failed')
      form.reset()
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="section container contact">
      <Reveal>
        <span className="section-index">05</span>
        <h2 className="contact-title">Let's build<br />something <span className="accent">great.</span></h2>
      </Reveal>

      <div className="contact-grid">
        <Reveal className="contact-links" delay={0.05}>
          <p className="lead">I'm open to full stack and frontend roles. Have an opportunity or just want to say hi? My inbox is open.</p>
          <a href={`mailto:${profile.email}`} className="contact-link"><Mail /> {profile.email} <ArrowUpRight /></a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="contact-link"><Linkedin /> LinkedIn <ArrowUpRight /></a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="contact-link"><Github /> GitHub <ArrowUpRight /></a>
        </Reveal>

        <Reveal as="form" className="contact-form" onSubmit={handleSubmit} delay={0.1}>
          <label>
            Name
            <input name="name" required autoComplete="name" placeholder="Your name" />
          </label>
          <label>
            Email
            <input name="email" type="email" required autoComplete="email" placeholder="you@company.com" />
          </label>
          <label>
            Message
            <textarea name="message" rows="5" required placeholder="Tell me about the role or project…" />
          </label>
          <button className="btn" type="submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending…' : 'Send message'} <ArrowUpRight />
          </button>
          {status === 'sent' && <p className="form-note form-note--ok">Thanks! I'll get back to you soon.</p>}
          {status === 'error' && <p className="form-note form-note--err">Something went wrong. Please email me directly.</p>}
        </Reveal>
      </div>
    </section>
  )
}
