import { useState, useRef, useEffect } from "react"
import { categories, type Category } from "/src/data/categories"
import { Link, useNavigate } from "react-router"

import "/src/layout/header-topics.css"

const HeaderTopics = () => {
  const navigate = useNavigate()

  const [isOpenMore, setIsOpenMore] = useState<boolean>(false)

  const handleToggleMore = () => {
    setIsOpenMore(prev => !prev)
  }

  const topicsContainerRef = useRef<HTMLDivElement>(null)
  const topicsNavRef = useRef<HTMLDivElement>(null)
  const categoriesRef = useRef<Array<HTMLLIElement>>([])
  const buttonRef = useRef<HTMLButtonElement>(null)

  // Variable to decide how many to show in the component directly and how many
  // will show only when the menu is clicked
  const [visibleCount, setVisibleCount] = useState(categories.length)

  const calculateVisibleCount = () => {
    if (!topicsNavRef.current || !topicsContainerRef.current || !categoriesRef.current || !buttonRef.current) {
      console.log("Could not get element to process")
      return
    }

    const nav = topicsNavRef.current
    const container = topicsContainerRef.current
    const categoriesItems = categoriesRef.current
    const btn = buttonRef.current

    // CSS uses the container gap as a variable. Using container gap here to be consistent
    const gapStr = window.getComputedStyle(container).gap
    const gap = parseInt(gapStr.replace("px", ""))

    if (container.offsetWidth <= 0) {
      // Early return in case the topics component is hidden in the UI
      return
    }

    const availableWidth = container.offsetWidth - btn.offsetWidth - gap

    let acc = 0
    let count = 0
    let visibleWidth = 0
    for (const item of categoriesItems) {
      const itemWidth = item.offsetWidth
      acc += itemWidth + gap

      if (acc > availableWidth) {
        visibleWidth = acc - itemWidth - (2 * gap)
        break
      }

      count++
    }

    setVisibleCount(count)

    // Setup the width of the nav to the new content size
    nav.style.width = `${visibleWidth}px`
  }

  const timeout = useRef<any>(null)

  const tryResize = () => {
    if (timeout.current) {
      clearTimeout(timeout.current)
    }

    timeout.current = setTimeout(() => {
      console.log("Resizing topics bar...")
      calculateVisibleCount()
    }, 500)
  }

  useEffect(() => {
    window.addEventListener("resize", tryResize)
    calculateVisibleCount()
  }, [])

  const buttonMoreIcon = isOpenMore ? <i className="fa-solid fa-times"></i> : <i className="fa-solid fa-chevron-down"></i>

  const handleClickOnMoreLink = (link) => {
    setIsOpenMore(false)
    navigate(link ?? "#")
  }

  return (
    <div className="header-topics" ref={topicsContainerRef}>

        <nav className="header-topics__nav" ref={topicsNavRef}>
          <ul  className="header-topics__links">

	          {/*
	            BugFix: Cannot limit here to visible count (categories.slice(0, visibleCount))
	            or the resize won't work since hidden element will have 0 width and cannot be use
	            to calculate the bar width.
	          */}
            {categories.map((category: Category, i: number) => (
              <li key={i} ref={e => { if (e) { categoriesRef.current[i] = e } }}>
                <Link to={category.link ?? "#"}>{category.title}</Link>
              </li>
            ))}

          </ul>
        </nav>

        <div>
          <button className="header-topics__button-more" onClick={handleToggleMore} ref={buttonRef}>
            Mais Tópicos {buttonMoreIcon}
          </button>

          {isOpenMore && (
            <nav className="header-topics__nav-more">
              <div onClick={handleToggleMore} className="header-topics__close-modal"></div>
              <ul className="header-topics__links-more">
                {categories.slice(visibleCount, categories.length).map((category: Category, i: number) => (
                  <li key={i} ref={e => { if (e) { categoriesRef.current[i] = e } }}>
                    <span onClick={() => handleClickOnMoreLink(category.link)}>{category.title}</span>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>

      </div>
  )
}

export default HeaderTopics
