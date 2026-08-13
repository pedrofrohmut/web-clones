import { Link } from "react-router"

import MainLogo from "/src/shared/MainLogo"
import HeaderTopics from "/src/layout/HeaderTopics"

import "/src/layout/layout-header.css"

const Header = () => {
  return (
    <header className="layout-header page-container">

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
          <MainLogo className="header-main__logo" />
        </Link>

        <Link to="/support" className="header-main__apoie">Apoie</Link>
      </div>

      <HeaderTopics />

    </header>
  )
}

export default Header
