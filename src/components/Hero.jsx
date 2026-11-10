import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__glow hero__glow--a" />
      <div className="hero__glow hero__glow--b" />
      <div className="container hero__inner">
        <motion.span
          className="badge"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <i className="dot" /> Disponible · Cotonou, Bénin 🇧🇯
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Je ne construis pas des sites web.
          <br />
          Je forge des <em>mondes digitaux</em>.
        </motion.h1>
        <motion.p
          className="hero__sub"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
        >
          Miracle LOHOUNME — développeur full-stack, entrepreneur et architecte d’écosystèmes
          numériques, depuis le cœur de l’Afrique.
        </motion.p>
        <motion.div
          className="hero__cta"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <a href="#projects" className="btn btn--gold">
            Explorer mes créations
          </a>
          <a href="#contact" className="btn btn--ghost">
            Travaillons ensemble
          </a>
        </motion.div>
      </div>
      <a href="#about" className="hero__scroll" aria-label="Défiler">
        <ArrowDown size={18} />
      </a>
    </section>
  )
}
