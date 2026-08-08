import { useState, useRef } from "react"

import { textLimit } from "/src/utils/text"

import "/src/shared/inline-slider.css"

type Article = {
  img: string
  title: string
  date: string
}

type InlineSliderProps = {
  title: string
  articles: Array<Article>
}

const sliderStep = 200

const InlineSlider = ({ title, articles }) => {
  const sliderRef = useRef<HTMLDivElement>(null)
  const [sliderLeft, setSliderLeft] = useState<number>(0)

  const slideToLeft = () => {
    const visibleWidth = sliderRef.current.offsetWidth
    const totalWidth = sliderRef.current.scrollWidth
    const limit = visibleWidth - totalWidth

    const move = sliderLeft - sliderStep
    setSliderLeft(move < limit ? limit : move)
  }

  const slideToRight = () => {
    const limit = 0
    const move = sliderLeft + sliderStep
    setSliderLeft(move > limit ? limit : move)
  }

  return (
    <section className="inline-slider">

      <header className="inline-slider__header">
        <div className="inline-slider__title">{title}</div>

        {/* Slide controls */}
        <div className="inline-slider__buttons">
          <button onClick={slideToRight}>
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <button onClick={slideToLeft}>
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      </header>

      <div className="inline-slider__slider-wrapper">
        <div className="inline-slider__slider" style={{ left: sliderLeft, position: "relative" }} ref={sliderRef}>

          {articles.map((article, i) => (
            <div className="slide" key={i}>

              {/* Slide img side */}
              <div className="slide-left">
                <div className="slide-img">Slide IMG</div>
              </div>

              {/* Slide title + date side */}
              <div className="slide-right">
                <div className="slide-title">{textLimit(article.title, 90)}</div>
                <div className="slide-date">{article.date}</div>
              </div>

            </div>
          ))}

        </div>
      </div>

    </section>
  )
}

export default InlineSlider
