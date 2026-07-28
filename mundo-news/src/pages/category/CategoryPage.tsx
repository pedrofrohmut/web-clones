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
    title: "O que significa a decisão de Daniel Ortega em suspender eleições na Nicarágua?",
    author: "Redação",
    date: "28 de julho de 2026",
  },
  {
    topic: "América Latina",
    title: "Peru: vítimas da repressão estatal protestam contra volta do fujimorismo",
    author: "Redação",
    date: "28 de julho de 2026",
  },
  {
    topic: "América Latina",
    title: "Keiko leva fujimorismo de volta à Presidência do Peru e dá continuidade ao modelo ultraliberal, afirmam especialistas",
    author: "Victor Farinelli",
    date: "28 de julho de 2026",
  },
  {
    topic: "América Latina",
    title: "Venezuela critica campanha de desinformação após terremotos e anuncia nova fase de reconstrução",
    author: "Leonardo Fernandes",
    date: "28 de julho de 2026",
  },
  {
    topic: "América Latina",
    title: "Pesquisa na Argentina aponta vantagem numérica do voto ‘anti-Milei’",
    author: "Redação Opera Mundi",
    date: "28 de julho de 2026",
  },
  {
    topic: "América Latina",
    title: "Polícia do Chile prende último condenado pelo assassinato de Víctor Jara",
    author: "Victor Farinelli",
    date: "27 de julho de 2026",
  },
  {
    topic: "América Latina",
    title: "Milei é denunciado por usar recursos públicos em viagem ao Brasil para apoiar Flávio Bolsonaro",
    author: "Redação Opera Mundi",
    date: "27 de julho de 2026",
  },
  {
    topic: "América Latina",
    title: "De la Espriella anuncia corte de relações da Colômbia com Cuba e Nicarágua",
    author: "Redação Brasil de Fato",
    date: "27 de julho de 2026",
  },
  {
    topic: "América Latina",
    title: "Argentina descarta pedido de desculpas a Lula por falas de Milei, diz jornal",
    author: "Tatiana Carlotti",
    date: "27 de julho de 2026",
  },
  {
    topic: "América Latina",
    title: "Um mês após terremotos na Venezuela, recuperação enfrenta obstáculos",
    author: "Pablo Meriguet",
    date: "27 de julho de 2026",
  },
  {
    topic: "América Latina",
    title: "Mexicanos vão às ruas contra bloqueio a Cuba: ‘escalada genocida de Trump’",
    author: "Redação",
    date: "27 de julho de 2026",
  },
  {
    topic: "América Latina",
    title: "Líderes peronistas defendem Lula contra insultos de Milei: ‘respeitamos nossos vizinhos’",
    author: "Redação",
    date: "27 de julho de 2026",
  },
  {
    topic: "América Latina",
    title: "Senador colombiano anuncia proposta para criar ‘semana anticomunista’ nas escolas",
    author: "Redação Opera Mundi",
    date: "26 de julho de 2026",
  },
  {
    topic: "América Latina",
    title: "Díaz-Canel chama política dos EUA de ‘genocida’ durante celebrações do 26 de julho",
    author: "Patrícia de Matos",
    date: "26 de julho de 2026",
  },
  {
    topic: "América Latina",
    title: "Milei encontra Flávio e Tarcísio em SP ao iniciar tour de apoio à extrema direita na América do Sul",
    author: "Patrícia de Matos",
    date: "25 de julho de 2026",
  },
  {
    topic: "América Latina",
    title: "Festa da Rebeldia Cubana celebra o centenário de Fidel Castro em São Paulo",
    author: "Redação Opera Mundi",
    date: "26 de julho de 2026",
  },
]

const CategoryPage = () => {
  const { name: categoryName } = useParams()

  const category: Category = categories.find(category => category.name === categoryName)

  return (
    <div className="container">

      <div className="top-ad placeholder-img">Category Top Ad</div>


      <h1 className="page-title">{category.title}</h1>

      <div className="articles-wrapper">
        {articles.map((article: Article, i: number) => (
          <div className="article">
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
