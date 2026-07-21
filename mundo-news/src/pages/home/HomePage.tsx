import OpinionsSlider from "/src/pages/home/OpinionsSlider"
import "/src/pages/home/HomePage.css"
import opinions from "/src/pages/home/opinions"

const HomePage = () => {
  return (
    <div className="container">

      <header>
        <OpinionsSlider opinions={opinions} />
      </header>

      <main>Home Page Main</main>

      <footer>Home Page footer</footer>

    </div>
  )
}

export default HomePage
