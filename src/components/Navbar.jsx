import { useState } from 'react'
import './Navbar.css'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <div className="navbar-logo">SAHAY</div>

        <nav className={`navbar-links ${menuOpen ? 'navbar-links-open' : ''}`}>
          <a href="#home">Home</a>
          <a href="#find-schemes">Find Schemes</a>
          <a href="#how-it-works">How It Works</a>
        </nav>

        <button className="btn btn-primary navbar-cta">Find My Schemes</button>

        <button
          className="navbar-toggle"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}

export default Navbar