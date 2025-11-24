import { useState, FormEvent } from 'react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', phone: '', message: '' })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="kontakt" className="contact">
      <div className="container">
        <h2>Kontaktujte nás</h2>
        <p className="section-subtitle">
          Máte zájem o naše služby? Rádi Vám připravíme nabídku na míru
        </p>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Laštůvka Klimatizace</h3>
            <div className="info-item">
              <strong>Telefon:</strong>
              <a href="tel:+420777888999">+420 777 888 999</a>
            </div>
            <div className="info-item">
              <strong>Email:</strong>
              <a href="mailto:info@lastuvka-klimatizace.cz">info@lastuvka-klimatizace.cz</a>
            </div>
            <div className="info-item">
              <strong>Provozní doba:</strong>
              <p>Po - Pá: 8:00 - 17:00</p>
              <p>So: 9:00 - 13:00</p>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Jméno a příjmení *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Telefon *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Zpráva *</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary">
              {submitted ? 'Odesláno!' : 'Odeslat poptávku'}
            </button>

            {submitted && (
              <div className="success-message">
                Děkujeme za Vaši zprávu! Brzy se Vám ozveme.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
