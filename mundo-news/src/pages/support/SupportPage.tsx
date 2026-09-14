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

      <section className="support-page__benefits-hero">
        <HeroLogo className="support-page__benefits-hero-logo" />

        <ul className="support-page__benefits-hero-list">
          <li>Gravida neque convallis!</li>
          <li>Odio facilisis mauris sit.</li>
          <li>Ante metus?</li>
          <li>Tortor pretium viverra suspendisse potenti?</li>
          <li>Scelerisque eu ultrices vitae, auctor.</li>
        </ul>
      </section>

      <section className="support-page__alternatives">

        <div className="support-page__alternatives-title">A cras semper auctor</div>
        <div className="support-page__alternatives-subtitle">Nibh tortor, id aliquet lectus proin nibh nisl</div>

        <ul className="support-page__alternatives-links">
          <li className="col-full">
            <button>
              <i className="fa-brands fa-google"></i> Contribua usando o Google
            </button>
          </li>
          <li className="col-full">
            <button>
              <i className="fa-brands fa-youtube"></i> Seja membro no Youtube
            </button>
          </li>
          <li className="col-full">
            <button>
              <i className="fa-regular fa-calendar"></i> Outros valores mensais e anuais
            </button>
          </li>
          <li className="col-half">
            <button>
              {/* Font Awesome Free 7.3.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc. */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                <path d="M544 576L320 450.4L96 576L96 294.7L544 294.7L544 576zM544 239.8L96 239.8L96 179.3L544 179.3L544 239.8zM544 64L544 124.5L96 124.5L96 64L544 64z"/>
              </svg>
                      Substack
            </button>
          </li>
          <li className="col-half">
            <button><i className="fa-solid fa-heart"></i> Apoia.se</button>
          </li>
          <li className="col-half">
            <button><i className="fa-brands fa-paypal"></i> PayPal</button>
          </li>
          <li className="col-half">
            <button>
              <img alt="cartase" src="/logo_catarse_icon.png"/> Catarse
            </button>
          </li>
          <li className="col-full">
            <button>
              <i className="fa-brands fa-pix"></i> Contribuição via PIX
            </button>
          </li>
          <li className="col-full">
	        <button className="accent">apoie@mundonews.com.br</button>
          </li>
        </ul>

      </section>

      <section className="support-page__discounts">

        <div className="support-page__discounts-title">Sed sed risus pretium quam vulputate!</div>
        <div className="support-page__discounts-subtitle">
          Vitae congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et.
        </div>

        <div className="support-page__discounts-cards">
          <div className="support-page__discounts-card">Card 1</div>
          <div className="support-page__discounts-card">Card 2</div>
          <div className="support-page__discounts-card">Card 3</div>
          <div className="support-page__discounts-card">Card 4</div>
          <div className="support-page__discounts-card">Card 5</div>
          <div className="support-page__discounts-card">Card 6</div>
          <div className="support-page__discounts-card">Card 7</div>
          <div className="support-page__discounts-card">Card 8</div>
          <div className="support-page__discounts-card">Card 9</div>
          <div className="support-page__discounts-card">Card 10</div>
          <div className="support-page__discounts-card">Card 11</div>
          <div className="support-page__discounts-card">Card 12</div>
        </div>

        <button className="support-page__discounts-btn">Apoie agora! <i className="fa-solid fa-arrow-right"></i></button>

      </section>

      <section className="support-page__benefits">

        <HeroLogo type="wide" />

        <div className="support-page__benefits-subtitle">
          Ipsum consectetur officiis distinctio excepturi dolores cupiditate beatae, temporibus eius labore
          Non necessitatibus sed possimus laborum omnis quae aliquid eveniet porro? Natus alias cum cum porro
          quibusdam? Quaerat corrupti expedita blanditiis hic sequi Nesciunt repellat eos ratione quisquam
          explicabo commodi! Repellat et
        </div>

        <div className="support-page__benefits-cards">

          <div className="col-half">
            <div className="card">
              <div className="card-icon"><i className="fa-solid fa-envelope"></i></div>
              <div className="card-title">Lorem magni consectetur ex</div>
              <div className="card-subtitle">Adipisicing iusto praesentium vero quos voluptate</div>
            </div>
          </div>

          <div className="col-half">
            <div className="card">
              <div className="card-icon"><i className="fa-solid fa-trophy"></i></div>
              <div className="card-title">Amet facere quae?</div>
              <div className="card-subtitle">Sit ex tenetur provident obcaecati adipisicing! Pariatur!</div>
            </div>
          </div>

          <div className="col-half">
            <div className="card">
              <div className="card-icon"><i className="fa-solid fa-gift"></i></div>
              <div className="card-title">Lorem magnam sapiente provident</div>
              <div className="card-subtitle">Elit consequatur nisi at atque ratione? Omnis quasi?</div>
            </div>
          </div>

          <div className="col-half">
            <div className="card">
              <div className="card-icon"><i className="fa-solid fa-camera"></i></div>
              <div className="card-title">Consectetur quibusdam dolore aspernatur corporis.</div>
              <div className="card-subtitle">Dolor ut iste esse eos odit?</div>
            </div>
          </div>

          <div className="col-full">
            <div className="card">
              <div className="card-icon"><i className="fa-solid fa-message"></i></div>
              <div className="card-title">Ipsum quibusdam ad in at.</div>
              <div className="card-subtitle">Consectetur neque asperiores architecto dolore dignissimos. Inventore voluptate</div>
            </div>
          </div>

        </div>

        <button className="support-page__benefits-btn">Apoie agora! <i className="fa-solid fa-arrow-right"></i></button>

      </section>

    </div>
  )
}

export default SupportPage
