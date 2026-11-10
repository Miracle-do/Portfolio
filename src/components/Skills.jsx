import Reveal from './Reveal'
import { skills } from '../data/projects'

export default function Skills() {
  return (
    <section id="skills" className="section section--alt">
      <div className="container">
        <Reveal>
          <p className="eyebrow">Compétences</p>
          <h2>
            L’arsenal d’un <em>bâtisseur</em>
          </h2>
        </Reveal>
        <div className="skills">
          {skills.map((g, i) => (
            <Reveal key={g.group} delay={i * 0.08} className="skill-card">
              <h3>{g.group}</h3>
              <ul>
                {g.items.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
