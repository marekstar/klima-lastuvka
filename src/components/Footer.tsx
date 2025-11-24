import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Laštůvka Klimatizace</h4>
            <p>
              Profesionální klimatizační služby od bratrů Tomáše a Miroslava Laštůvků.
              Prodej, montáž a servis klimatizací pro Váš domov i firmu.
            </p>
          </div>

          <div className="footer-section">
            <h4>Služby</h4>
            <ul>
              <li><a href="#sluzby">Klimatizace do bytu</a></li>
              <li><a href="#sluzby">Firemní klimatizace</a></li>
              <li><a href="#sluzby">Servis a opravy</a></li>
              <li><a href="#sluzby">Tepelná čerpadla</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Kontakt</h4>
            <ul>
              <li><a href="tel:+420777888999">+420 777 888 999</a></li>
              <li><a href="mailto:info@lastuvka-klimatizace.cz">info@lastuvka-klimatizace.cz</a></li>
              <li>Po - Pá: 8:00 - 17:00</li>
              <li>So: 9:00 - 13:00</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Laštůvka Klimatizace. Všechna práva vyhrazena.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
