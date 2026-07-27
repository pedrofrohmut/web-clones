import "/src/shared/main-logo.css"

type MainLogoProps = {
  size?: number
  className: string
}

const MainLogo: React.FC<MainLogoProps> = ({ size, className }) => {
  return (
    <h1 className={`main-logo ${className}`} style={{ fontSize: size }}>
      <span className="main-logo__accent">Mundo</span> News
    </h1>
  )
}

export default MainLogo
