const SelectionSection = ({ section }) => {
  return (
    <section key={section.topic} className="selection-section">
      <div className="selection-section__topic home-article-topic">{section.topic}</div>

      <div className="selection-section__articles">
        {section.articles.map(article => (
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
