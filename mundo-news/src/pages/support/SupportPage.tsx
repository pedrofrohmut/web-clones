import HeroLogo from "/src/pages/support/HeroLogo"

import "/src/pages/support/support-page.css"

const SupportPage = () => {
  return (
    <div className="page-container support-page">

      {/* Hero */}
      <div className="support-page__hero-wrapper">
        <div className="support-page__hero">

	  <div className="support-page__hero-left">
            <HeroLogo />
	  </div>

	  {/* Hero Right - Content */}
          <div className="support-page__hero-right">
            <div className="support-page__hero-accent">Ipsum provident elit eveniet libero.</div>
            <div className="support-page__hero-accent">Dolor qui voluptatem minus?</div>
            <div className="support-page__hero-text">
              Sit adipisci dolor esse voluptatibus dolorem. Sit minima quis hic eum tempora.
              Repudiandae similique suscipit cum consectetur vitae Possimus quam repellat
              assumenda iste illo Neque?
            </div>
          </div>

        </div>
      </div>

      <section className="support-page__pricing">

	<div className="support-page__pricing-title">Aliquet eget sit amet tellus</div>
	<div className="support-page__pricing-subtitle">
          Vel quam elementum pulvinar etiam non quam lacus suspendisse faucibus interdum posuere?
	</div>

	<div className="support-page__pricing-cards">
	  <div className="support-page__pricing-card">
	    <div className="support-page__pricing-card-title">Mensal</div>
	    <div className="support-page__pricing-card-subtitle">Lacinia quis vel eros donec!</div>
	    <div className="support-page__pricing-card-price">R$ <span>19,99</span></div>
	    <div className="support-page__pricing-card-button">Apoie com R$ 19,99</div>
	  </div>

	  <div className="support-page__pricing-card-highlighted">
	    <div className="support-page__pricing-card-title">Mensal</div>
	    <div className="support-page__pricing-card-subtitle">Dolor magna eget est lorem ipsum!</div>
	    <div className="support-page__pricing-card-price">R$ <span>49,99</span></div>
	    <div className="support-page__pricing-card-button">Apoie com R$ 49,99</div>
	  </div>

	  <div className="support-page__pricing-card">
	    <div className="support-page__pricing-card-title">Anual</div>
	    <div className="support-page__pricing-card-subtitle">In mollis nunc sed id?</div>
	    <div className="support-page__pricing-card-price">R$ <span>549,99</span></div>
	    <div className="support-page__pricing-card-button">Apoie com R$ 549,99</div>
	  </div>
	</div>

      </section>

      <button className="support-page__pricing-other-values">
        Apoie com outros valores <i className="fa-solid fa-arrow-right"></i>
      </button>

      <section className="support-page__benefits">
	<HeroLogo className="support-page__benefits-logo" />

	<ul className="support-page__benefits-list">
	  <li>Gravida neque convallis!</li>
	  <li>Odio facilisis mauris sit.</li>
	  <li>Ante metus?</li>
	  <li>Tortor pretium viverra suspendisse potenti?</li>
	  <li>Scelerisque eu ultrices vitae, auctor.</li>
	</ul>
      </section>

    </div>
  )
}

export default SupportPage
