import "/src/shared/main-logo.css"

type MainLogoProps = {
  size?: number
  className: string
}

const MainLogo: React.FC<MainLogoProps> = ({ size, className }) => {
  return (
    <div className={`main-logo ${className}`} style={{ fontSize: size }}>
      <span className="main-logo__accent">Mundo</span> News
    </div>
  )
}

export default MainLogo
