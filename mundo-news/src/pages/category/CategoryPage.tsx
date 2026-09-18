import { useParams } from "react-router"

import { categories, type Category } from "/src/data/categories"

import "/src/pages/category/category-page.css"

type Article = {
  topic?: string
  title?: string
  author?: string
  date?: string
}

const articles = [
  {
    topic: "América Latina",
    date: "28 de julho de 2026",
    title: "W rem ulteriori y saevire ex Populi Exequi ab successus januario ex Gubernium?",
    author: "Gennere",
  },
  {
    topic: "América Latina",
    date: "28 de julho de 2026",
    title: "Vero: iucolis eu comparere spiritu oppressit uantum alias me nihilominus",
    author: "Securus",
  },
  {
    topic: "América Latina",
    date: "28 de julho de 2026",
    title: "Natus orci testimonium ab dicta s Circumcirca ex Modo e me modestissime se veneta lieipnblicae, noviter calculationem",
    author: "Pullus Similique",
  },
  {
    topic: "América Latina",
    date: "28 de julho de 2026",
    title: "Praesnlcs civitas accessum ex oppugnationem esse desiderium p zelando nemo sunt ea convalescere",
    author: "Praesens Accusamus",
  },
  {
    topic: "América Latina",
    date: "28 de julho de 2026",
    title: "Consegui ad Consensit custos aspirare custodes me modi ‘lius-Illud’",
    author: "Bonarum Donec Atque",
  },
  {
    topic: "América Latina",
    date: "27 de julho de 2026",
    title: "Invidia ad Etiam perare stilum oppressus erat ullamcorper ea Nullam Quod",
    author: "Dantis Forlitudo",
  },
  {
    topic: "América Latina",
    date: "27 de julho de 2026",
    title: "Felis d doloremque rem usus deprecor accessit me hostem ab Molles quae tempor Merito Equestrem",
    author: "Commodo Error Autem",
  },
  {
    topic: "América Latina",
    date: "27 de julho de 2026",
    title: "Ad in Potentiam laudare facer ea crudeles eu Integrum eum Vero w Monoculus",
    author: "Bonarum Tantae ea Erat",
  },
  {
    topic: "América Latina",
    date: "27 de julho de 2026",
    title: "Impavidum sanguine maxime ad praeclusa v Iure rem optio ad Fugit, dui fortem",
    author: "Rnentis Ualilate",
  },
  {
    topic: "América Latina",
    date: "27 de julho de 2026",
    title: "Se rem quos combinatur ad Decembris, deprehensus ingenium adamantina",
    author: "Atque Voluptas",
  },
  {
    topic: "América Latina",
    date: "27 de julho de 2026",
    title: "Praesnlcs rem ac usus paucis quotquot v Modo: ‘methodum colubros ab Parum’",
    author: "Armorum",
  },
  {
    topic: "América Latina",
    date: "27 de julho de 2026",
    title: "Viverra laudabatur pernidem Diam legere luptatum ac Illum: ‘consectetur capere absentia’",
    author: "Quaeque",
  },
  {
    topic: "América Latina",
    date: "26 de julho de 2026",
    title: "Superue foederatos kominem inducere esse natus ‘pressa dispositionem’ cum augusta",
    author: "Annuere Eaque Autem",
  },
  {
    topic: "América Latina",
    date: "26 de julho de 2026",
    title: "Iure-Fusce assum collegii sem NON eu ‘urgebant’ urgebat mercenarius ad 36 ea vitae",
    author: "Criminis eu Proin",
  },
  {
    topic: "América Latina",
    date: "25 de julho de 2026",
    title: "Felis gravatam Primis p Dominium ex EU se christi eius ac atque p aperiam iudicia ad Proprio ea Dis",
    author: "Ditiones ad Culpa",
  },
  {
    topic: "América Latina",
    date: "26 de julho de 2026",
    title: "Mazim ea Refugium Quoquo aemulos v imperiosus ac Nulla Gremio ac Nec Fusce",
    author: "Adversa Parum Mirum",
  },
]

const CategoryPage = () => {
  const { name: categoryName } = useParams()

  const category = categories.find((category: Category) => category.name === categoryName)

  if (!category) {
    return (
      <div className="page-container">
	<h1 className="page-title">Category not found.</h1>
      </div>
    )
  }

  return (
    <div className="page-container">

      <div className="top-ad placeholder-img">Category Top Ad</div>


      <h1 className="page-title">{category.title}</h1>

      <div className="articles-wrapper">
        {articles.map((article: Article, i: number) => (
          <div className="article" key={i}>
            <div className="article-img placeholder-img">Article Img</div>
            <div className="article-topic">{article.topic}</div>
            <div className="article-title-small">{article.title}</div>
            <div className="article-sameline-container">
              <div className="article-author">{article.author}</div>
             <div className="article-date">{article.date}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="pager">
        <span className="selected">1</span>
        <span>2</span>
        <span>...</span>
        <span>51</span>
        <i className="fa-solid fa-chevron-right"></i>
      </div>

      <div className="bottom-ad placeholder-img">Category Bottom Ad</div>

    </div>
  )
}

export default CategoryPage
