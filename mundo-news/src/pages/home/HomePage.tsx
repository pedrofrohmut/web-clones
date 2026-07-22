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

const latestPosts = [
  {
    topic: "Brasil",
    title: "Acusado pelos EUA, Brasil tem mecanismo de combate ao trabalho forçado reconhecido internacionalmente",
    author: "Bruno de Freitas Moura",
    subtitle: "Especialistas classificam medidas de Washington como ‘protecionistas’, enquanto governo as considera ‘injustas’ e avalia aplicar Lei de Reciprocidade",
  },
  {
    topic: "Brasil",
    title: "Seminário ‘Economia de Bem-Estar e soberania’ reúne especialistas para discutir o futuro do Brasil",
    author: "Redação Opera Mundi",
    subtitle: "Evento terá mediação do jornalista Luís Nassif e contará com convidados como Márcio Pochmann, Fernando de Souza Coelho e Carlos Gadelha, entre outros",
  },
  {
    topic: "Estados Unidos",
    title: "Estados Unidos preparam novas tarifas sobre importações de 60 países",
    author: "Victor Farinelli",
    subtitle: "Governo Trump justificou medida afirmando que seriam nações que ‘sem legislação contra trabalho forçado, ou não a aplicam’; relatório de 2023, no entanto, aponta que país têm 1,1 milhão de trabalhadores forçados, mais que Brasil",
  },
]

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
              <div className="featured-article-wide__subtitle home-article-subtitle">{featuredWide.subtitle}</div>
            </div>

            {/* Featured Article Small */}
            <div className="featured-article-small">
              <div className="featured-article-small__img home-article-img">small article img</div>
              <div className="featured-article-small__topic home-article-topic">{featuredSmall.topic}</div>
              <div className="featured-article-small__title home-article-title">{featuredSmall.title}</div>
              <div className="featured-article-small__author home-article-author">{featuredSmall.author}</div>
              <div className="featured-article-small__subtitle home-article-subtitle">{featuredSmall.subtitle}</div>
            </div>

            {/* Featured Article Big */}
            <div className="featured-article-big">
              <div className="featured-article-big__img home-article-img">big article img</div>
              <div className="featured-article-big__topic home-article-topic">{featuredBig.topic}</div>
              <div className="featured-article-big__title home-article-title">{featuredBig.title}</div>
              <div className="featured-article-big__author home-article-author">{featuredBig.author}</div>
            </div>

          </div>

        </div>

        <div className="home-content__right home-sidebar">

          {/* Newsletter Form */}
          <div className="newsletter">
            <div className="newsletter__title">Newsletter</div>
            <form className="newsletter__form">
              <label htmlFor="email" className="newsletter__label">E-mail</label>
              <input type="email" id="email" className="newsletter__input required-input" />
              <button className="newsletter__submit">Inscreva-se!</button>
            </form>
          </div>

          {/* Featured Sidebar Video */}
          <div className="sidebar__featured-video">Sidebar video</div>

          {/* Sidebar Ad */}
          <div className="sidebar__ad">Sidebar AD</div>

          {/* Sidebar Latest Posts */}
          <div className="sidebar__latest-posts">
            {latestPosts.map(post => (
              <div key={post.title} className="latest-post">
                <div className="latest-post__topic home-article-topic">{post.topic}</div>
                <div className="latest-post__title home-article-title">{post.title}</div>
                <div className="latest-post__author home-article-author">{post.author}</div>
                <div className="latest-post__subtitle home-article-subtitle">{post.subtitle}</div>
              </div>
            ))}
          </div>

          {/* Sidebar Ad Bigger */}
          <div className="sidebar__ad-bigger">Sidebar AD</div>

        </div>

      </main>

      <footer>Home Page footer</footer>

    </div>
  )
}

export default HomePage
