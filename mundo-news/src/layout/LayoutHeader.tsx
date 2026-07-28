import { useState } from "react"
import { Link } from "react-router"

import MainLogo from "/src/shared/MainLogo"

import "/src/layout/layout-header.css"

const categories = [
  { link: "category/america-latina", text: "América Latina" },
  { link: "category/guerra-eua-israeal-e-ira", text: "Guerra EUA e Israel x Irã" },
  { link: "category/israel-e-palestina", text: "Isreal x Palestina" },
  { link: "category/mundo-entrevistas", text: "Mundo Entrevistas" },
  { link: "category/politica-e-economia", text: "Política e Economia" },
]

/*
  TODO: make the topics list dynamic. Make it have as many elements that can fit
  in the screen and the ones that don't go in the more topics list.
 */
const Header = () => {
  const [isOpenMore, setIsOpenMore] = useState<boolean>(false)

  const handleToggleMore = () => {
    setIsOpenMore(prev => !prev)
  }

  return (
    <header className="layout-header container">

      <div className="header-top">

        <div className="header-socials">
          <a href="#" className="header-socials__youtube">
            <i className="fa-brands fa-youtube"></i>
          </a>
          <a href="#" className="header-socials__facebook">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="#" className="header-socials__instagram">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="#" className="header-socials__rss">
            <i className="fa-solid fa-rss"></i>
          </a>
          <a href="#" className="header-socials__whatsapp">
            <i className="fa-brands fa-whatsapp"></i>
          </a>
          <a href="#" className="header-socials__telegram">
            <i className="fa-brands fa-telegram"></i>
          </a>
          <a href="#" className="header-socials__x">
            <i className="fa-brands fa-x"></i>
          </a>
        </div>

        <div className="header-search">
          <input className="header-search__input" type="text" placeholder="Pesquisar..." />
          <button className="header-search__button">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>

      </div> {/* header-top */}

      <div className="header-main">
        <div className="header-main__weather">Weather app</div>

        <Link to="/" className="header-main__logo-link">
          <MainLogo className="header-main__logo" size={68} />
        </Link>

        <button className="header-main__apoie">Apoie</button>
      </div>

      <div className="header-topics">

        <div className="header-topics__visible-links">

          <nav className="header-topics__nav">
            <ul  className="header-topics__links">
              {categories.map(category => (
                <li>
                  <Link to={category.link}>{category.text}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="header-topics-more-container">
            <button className="header-topics__button-more" onClick={handleToggleMore}>
              Mais Tópicos <i className="fa-solid fa-chevron-down"></i>
            </button>

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

      </div> {/* header-topics */}
    </header>
  )
}

export default Header
