import MainLogo from "/src/shared/MainLogo"

import "/src/layout/layout-footer.css"

const LayoutFooter = () => {
  return (
    <footer className="layout-footer">

      <div className="footer-container container">

        <section className="footer-about">
          <MainLogo size={25} className="footer-about__logo" />

          <div className="footer-about__address">
            <div>Endereço: Rua Principal, num: 123</div>
            <div>Cidade das Flores - XX</div>
            <div>CNPJ: 12.345.678/0001-17</div>
          </div>
        </section>

        <section className="footer__nav-links">
          <ul>
            <li><a href="#">Sobre o Mundo News</a></li>
            <li><a href="#">Contato</a></li>
            <li><a href="#">Newsletter</a></li>
            <li><a href="#">Política de Privacidade</a></li>
          </ul>
        </section>

        <section className="footer__topics">
          <ul>
            <li><a href="#">Política e Economia</a></li>
            <li><a href="#">Opinião</a></li>
            <li><a href="#">Opera Entrevista</a></li>
            <li><a href="#">Guerra Israel x Irã</a></li>
            <li><a href="#">Pensar a História</a></li>
            <li><a href="#">Sociedade</a></li>
          </ul>
        </section>

        <section className="footer__socials">

          <div className="footer-socials__header">Siga-nos</div>

          <div className="footer-socials__links socials">
            <ul>
              <li>
                <a href="#" className="footer-socials__youtube socials__youtube">
                  <i className="fa-brands fa-youtube"></i> Youtube
                </a>
              </li>
              <li>
                <a href="#" className="footer-socials__facebook socials__facebook">
                  <i className="fa-brands fa-facebook"></i> Facebook
                </a>
              </li>
              <li>
                <a href="#" className="footer-socials__instagram socials__instagram">
                  <i className="fa-brands fa-instagram"></i> Instagram
                </a>
              </li>
              <li>
                <a href="#" className="footer-socials__rss socials__rss">
                  <i className="fa-solid fa-rss"></i> RSS
                </a>
              </li>
              <li>
                <a href="#" className="footer-socials__whatsapp socials__whatsapp">
                  <i className="fa-brands fa-whatsapp"></i> Whats App
                </a>
              </li>
              <li>
                <a href="#" className="footer-socials__telegram socials__telegram">
                  <i className="fa-brands fa-telegram"></i> Telegram
                </a>
              </li>
              <li>
                <a href="#" className="footer-socials__x socials__x">
                  <i className="fa-brands fa-x"></i> Twitter
                </a>
              </li>
            </ul>
          </div>

        </section>

        <section className="footer__contact">
          <div className="footer-contact__header">Receba nossas publicações</div>
          <div className="footer-contact__subheader">Receba nossas notícias e novidades em primeira mão!</div>
          <button className="footer-contact__submit">Inscreva-se!</button>
        </section>

      </div>

    </footer>
  )
}

export default LayoutFooter
