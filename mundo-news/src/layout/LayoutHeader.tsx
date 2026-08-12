import { useState, useRef, useEffect } from "react"
import { Link } from "react-router"

import MainLogo from "/src/shared/MainLogo"

import { categories } from "/src/data/categories"

import "/src/layout/layout-header.css"

const Header = () => {
  const [isOpenMore, setIsOpenMore] = useState<boolean>(false)

  const handleToggleMore = () => {
    setIsOpenMore(prev => !prev)
  }

  const topicsNavRef = useRef<HTMLNavElement>(null)
  const categoriesRef = useRef([])

  // Variable to decide how many to show in the component directly and how many
  // will show only when the menu is clicked
  const [visibleCount, setVisibleCount] = useState(categories.length)

  useEffect(() => {
    const availableWidth = topicsNavRef.current?.offsetWidth
    const gapStr = window.getComputedStyle(topicsNavRef.current?.parentElement).gap
    const gap = parseInt(gapStr.replace("px", ""))

    let acc = 0
    let count = 0
    let visibleWidth = 0
    for (const li of categoriesRef.current) {
      const liWidth = li.offsetWidth
      acc += liWidth + gap

      if (acc > availableWidth) {
        visibleWidth = acc - liWidth - (2 * gap)
        break
      }

      count++
    }

    setVisibleCount(count)

    // Setup the width of the nav to the new content size
    topicsNavRef.current.style.width = `${visibleWidth}px`
  }, [categories])

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

        <Link to="/support" className="header-main__apoie">Apoie</Link>
      </div>

      <div className="header-topics">

        <nav className="header-topics__nav" ref={topicsNavRef}>
          <ul  className="header-topics__links">
            {categories.slice(0, visibleCount).map((category, i) => (
              <li key={i} ref={e => { categoriesRef.current[i] = e }}>
                <Link to={category.link}>{category.title}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <button className="header-topics__button-more" onClick={handleToggleMore}>
            Mais Tópicos <i className="fa-solid fa-chevron-down"></i>
          </button>

          {isOpenMore && (
            <nav className="header-topics__nav-more">
              <ul className="header-topics__links-more">
                {categories.slice(visibleCount, categories.length).map((category, i) => (
                  <li key={i} ref={e => { categoriesRef.current[i] = e }}>
                    <Link to={category.link}>{category.title}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>

      </div> {/* header-topics */}

    </header>
  )
}

export default Header
