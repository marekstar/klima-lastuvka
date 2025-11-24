import './Services.css'

const Services = () => {
  const services = [
    {
      title: 'Klimatizace do bytu a domu',
      description: 'Dodáme a nainstalujeme klimatizaci přesně podle Vašich potřeb. Split systémy, multisplit nebo centrální klimatizace.',
      icon: '🏠'
    },
    {
      title: 'Firemní klimatizace',
      description: 'Komplexní řešení klimatizace pro kanceláře, restaurace, obchody a průmyslové objekty všech velikostí.',
      icon: '🏢'
    },
    {
      title: 'Servis a opravy',
      description: 'Pravidelná údržba, čištění filtrů, doplnění chladiva i opravy poruch. Rychlá reakce na Váš požadavek.',
      icon: '🔧'
    },
    {
      title: 'Tepelná čerpadla',
      description: 'Ekologické vytápění a ohřev vody pomocí tepelných čerpadel vzduch-voda a vzduch-vzduch.',
      icon: '♨️'
    }
  ]

  return (
    <section id="sluzby" className="services">
      <div className="container">
        <h2>Naše služby</h2>
        <p className="section-subtitle">
          Poskytujeme kompletní služby v oblasti klimatizace a tepelných čerpadel
        </p>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href="#kontakt" className="service-link">Zjistit více →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
