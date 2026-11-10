import Reveal from './Reveal'

const steps = [
  { t: 'Aujourd’hui', d: 'Je construis ma réputation en livrant des produits qui dépassent les attentes. DevFusion Squad grandit, chaque projet est une signature.' },
  { t: 'Demain', d: 'Diplômé de l’ENEAM, je développe une agence digitale béninoise reconnue à l’échelle ouest-africaine et je forme les développeurs de demain.' },
  { t: 'Après-demain', d: 'DevFusion Squad devient un studio tech panafricain : des produits SaaS nés en Afrique, utilisés dans le monde entier.' },
]

export default function Vision() {
  return (
    <section id="vision" className="section section--alt">
      <div className="container">
        <Reveal>
          <p className="eyebrow">Manifeste · 2030</p>
          <h2>
            Je ne vise pas le sommet — <em>je vise l’orbite.</em>
          </h2>
        </Reveal>
        <div className="timeline">
          {steps.map((s, i) => (
            <Reveal key={s.t} delay={i * 0.1} className="timeline__item">
              <h3>{s.t}</h3>
              <p>{s.d}</p>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <blockquote>
            Le code est mon outil. L’Afrique est mon combustible. Le monde est ma scène.
          </blockquote>
        </Reveal>
      </div>
    </section>
  )
}
