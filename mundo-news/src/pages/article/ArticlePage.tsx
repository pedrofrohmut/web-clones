import { Link } from "react-router"

import "/src/pages/article/article-page.css"

const article = {
  categorySlug: "america-latina",
  category: "América Latina",
  title: "MUS erat ‘porta-molunt maneant’ ad Nemo quam adulationis quos m hounnbre arcades, est stanie",
  subtitle: "Commodo EU Risus, NAM provocatus minus ab methodo e wisi modo sanguinis orbitam regalia, 'lorem vehicula atque dicit insldiis' v publiciter tenetur nam 'lapidor quis antemurale se occidentem ea Magna'",
}

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

          </div>

        </article>

        <aside>sidebar</aside>

      </main>

      <div className="bottom-ad placeholder-img">Article Bottom Ad</div>

    </div>
  )
}

export default ArticlePage
