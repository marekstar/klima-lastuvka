import './About.css'

const About = () => {
  return (
    <section id="o-nas" className="about">
      <div className="container">
        <h2>O nás</h2>
        <div className="about-content">
          <div className="about-text">
            <h3>Tomáš a Miroslav Laštůvka</h3>
            <p>
              Jsme bratři s dlouholetými zkušenostmi v oboru klimatizací a chlazení.
              Naše rodinná firma se specializuje na prodej, montáž a servis klimatizačních
              jednotek pro domácnosti i firemní klientelu.
            </p>
            <p>
              Díky našim zkušenostem a individuálnímu přístupu ke každému zákazníkovi
              zajistíme, že Vaše klimatizace bude fungovat spolehlivě a efektivně.
              Spolupracujeme pouze s prověřenými výrobci a dodavateli kvalitních klimatizačních systémů.
            </p>
            <div className="about-stats">
              <div className="stat-item">
                <div className="stat-number">15+</div>
                <div className="stat-label">let zkušeností</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">500+</div>
                <div className="stat-label">spokojených zákazníků</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">100%</div>
                <div className="stat-label">profesionalita</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
