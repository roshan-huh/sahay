import './Hero.css'

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-inner">
        <h1 className="hero-title">
          Find the government benefits you may be eligible for.
        </h1>
        <p className="hero-subtitle">
          Describe your situation in your own words. SAHAY matches you to
          relevant government schemes, explains why you may qualify, and
          shows exactly what to do next — no scheme names or paperwork
          jargon required to get started.
        </p>

        <div className="hero-actions">
          <button className="btn btn-primary hero-cta">Find Schemes</button>
        </div>

        <ul className="hero-trust-list">
          <li>Central &amp; state schemes</li>
          <li>Plain-language explanations</li>
          <li>No account required to search</li>
        </ul>
      </div>
    </section>
  )
}

export default Hero