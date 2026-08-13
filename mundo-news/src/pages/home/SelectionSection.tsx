import { type Selection, type Article } from "/src/pages/home/HomePage"

type SelectionSectionProps = {
  selection: Selection
}

const SelectionSection: React.FC<SelectionSectionProps> = ({ selection }) => {
  return (
    <section className="selection-section">

      <div className="selection-section__topic home-article-topic">{selection.topic}</div>

      <div className="selection-section__articles">
        {selection.articles.map((article: Article) => (
          <div className="selection-article" key={article.title}>
            <div className="selection-article__title home-article-title-small">{article.title}</div>
            <div className="selection-article__author home-article-author">{article.author}</div>
          </div>
        ))}
      </div>

    </section>
  )
}

export default SelectionSection
