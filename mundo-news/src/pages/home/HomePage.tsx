import OpinionsSlider from "/src/pages/home/OpinionsSlider"
import HeaderAd from "/src/pages/home/HeaderAd"

import "/src/pages/home/home-page.css"

import opinions from "/src/pages/home/opinions"

type Article = {
  topic: string
  title: string
  author: string
  subtitle?: string
  picture?: string
}

const featuredWide: Article = {
  topic: "Estados Unidos",
  title: "Mamdani chama Netanyahu de ‘criminoso de guerra’ e cobra que governo Trump cumpra mandado do TPI",
  author: "Redação",
  subtitle: "Prefeito afirmou que cidade não tem autoridade legal para prender premiê, que foi acusado em novembro de 2024 por crimes de guerra e contra a humanidade em Gaza",
}

const featuredSmall: Article = {
  topic: "Guerra EUA e Israel x Irã",
  title: "Trump ameaça bombardear uma usina elétrica para cada ataque a navio no Estreito de Ormuz",
  author: "Tatiana Carlotti",
  subtitle: "Teerã afirma que retaliará atacando instalações energéticas de interesse norte-americano no Oriente Médio, caso ocorram agressões contra sua infraestrutura",
}

const featuredBig: Article = {
  topic: "Guerra na Ucrânia",
  title: "‘Regime de Kiev está ruindo por dentro’, diz porta-voz russo sobre mudanças na liderança militar ucraniana",
  author: "Tabitha Ramalho",
}

const HomePage = () => {
  return (
    <div className="container">

      <header>
        <OpinionsSlider opinions={opinions} />
        <HeaderAd />
      </header>

      <main className="home-content">

        <div className="home-content__left">

          <div className="home-content__featured">

            {/* Featured Article Wide */}
            <div className="featured-article-wide">
              <div className="featured-article-wide__topic home-article-topic">{featuredWide.topic}</div>
              <div className="featured-article-wide__title home-article-title">{featuredWide.title}</div>
              <div className="featured-article-wide__author home-article-author">{featuredWide.author}</div>
              <div className="featured-article-wide__subtitle">{featuredWide.subtitle}</div>
            </div>

            {/* Featured Article Small */}
            <div className="featured-article-small">
              <div className="featured-article-small__img home-article-img"></div>
              <div className="featured-article-small__topic home-article-topic">{featuredSmall.topic}</div>
              <div className="featured-article-small__title home-article-title">{featuredSmall.title}</div>
              <div className="featured-article-small__author home-article-author">{featuredSmall.author}</div>
              <div className="featured-article-small__subtitle">{featuredSmall.subtitle}</div>
            </div>

            {/* Featured Article Big */}
            <div className="featured-article-big">
              <div className="featured-article-big__img home-article-img"></div>
              <div className="featured-article-big__topic home-article-topic">{featuredBig.topic}</div>
              <div className="featured-article-big__title home-article-title">{featuredBig.title}</div>
              <div className="featured-article-big__author home-article-author">{featuredBig.author}</div>
            </div>

          </div>

        </div>

        <div className="home-content__right">
          <span>RIGHT SPAN</span>
        </div>

      </main>

      <footer>Home Page footer</footer>

    </div>
  )
}

export default HomePage
