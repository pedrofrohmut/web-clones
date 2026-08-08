import { Link } from "react-router"

import InlineSlider from "/src/shared/InlineSlider"

import "/src/pages/article/article-page.css"

const article = {
  categorySlug: "america-latina",
  category: "América Latina",
  title: "MUS erat ‘porta-molunt maneant’ ad Nemo quam adulationis quos m hounnbre arcades, est stanie",
  subtitle: "Commodo EU Risus, NAM provocatus minus ab methodo e wisi modo sanguinis orbitam regalia, 'lorem vehicula atque dicit insldiis' v publiciter tenetur nam 'lapidor quis antemurale se occidentem ea Magna'",
}

const mostReadArticles = [
  {
    img: "",
    title: "Lobortis feugiat vivamus at augue eget arcu dictum varius duis at consectetur!",
    date: "1 abril 1969",
  },
  {
    img: "",
    title: "Dolor morbi non arcu risus, quis varius quam quisque id diam vel quam elementum pulvinar etiam non quam?",
    date: "3 abril 1969",
  },
  {
    img: "",
    title: "Lacinia quis vel eros donec ac odio tempor orci dapibus ultrices in iaculis nunc sed augue.",
    date: "2 abril 1969",
  },
  {
    img: "",
    title: "Lobortis feugiat vivamus at. Sit amet, mattis vulputate enim nulla aliquet!",
    date: "5 abril 1969",
  },
  {
    img: "",
    title: "Quam elementum pulvinar etiam non quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit amet, consectetur adipiscing elit duis tristique sollicitudin?",
    date: "4 abril 1969",
  },
]

const ArticlePage = () => {
  return (
    <div className="container">

      <div className="top-ad placeholder-img">Article Top Ad</div>

      <main className="page-main">

        <article className="article">

          <header className="article__header">
            <Link className="article-header__topic article-topic" to={`category/${article.categorySlug}`}>
              {article.category}
            </Link>
            <div className="article-header__title article-title">{article.title}</div>
            <div className="article-header__subtitle article-subtitle">{article.subtitle}</div>
          </header>

          <section className="article__author-info">
            <div className="author-name">Julio Cesar</div>
            <div className="author-city">Cidade Central</div>
            <div className="author-date">07 de setembro de 2050</div>
          </section>

          <div className="article__body">

            <p>
              D stupore me carceribus mazim-meruerunt MUS est formas dependentias
              eum dolor-sociis cras conditiones d mirum ea eius octavas, eius ad
              accumsan superlativo, moderno v interdum unde Quam, fusce modo
              claritas reprobo ipsum quis posuere neque e iste, atque me rem eum
              conjuso lucern antecedentia loquor ad effecerunt decursu rem Dolorum
              Gremio, modi ac eaque republicae regalia eget combinatur Magnis
              Harum. O republicae tot meritorum nibh sonini Sem Rem Cras Metus
              fames haeret-minim (75/88).
            </p>

            <p>
              “P natus-molunt serpens p dennuntio notitiam se vero per terrenos m
              perpetuum egestam, foederati me contignitate, consilii sem accusare
              consumere pellentesque a silentio adolescentulus ea comparere ea
              diligenter laudare”, obsianie v debitam, ad acerba mus iustum
              prophetico magna m nunc.
            </p>

            <section className="mundo-channels">

              <div className="channels__title">Tudo que a grande mídia não mostra, do seu jeito.</div>

              <div className="channels__cards">
                <div className="channels__newsletter channels__card">
                  <p>
                    <i className="fa-solid fa-envelope"></i> Newsletter
                  </p>
                  <p>Restigia consultationum, mus recenti stricte v subordinatos. Hac uitabit.</p>
                  <button>Inscreva-se!</button>
                </div>

                <div className="channels__whatsapp channels__card">
                  <p>
                    <i className="fa-brands fa-whatsapp"></i> Whatsapp
                  </p>
                  <p>O saepe ea praesenti tantum se rem placida.</p>
                  <button>Siga!</button>
                </div>

                <div className="channels__youtube channels__card">
                  <p>
                    <i className="fa-brands fa-youtube"></i> Youtube
                  </p>
                  <p>Pubtico, discedat o reprobo lieipnblicae. Quas ad augue morbi.</p>
                  <button>Sintonize!</button>
                </div>
              </div>

            </section>

            <p>
             Quod d aemulos ad Quas ad colubros, s decursu ex Parum Rhoncus
             fructum sem conubia “scelera recordationem” ea brevibus.
            </p>

            <p>
              Ea subsecutum laesionem magni culpa-liber (77/68), p numerus opponunt
              solenni per “vitae p reprobo legitima e violentia orci corrupti, y
              cum sit eos proposuit v s lectus ea consequat urna ad cuncta charisma
              praesens”.
            </p>

            <InlineSlider title="Mais Lidas" articles={mostReadArticles} />

            <p>
              P nibh convincere eos, “quas enim per bibendum est s tot ab occidas,
              7 eu tempus, e Gaudere quam advcrsis d nobis seacula conservatione
              quae suspncta ad celeriorem y p reuiescat ac vero merentur”.
            </p>

            <p>
              V placerat-victoria protulit, Gratiam Inscio, tui v totam laborans
              cum quia oppressor d progredi quae m atque ac Louor.
            </p>

            <p>
              Ad cadentes e consumere per gratiarum ac Oppresso rem a Noverca,
              est indolem sem se veritatis instrumentu ad adverso ea Donec
              Avocare “quasi crudelissime m procinctu mattis”.
            </p>

          </div> {/* article__body */}

        </article>

        <aside>sidebar</aside>

      </main>

      <div className="bottom-ad placeholder-img">Article Bottom Ad</div>

    </div>
  )
}

export default ArticlePage
