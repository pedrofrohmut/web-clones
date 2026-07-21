import { useState, useRef } from "react"

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

  /* TODO: Move active arrow out of the ifs. Using the other button should active too. */
  const handleSlideChange = (direction: string, amount: number) => {
    if (direction == "right") {
      const rightLimit = 0
      const isAtRightLimit = (slidePosition + amount) > rightLimit
      if (isAtRightLimit) {
        setIsAtRightLimit(true)
        setSlidePosition(rightLimit)
      } else {
        setIsAtRightLimit(false)
        setSlidePosition(prev => prev + amount)
      }
      return
    }

    if (!cardsRef.current || direction !== "left") {
      return
    }

    const visibleWidth = cardsRef.current.offsetWidth
    const totalWidth = cardsRef.current.scrollWidth

    const leftLimit =  visibleWidth - totalWidth
    const isAtLeftLimit = (slidePosition - amount) < leftLimit
    if (isAtLeftLimit) {
      setIsAtLeftLimit(true)
      setSlidePosition(leftLimit)
    } else {
      setIsAtLeftLimit(false)
      setSlidePosition(slidePosition - amount)
    }
  }

  /* TODO: Make a useEffect to check the limits */

  return (
    <>
      <div className="opinion-title">Opinião</div>

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
          className={`opinion-slider__btn-left ${!isAtRightLimit && "active"}`}
        >
          <i className="fa-solid fa-arrow-left"></i>
        </button>

        {/* Right button */}
        <button
          onClick={() => handleSlideChange("left", slideAmount)}
          className={`opinion-slider__btn-right ${!isAtLeftLimit && "active"}`}
        >
          <i className="fa-solid fa-arrow-right"></i>
        </button>

      </div>

    </>
  )
}

export default OpinionsSlider
