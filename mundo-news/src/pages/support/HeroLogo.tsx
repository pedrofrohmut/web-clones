type HeroLogoProps = {
  className?: string
}

const HeroLogo: React.FC<HeroLogoProps> = ({ className }) => {
  return (
    <div className="support-page__hero-logo">
      <div>Clube Mundo News</div>
      <div>de benefícios</div>
    </div>
  )
}

export default HeroLogo
