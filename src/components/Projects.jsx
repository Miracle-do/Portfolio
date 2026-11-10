import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import Reveal from './Reveal'
import { GithubIcon } from './Icons'
import { CATEGORIES, projects } from '../data/projects'

function Card({ p }) {
  return (
    <motion.article
      layout
      className={`card ${p.featured ? 'card--featured' : ''}`}
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.3 }}
    >
      <div className="card__top">
        <span className="card__icon" aria-hidden="true">{p.icon}</span>
        <span className={`status status--${p.status === 'En cours' ? 'wip' : p.status === 'En ligne' ? 'live' : 'src'}`}>
          {p.status}
        </span>
      </div>
      <h3>{p.title}</h3>
      <p className="card__tagline">{p.tagline}</p>
      <p className="card__desc">{p.description}</p>
      <ul className="tags">
        {p.stack.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>
      <div className="card__links">
        {p.live && (
          <a href={p.live} target="_blank" rel="noreferrer">
            <ExternalLink size={15} /> Voir le site
          </a>
        )}
        {p.repo && (
          <a href={p.repo} target="_blank" rel="noreferrer">
            <GithubIcon width={15} height={15} /> Code
          </a>
        )}
        {p.extra?.map((e) => (
          <a key={e.url} href={e.url} target="_blank" rel="noreferrer">
            <GithubIcon width={15} height={15} /> {e.label}
          </a>
        ))}
      </div>
    </motion.article>
  )
}

export default function Projects() {
  const [cat, setCat] = useState('all')
  const list = useMemo(
    () => (cat === 'all' ? projects : projects.filter((p) => p.category === cat)),
    [cat],
  )
  const counts = useMemo(() => {
    const c = { all: projects.length }
    projects.forEach((p) => (c[p.category] = (c[p.category] || 0) + 1))
    return c
  }, [])

  return (
    <section id="projects" className="section">
      <div className="container">
        <Reveal>
          <p className="eyebrow">Réalisations</p>
          <h2>
            Ce que j’ai <em>forgé</em>
          </h2>
        </Reveal>
        <div className="filters" role="tablist">
          {CATEGORIES.map((c) => (
            <button
              key={c.id}
              role="tab"
              aria-selected={cat === c.id}
              className={cat === c.id ? 'is-active' : ''}
              onClick={() => setCat(c.id)}
            >
              {c.label} <small>{counts[c.id] || 0}</small>
            </button>
          ))}
        </div>
        <motion.div layout className="grid">
          <AnimatePresence mode="popLayout">
            {list.map((p) => (
              <Card key={p.id} p={p} />
            ))}
          </AnimatePresence>
        </motion.div>
        <p className="more">
          Et la liste continue sur{' '}
          <a href="https://github.com/Miracle-do" target="_blank" rel="noreferrer">
            github.com/Miracle-do
          </a>
        </p>
      </div>
    </section>
  )
}
