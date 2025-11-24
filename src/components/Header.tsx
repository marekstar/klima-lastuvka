import { useState } from 'react'
import './Header.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <span className="logo-text">Laštůvka Klimatizace</span>
          </div>

          <button
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <a href="#home" onClick={() => setIsMenuOpen(false)}>Domů</a>
            <a href="#sluzby" onClick={() => setIsMenuOpen(false)}>Služby</a>
            <a href="#o-nas" onClick={() => setIsMenuOpen(false)}>O nás</a>
            <a href="#kontakt" onClick={() => setIsMenuOpen(false)}>Kontakt</a>
            <a href="tel:+420777888999" className="header-phone">+420 777 888 999</a>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
