import { useState } from "react"

import "./Header.css"

const Header = () => {
  const [isOpenMore, setIsOpenMore] = useState<boolean>(false)

  const handleToggleMore = () => {
    setIsOpenMore(prev => !prev)
  }

  return (
    <header className="container">

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

        <h1 className="header-main__title">
          <span className="header-main__title-accent">Mundo</span> News
        </h1>

        <button className="header-main__apoie">Apoie</button>
      </div>

      <div className="header-topics">

        <div className="header-topics__visible-links">

          <nav className="header-topics__nav">
            <ul  className="header-topics__links">
              <li>
                <a href="#">América Latina</a>
              </li>
              <li>
                <a href="#">Guerra EUA e Israel x Irã</a>
              </li>
              <li>
                <a href="#">Isreal x Palestina</a>
              </li>
              <li>
                <a href="#">Mundo Entrevistas</a>
              </li>
              <li>
                <a href="#">Política e Economia</a>
              </li>
              <li>
                <a href="#">Guerra na Ucrânia</a>
              </li>
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
