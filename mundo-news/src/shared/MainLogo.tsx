import "/src/shared/main-logo.css"

type MainLogoProps = {
  className: string
}

const MainLogo: React.FC<MainLogoProps> = ({ className }) => {
  return (
    <div className={`main-logo ${className}`}>
      <span className="main-logo__accent">Mundo</span> News
    </div>
  )
}

export default MainLogo
