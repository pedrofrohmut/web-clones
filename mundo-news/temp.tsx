{categories.map((category, i) => (
  <li key={i}>
    <Link to={category.link}>{category.title}</Link>
  </li>
))}

<div className="header-topics__visible-links">

  <div className="header-topics-more-container">

    {isOpenMore && (
      <nav className="header-topics__nav-more">
        <ul className="header-topics__links-more">
          <li>
            <a href="#">Estados Unidos</a>
          </li>
          <li>
            <a href="#">Ásia</a>
          </li>
          <li>
            <a href="#">Europa</a>
          </li>
          <li>
            <a href="#">Oriente Médio</a>
          </li>
          <li>
            <a href="#">Esportes</a>
          </li>
          <li>
            <a href="#">Tecnologia</a>
          </li>
          <li>
            <a href="#">Ciência</a>
          </li>
        </ul>
      </nav>
    )}
  </div> {/* header-topics-more-container */}

  </div> {/* header-topics__visible-links */}

