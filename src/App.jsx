import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Vision from './components/Vision'
import Contact from './components/Contact'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Vision />
        <Contact />
      </main>
      <footer className="footer">
        <div className="container">
          Conçu & développé par <strong>Miracle LOHOUNME</strong> — Cotonou, Bénin 🇧🇯 · © {new Date().getFullYear()}
        </div>
      </footer>
    </>
  )
}
