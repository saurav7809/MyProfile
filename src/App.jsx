import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Experience from './components/Experience'
import Certifications from './components/Certifications'
import Achievements from './components/Achievements'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [theme, setTheme] = useState('dark')

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark')
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  return (
    <div className={`app theme-${theme}`} data-theme={theme}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Experience />
        <Certifications />
        <Achievements />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
