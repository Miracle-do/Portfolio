import { Mail } from 'lucide-react'
import Reveal from './Reveal'
import { GithubIcon, WhatsappIcon } from './Icons'

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <Reveal>
          <p className="eyebrow">Construisons ensemble</p>
          <h2>
            Prêt à <em>démarrer</em> ?
          </h2>
          <p className="contact__lead">
            Un projet, une collaboration, une idée ambitieuse ? Je réponds sous 24 h.
          </p>
          <div className="contact__links">
            <a className="btn btn--gold" href="https://wa.me/2290190821282" target="_blank" rel="noreferrer">
              <WhatsappIcon /> WhatsApp
            </a>
            <a className="btn btn--ghost" href="mailto:miraclelohounme@gmail.com">
              <Mail size={18} /> Email
            </a>
            <a className="btn btn--ghost" href="https://github.com/Miracle-do" target="_blank" rel="noreferrer">
              <GithubIcon /> GitHub
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
