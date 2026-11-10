import { Download } from 'lucide-react'
import Reveal from './Reveal'
import { projects } from '../data/projects'

export default function About() {
  const stats = [
    { n: `${projects.length}`, l: 'Projets publiés' },
    { n: '15/20', l: 'Bac, mention Bien' },
    { n: '2', l: 'Structures fondées' },
  ]
  return (
    <section id="about" className="section">
      <div className="container about">
        <Reveal>
          <p className="eyebrow">À propos</p>
          <h2>
            Je suis né pour <em>bâtir</em>.
          </h2>
          <p>
            Développeur autodidacte basé à Cotonou, j’ai lancé <strong>DevFusion Squad</strong>, une
            communauté de développeurs juniors, puis <strong>MIRACLE DIGITALE</strong>, mon agence de
            présence digitale pour les commerçants et PME béninoises. J’étudie l’administration des
            réseaux informatiques à l’<strong>ENEAM</strong> (Université d’Abomey-Calavi).
          </p>
          <p>
            Je ne sépare pas technique et créativité : chaque interface est une conversation entre une
            vision et un humain. Participer à la SENUM m’a confirmé que l’Afrique numérique s’écrit
            maintenant — et que j’en suis l’un des auteurs.
          </p>
          <a
            className="btn btn--ghost"
            href={`${import.meta.env.BASE_URL}CV_LOHOUNME_Miracle_Melvyn.pdf`}
            download
          >
            <Download size={16} /> Télécharger mon CV
          </a>
        </Reveal>
        <Reveal delay={0.15} className="stats">
          {stats.map((s) => (
            <div className="stat" key={s.l}>
              <strong>{s.n}</strong>
              <span>{s.l}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
