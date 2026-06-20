import { useState } from 'react'
import './Navbar.css'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className="bracket">&lt;</span>
          Portfolio
          <span className="bracket">/&gt;</span>
        </div>
        
        <button 
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li><a onClick={() => scrollTo('about')}>About</a></li>
          <li><a onClick={() => scrollTo('skills')}>Skills</a></li>
          <li><a onClick={() => scrollTo('projects')}>Projects</a></li>
          <li><a onClick={() => scrollTo('contact')}>Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}
