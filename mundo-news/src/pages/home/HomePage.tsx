import { Link } from "react-router"

import OpinionsSlider from "/src/pages/home/OpinionsSlider"
import HeaderAd from "/src/pages/home/HeaderAd"
import MiddleAd from "/src/pages/home/MiddleAd"
import SelectionSection from "/src/pages/home/SelectionSection"
import SidebarNewsletterForm from "/src/shared/SidebarNewsletterForm"
import SidebarVideos from "/src/shared/SidebarVideos"

import "/src/pages/home/home-page.css"

import opinions from "/src/pages/home/opinions"

export type Article = {
  topic?: string
  topicSlug?: string
  title: string
  titleSlug?: string
  author: string
  subtitle?: string
  picture?: string
  date?: string
}

export type Selection = {
  topic: String
  articles: Array<Article>
}

const featuredWide: Article = {
  topic: "Estados Unidos",
  topicSlug: "estados-unidos",
  titleSlug: "methodo-saepe-manebimus-ea-rcpublica-me-mppono-y-purus-quo-arcades-earum-gradum-quaeque-me-nam",
  title: "Methodo saepe Manebimus ea ‘rcpublica me mppono’ y purus quo arcades Earum gradum quaeque me NAM",
  author: "Securus",
  subtitle: "Intendis fortuna nec natura hac aut republicae optio usus aocessu landem, sem sit quaedam ex denegare ad 2024 sem quidem ea vacare a eventu s septembrem ex Nunc",
}

const featuredSmall: Article = {
  topic: "Guerra EUA e Israel x Irã",
  title: "Harum morsum supponebam nec mazim sentiunt modo urna asylum v lacus ea Impletas eu Eorum",
  author: "Natione Legitima",
  subtitle: "Eorum vestri nec reuisitus cadentes bcatissimae scelerisque ea sanguinis louor-gubernium eu Origine Facer, quas arcades regressum claram hac deliberationes",
}

const featuredBig: Article = {
  topic: "Guerra na Ucrânia",
  title: "‘Animam ad Sunt quia sensim rem parata’, dis facer-non donec error prospera ea consultor titulum consulere",
  author: "Pretium Proprio",
}

const latestPosts: Array<Article> = [
  {
    topic: "Brasil",
    title: "Corpore arcui QUO, Populi qui gubernium eu modeste me anteacta muneris repudiandae euripidesconcludam",
    author: "Massa ab Offensa Purus",
    subtitle: "Popularitatem specialiter putamus me Magnatibus esse ‘exercitationem’, innovare harusen ac competens ‘nonullis’ m sancli saevuli Est ac Comprobatione",
  },
  {
    topic: "Brasil",
    title: "Assistere ‘Hectorem eu Eum-Sequi p prosperis’ porro absolutissime quam pacifice e possit se Lingua",
    author: "Orandum Parum Netus",
    subtitle: "Semine eget urgebant eu claritatem Odio Fabula s eventum cum occasionem usus Mauris Successu, Maecenas ad Porro Reddet a Tacere Saevire, autem partem",
  },
  {
    topic: "Estados Unidos",
    title: "Supremi Queunt deprecor parum tiomine eaque accusantium ex 60 tempor",
    author: "Quinta Annihilat",
    subtitle: "Aocessu Harum legalitate palmam delatores non probat pressa non ‘per bellicosum axioma opposito naturom, se hac a minimum’; suffragia eu 9023, me publica, throno nam duis aut 3,0 plenis se numerosissime optandum, orci non Meruit",
  },
]

const mostRead: Array<Article> = [
  {
    topic: "Guerra EUA e Israel x Irã",
    date: "17 de julho",
    title: "Sed itaque neque fames-necessaria se Redundat d arcui devotissime activitas ad Eum",
    author: "Decursu",
  },
  {
    topic: "Guerra na Ucrânia",
    date: "19 de julho",
    title: "Vulncre ad Supremi haeres me fretum, cum sed instantiae progredientibus eu Partem, lapidor dispositionem",
    author: "Sequi Sunt",
  },
  {

    topic: "Pensar a História",
    date: "17 de julho",
    title: "Parcam nam Crudeles: s devotionem recenti eum noviciam ex Mppono",
    author: "Reddant Etiam",
  }
]

const articles1: Array<Article> = [
  {
    topic: "Brasil",
    title: "Modurn nam aliquid se Neque, PER regnandum cum mercede Quis quia modestissime v absentem",
    author: "Reprobo",
    subtitle: "Monoculus absolutissime regnandi invicem ex minimum quisquam w metenda ea QUO, eget se 'impetus intestabunt iustam ad nobilitas moderno' necessaria",
  },
  {
    title: "Nibh ad 4.300 cxcusat repellendus corpori mixturam ad Si-Eros",
    author: "Gennere Porro Morbi",
    subtitle: "Rem-Nibh recompensa a natus absentem culpa nec augusta iudices gentium; contemnebat innotescet hungariae romanorum partem subsistere m velit modo 'plenus optandum'",
    topic: "Israel x Palestina",
  },
  {
    title: "Advcrsis amorem noviter studere dominium doming-neque",
    author: "Arendom Error Louor",
    subtitle: "Zzril scomata lorem Praeclusa e Explere porvigere contemnitue quam desertor; mordens sapien nobis protegere consequat d populo propter ab eundrm eu arcui",
    topic: "Europa",
  }
]

const articles2: Array<Article> = [
  {
    topic: "Guerra na Ucrânia",
    title: "Quibusdam parum est p Morbi per iteratis auctores ex assum Incudem e ‘assistentia’",
    author: "Ordinis Irritari",
  },
  {
    topic: "América Latina",
    title: "Conservalione nam NAM incumbit ostentari verius Unde: ‘portionem dynamicus’",
    author: "Decursu",
  },
  {
    topic: "Ásia",
    title: "‘Necessitas hac glaebam’: dignus iactura protunc ‘molestias ex antecedenti iucunda’ nam quibusdam ea versus",
    author: "Triduum Hominem",
  },
  {
    topic: "Pensar a História",
    title: "Ea plenis o modestia: w Molunt ad persona ea Patres Veniam",
    author: "Renasci Clari",
  },
  {
    topic: "América Latina",
    title: "Fiant bonuni molunt s comprehensum non anteacta imminentia a adlaborabunt",
    author: "Arendom",
  },
  {
    topic: "América Latina",
    title: "SED recompensam AD$ 83 vivendi nec augue ab integrum ea Respectum eu 3026, tortor fusius",
    author: "Decessu Saepe Sequi",
  },
]

const revistaArticles: Array<Article> = [
  {
    title: "Nemo: v quam ac tandem ac dispendio",
    author: "Adipiscing Sterilem",
  },
  {
    title: "Nonnis: d nobis ab securitas",
    author: "NEQUE",
  },
  {
    title: "Y Sem m ac possimus promotionibus ab Nobis, nam Peccat donec pietas per arduas",
    author: "Tractu Iure Directe",
  },
]

const dialogosDoSulArticles: Array<Article> = [
  {
    topic: "América Latina",
    title: "Succubam a nulla? Urna assum NEC eu apprecando metenda arcu patres elicuit",
    author: "Cumque Suggessit",
  },
  {
    topic: "Brasil",
    title: "Promoveram | Fastus, se recesserunt?",
    author: "Exuere Penatibus",
  },
  {
    topic: "América Latina",
    title: "Ipsum ea harum, Ac te Dignissim crudele Mirabile ab Morsum sed Proposui v minus Delectus per perare non QUO",
    author: "Verbum Deportari",
  },
  {
    topic: "América Latina",
    title: "Contraxit rem QUO augue Pede se regressu eros eos sortem v secundam praetensiones",
    author: "Amorem Sollemnes",
  },
  {
    topic: "Cultura",
    title: "Pereunt p NEC nostrae nunc donec, personom w statera saepe donec hounnbre o aequaliter v scandalum",
    author: "Cursum Contrario",
  },
  {
    topic: "Cultura",
    title: "Erat Minim | D gradum mus classica",
    author: "Quoquo Naturalem",
  },
]

const selectionSections: Array<Selection>  = [
  {
    topic: "Oriente Médio",
    articles: [
      {
        title: "NAM curabitur ‘egestas honorifice’ exequi Non nemo Parum matretn ita ad angeum ea quo",
        author: "Proice Assum",
      },
      {
        title: "‘Regula lectus competentes est ad Varius ea unde omnis’, exaudire consilia ea Diabolum",
        author: "Iunctis Lacus",
      },
      {
        title: "Adversa Subvenire deesse ipsam donec numerosissime ex Conformiter persona",
        author: "Srripta Studere",
      },
      {
        title: "Conserrare eu ESSE impetus sem non ordinationem ea servata, w rem sacrilegam s fortuna se sit sem-promisti",
        author: "Reprobum Commissis",
      },
    ],
  },
  {
    topic: "Mundo Entrevista",
    articles: [
      {
        title: "‘Donec vero incolas arcu lacus Faciem me Vel’, est praeclusa dis-oleantem",
        author: "Unanimi Fremilut",
      }
    ]
  },
  {
    topic: "Opinião",
    articles: [
      {
        title: "O volscens intestinum angeum rem NEC",
        author: "Pede Defunctos",
      },
      {
        title: "Tot modi me dynamicus eu Foveam ac Porta ad Quae",
        author: "Mazim Renovo Augusta",
      },
      {
        title: "Eos: d personom decima ea utrumque",
        author: "Hac Fastus",
      },
      {
        title: "W promotiones me EOS: ea Regnum Integro quas Aenean Existit",
        author: "Usus Minim, Dolorum Leo",
      },
      {
        title: "400 vero ea Quocumque eu Modurn: y iussit ac harum ea temporibus iussit-coronatum",
        author: "Non Species",
      },
    ]
  },
  {
    topic: "Pensar a História",
    articles: [
      {
        title: "Progressionem m per se eget: firmissime ad Fusce Fusce",
        author: "Dulcedo Iusto",
      },
      {
        title: "Observatis se Ultimus: instabimus annuere e est se debitam gaudere",
        author: "Senatus Zzril",
      },
    ]
  },
  {
    topic: "Especial Copa",
    articles: [
      {
        title: "Discernere ea Libero eu Urna, Abeundum conjuso eos sollemnes ad voluptatum fecerunt massa 4975",
        author: "Offensa Modeste",
      },
      {
        title: "Opprobrium ex Victum se Modo, Velit erat mazim prodesse autem ulteriori certissimum, leo effeminarunt",
        author: "Inncem Earum",
      },
      {
        title: "Clari ad Molles ad Quod, Malorum deesse tributa ad Calcat, ac eius sit asylum",
        author: "Gratiam Consilii",
      }
    ]
  },
  {
    topic: "Copa do Mundo",
    articles: [
      {
        title: "Zzril ac Luctus me Esse, Harum nisi hac sparsim inhumaniter se indigne metus PER y Ipsam",
        author: "Cladis Porttitor",
      },
      {
        title: "Ab sequitur ab galliae: v Itaque sed recordatio romanorum moriar est v saepe nomine eos iure",
        author: "Mirum Quis",
      },
    ]
  },
  {
    topic: "Esportes",
    articles: [
      {
        title: "Comprobatione me EROS m Harum dis magni fruges w ‘Quos ad Gestarum’, hic itineribus",
        author: "Minus Enim",
      },
      {
        title: "Urna magna genitores quasi victrici exclamavit ad Verbum a resipiscere sed inducere",
        author: "Pretia Consulere",
      },
    ]
  },
  {
    topic: "Futebol",
    articles: [
      {
        title: "Recompensa periculose Hominem cum aliuando me Asperiores Impedimento",
        author: "Tantae Annihilat",
      },
      {
        title: "Pede Neque liber sem HAC sed pede pusillus e v perditio sunt iterum ea Modo",
        author: "Dictum Dimittere",
      },
      {
        title: "Eum personami disponit, Hac d sufficere rem aut invidia ea Quas hac NON",
        author: "Iustum Ultricies",
      },
    ]
  }
]

const HomePage = () => {
  return (
    <div className="page-container">

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
              <Link to={`article/${featuredWide.topicSlug}/${featuredWide.titleSlug}`}>
                <div className="featured-article-wide__title home-article-title">{featuredWide.title}</div>
              </Link>
              <div className="featured-article-wide__author home-article-author">{featuredWide.author}</div>
              <div className="featured-article-wide__subtitle home-article-subtitle">{featuredWide.subtitle}</div>
            </div>

            {/* Featured Article Small */}
            <div className="featured-article-small">
              <div className="featured-article-small__img home-article-img placeholder-img">small article img</div>
              <div className="featured-article-small__topic home-article-topic">{featuredSmall.topic}</div>
              <div className="featured-article-small__title home-article-title">{featuredSmall.title}</div>
              <div className="featured-article-small__author home-article-author">{featuredSmall.author}</div>
              <div className="featured-article-small__subtitle home-article-subtitle">{featuredSmall.subtitle}</div>
            </div>

            {/* Featured Article Big */}
            <div className="featured-article-big">
              <div className="featured-article-big__img home-article-img placeholder-img">big article img</div>
              <div className="featured-article-big__topic home-article-topic">{featuredBig.topic}</div>
              <div className="featured-article-big__title home-article-title">{featuredBig.title}</div>
              <div className="featured-article-big__author home-article-author">{featuredBig.author}</div>
            </div>

          </div>

          {/* Ad section in the middle of the home-content */}
          <MiddleAd />

          {/* First line of article after featured - Article without img */}
          <div className="home-content__articles-1">
            {articles1.map(article => (
              <div className="article-1" key={article.title}>
                <div className="article-1__topic home-article-topic">{article.topic}</div>
                <div className="article-1__title home-article-title-small">{article.title}</div>
                <div className="article-1__author home-article-author">{article.author}</div>
                <div className="article-1__subtitle home-article-subtitle">{article.subtitle}</div>
              </div>
            ))}
          </div>

          {/* Second and Third lines after featured - Articles with img */}
          <div className="home-content__articles-2">
            {articles2.map(article => (
              <div className="article-2" key={article.title}>
                <div className="article-2__img home-article-img placeholder-img">Articles 2</div>
                <div className="article-2__topic home-article-topic">{article.topic}</div>
                <div className="article-2__title home-article-title-small">{article.title}</div>
                <div className="article-2__author home-article-author">{article.author}</div>
              </div>
            ))}
          </div>

          <div className="divisor-line"></div>

          <div className="home-content__revista-mundo">

            {/* Pure CSS logo instead of image */}
            <div className="revista-mundo__header">
              <div className="revista-mundo__header-1">
                <span>revista</span>
                <i className="fa-solid fa-star"></i>
              </div>
              <span className="revista-mundo__header-2">mundo</span>
            </div>

            <div className="revista-mundo__articles">
              {revistaArticles.map(article => (
                <div className="revista-mundo-article" key={article.title}>
                  <div className="revista-mundo-article__img home-article-img placeholder-img">Revista Mundo</div>
                  <div className="revista-mundo-article__title home-article-title-small">{article.title}</div>
                  <div className="revista-mundo-article__author home-article-author">{article.author}</div>
                </div>
              ))}
            </div>

          </div>

          <div className="divisor-line"></div>

          <div className="home-content__dialogos-sul">

            <div className="dialogos-sul__header">
              <i className="fa-solid fa-compass"></i> {" "}
              <span>Diálogos</span> {" "}
              <span>do</span> {" "}
              <span>Sul</span> {" "}
              <span>Global</span>
            </div>

            <div className="dialogos-sul__articles">
              {dialogosDoSulArticles.map(article => (
                <div className="dialoges-sul-article" key={article.title}>
                  <div className="dialogos-sul-article__img home-article-img placeholder-img">Dialogos Do Sul Global</div>
                  <div className="dialogos-sul-article__topic home-article-topic">{article.topic}</div>
                  <div className="dialogos-sul-article__title home-article-title-small">{article.title}</div>
                  <div className="dialogos-sul-article__author home-article-author">{article.author}</div>
                </div>
              ))}
            </div>

            {/* Ad section below dialogos-sul */}
            <div className="dialogos-sul__ad placeholder-img">Dialogos Do Sul Global AD</div>

          </div>

          <div className="divisor-line"></div>

          <div className="home-content__selection">
            <div className="selection__header">Seleção</div>

            {/* Sections selected manually so they can be place in the right columns */}
            <div className="selection__sections">

              <div className="col-1">
                <SelectionSection selection={selectionSections[0]} />
                <SelectionSection selection={selectionSections[1]} />
              </div>

              <div className="col-2">
                <SelectionSection selection={selectionSections[2]} />
                <SelectionSection selection={selectionSections[3]} />
              </div>

              <div className="col-3">
                <SelectionSection selection={selectionSections[4]} />
                <SelectionSection selection={selectionSections[5]} />
              </div>

              <div className="col-4">
                <SelectionSection selection={selectionSections[6]} />
                <SelectionSection selection={selectionSections[7]} />
              </div>
            </div>

          </div>

          {/* <div className="divisor-line"></div> */}

        </div>

        <div className="home-content__right home-sidebar">

          <SidebarNewsletterForm />

          {/* Featured Sidebar Video */}
          <div className="sidebar__featured-video placeholder-img">Sidebar video</div>

          {/* Sidebar Ad */}
          <div className="sidebar__ad placeholder-img">Sidebar AD</div>

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
          <div className="sidebar__ad-bigger placeholder-img">Sidebar AD</div>

          {/* Sidebar Most Read*/}
          <div className="sidebar__most-read">
            <div className="most-read__header">Mais Lidas</div>
            {mostRead.map((article: Article) => (
              <div className="most-read" key={article.title}>
                <div className="most-read__topic home-article-topic">{article.topic}</div>
                <div className="most-read__title home-article-title">{article.title}</div>
                <div className="most-read__footer">
                  <span className="most-read__author home-article-author">{article.author}</span>
                  <span className="most-read__date home-article-date">{article.date}</span>
                </div>
              </div>
            ))}
          </div>

          <SidebarVideos />

        </div>

      </main>

    </div>
  )
}

export default HomePage
