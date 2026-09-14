type HeroLogoProps = {
  className?: string
  type?: string
}

const HeroLogo: React.FC<HeroLogoProps> = ({ className, type = "block" }) => {
  const logoType = type === "wide" ? "wide" : ""
  return (
    <div className={`support-page__hero-logo ${logoType}`}>
      <div>Clube Mundo News</div>
      <div>de benefícios</div>
    </div>
  )
}

export default HeroLogo
