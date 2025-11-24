import './Process.css'

const Process = () => {
  const steps = [
    {
      number: '1',
      title: 'Konzultace a kalkulace',
      description: 'Navštívíme Vás a provedeme odborné zhodnocení prostoru. Navrhneme optimální řešení a zpracujeme cenovou nabídku.'
    },
    {
      number: '2',
      title: 'Profesionální montáž',
      description: 'Realizujeme montáž klimatizace podle nejvyšších standardů. Veškeré práce provádíme rychle, kvalitně a s minimem zásahů do interiéru.'
    },
    {
      number: '3',
      title: 'Servis a údržba',
      description: 'Poskytujeme pravidelný servis a údržbu klimatizací. V případě poruchy jsme k dispozici pro rychlé řešení problému.'
    }
  ]

  return (
    <section className="process">
      <div className="container">
        <h2>Jak to funguje</h2>
        <p className="section-subtitle">Tři jednoduché kroky ke komfortní klimatizaci</p>

        <div className="process-steps">
          {steps.map((step, index) => (
            <div key={index} className="process-step">
              <div className="step-number">{step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process
