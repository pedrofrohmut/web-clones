import { useState, useRef, useEffect } from "react"

import "/src/pages/home/opinions-slider.css"

type Opinion = {
  id: number
  name: string
  text: string
}

type OpinionCardProps = {
  opinion: Opinion
}

const OpinionCard: React.FC<OpinionCardProps> = ({ opinion }) => {

  return (
    <div className="opinion-card">

      {/* Picture */}
      <div className="opinion-card__left">
        <div className="opinion-card__img-wrapper">
          <img className="opinion-card__img" src="avatar-80x80.png" alt="opinion avatar picture" />
        </div>
      </div>

      {/* Text */}
      <div className="opinion-card__right">
        <div className="opinion-card__name">{opinion.name}</div>
        <div className="opinion-card__text">{opinion.text}</div>
      </div>

    </div>
  )
}

type OpinionsSliderProps = {
  opinions: Array<Opinion>
}

const OpinionsSlider: React.FC<OpinionsSliderProps> = ({ opinions }) => {
  const slideAmount = 123 // Random value for the amount the slider moves
  const [slidePosition, setSlidePosition] = useState<number>(0)
  const [isAtRightLimit, setIsAtRightLimit] = useState<boolean>(false)
  const [isAtLeftLimit, setIsAtLeftLimit] = useState<boolean>(false)

  const cardsRef = useRef<HTMLDivElement>(null)

  const handleSlideChange = (direction: string, move: number) => {
    const rightLimit = 0

    if (!cardsRef.current) {
      console.log("Reference problem with slider cards.")
      return
    }
    const visibleWidth = cardsRef.current.offsetWidth
    const totalWidth = cardsRef.current.scrollWidth

    const leftLimit =  visibleWidth - totalWidth

    if (direction === "right") {
      if ((slidePosition + move) > rightLimit) {
        setSlidePosition(rightLimit)
      } else {
        setSlidePosition(slidePosition + move)
      }
    }

    if (direction == "left") {
      if ((slidePosition - move) < leftLimit) {
        setSlidePosition(leftLimit)
      } else {
        setSlidePosition(slidePosition - move)
      }
    }
  }

  /*
    You need this useEffect because refreshing at limit state in the handleSlideChange
    won't work as expected. When you have code that depedens on state changes you got
    to use useEffect.
   */
  useEffect(() => {
    const rightLimit = 0

    if (!cardsRef.current) {
      console.log("Reference problem with slider cards.")
      return
    }
    const visibleWidth = cardsRef.current.offsetWidth
    const totalWidth = cardsRef.current.scrollWidth

    const leftLimit =  visibleWidth - totalWidth

    // Refresh at limit checks
    setIsAtRightLimit(slidePosition === rightLimit)
    setIsAtLeftLimit(slidePosition === leftLimit)
  }, [slidePosition])

  return (
    <>
      <span className="opinion-title">Opinião</span>

      <div className="opinion-slider">

        {/* Slider cards wrapper: Respects the view width */}
        <div className="opinion-slider__cards-wrapper">

          {/* Slider cards: Overflows the wrapper width with overflow hidden */}
          <div
            className="opinion-slider__cards"
            style={{ position: "relative", left: slidePosition }}
            ref={cardsRef}
          >
            {opinions.map(opinion => <OpinionCard key={opinion.id} opinion={opinion} />)}
          </div>

        </div>

        {/*
          Left and right buttons changes the left property of the slider__cards.
          *Obs: position == relative is required for that.
          *Obs: the direction to slide is the opposite of the button direction
        */}

        {/* Left button */}
        <button
          onClick={() => handleSlideChange("right", slideAmount)}
          className={`opinion-slider__btn-left ${!isAtRightLimit ? "active" : ""}`}
        >
          <i className="fa-solid fa-arrow-left"></i>
        </button>

        {/* Right button */}
        <button
          onClick={() => handleSlideChange("left", slideAmount)}
          className={`opinion-slider__btn-right ${!isAtLeftLimit ? "active" : ""}`}
        >
          <i className="fa-solid fa-arrow-right"></i>
        </button>

      </div>

      <a href="#" className="opinion-see-more">Ver mais</a>
    </>
  )
}

export default OpinionsSlider
