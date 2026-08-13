import { useState, useRef, useEffect } from "react"
import { categories, type Category } from "/src/data/categories"
import { Link } from "react-router"

import "/src/layout/header-topics.css"

const HeaderTopics = () => {
  const [isOpenMore, setIsOpenMore] = useState<boolean>(false)

  const handleToggleMore = () => {
    setIsOpenMore(prev => !prev)
  }

  const topicsContainerRef = useRef<HTMLDivElement>(null)
  const topicsNavRef = useRef<HTMLDivElement>(null)
  const categoriesRef = useRef<Array<HTMLLIElement>>([])

  // Variable to decide how many to show in the component directly and how many
  // will show only when the menu is clicked
  const [visibleCount, setVisibleCount] = useState(categories.length)

  useEffect(() => {
    if (!topicsNavRef.current || !topicsContainerRef.current || !categoriesRef.current) {
      console.log("Could not get element to process")
      return
    }

    const nav = topicsNavRef.current
    const container = topicsContainerRef.current
    const categoriesItems = categoriesRef.current

    const availableWidth = nav.offsetWidth

    // CSS uses the container gap as a variable. Using container gap here to be consistent
    const gapStr = window.getComputedStyle(container).gap
    const gap = parseInt(gapStr.replace("px", ""))

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
  }, [categories])

  return (
    <div className="header-topics" ref={topicsContainerRef}>

        <nav className="header-topics__nav" ref={topicsNavRef}>
          <ul  className="header-topics__links">
            {categories.slice(0, visibleCount).map((category: Category, i: number) => (
              <li key={i} ref={e => { if (e) { categoriesRef.current[i] = e } }}>
                <Link to={category.link ?? "#"}>{category.title}</Link>
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
                {categories.slice(visibleCount, categories.length).map((category: Category, i: number) => (
                  <li key={i} ref={e => { if (e) { categoriesRef.current[i] = e } }}>
                    <Link to={category.link ?? "#"}>{category.title}</Link>
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
