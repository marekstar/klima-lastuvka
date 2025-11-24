import './Hero.css'

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>Spolehlivé klimatizace pro Váš domov i firmu</h1>
          <p className="hero-subtitle">
            Profesionální prodej, montáž a servis klimatizačních jednotek
            od zkušených odborníků Tomáše a Miroslava Laštůvků
          </p>
          <div className="hero-buttons">
            <a href="#kontakt" className="btn btn-primary">Nezávazná poptávka</a>
            <a href="tel:+420777888999" className="btn btn-secondary">Zavolejte nám</a>
          </div>
          <div className="hero-features">
            <div className="feature-item">
              <div className="feature-icon">✓</div>
              <span>Dlouholeté zkušenosti</span>
            </div>
            <div className="feature-item">
              <div className="feature-icon">✓</div>
              <span>Kvalitní značky</span>
            </div>
            <div className="feature-item">
              <div className="feature-icon">✓</div>
              <span>Rychlý servis</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
