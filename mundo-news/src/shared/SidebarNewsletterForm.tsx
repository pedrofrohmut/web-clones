import "/src/shared/sidebar-newsletter-form.css"

const SidebarNewsletterForm = () => {
  return (
    <div className="newsletter">
      <div className="newsletter__title">Newsletter</div>
      <form className="newsletter__form">
        <label htmlFor="email" className="newsletter__label">E-mail</label>
        <input type="email" id="email" className="newsletter__input required-input" />
        <button className="newsletter__submit">Inscreva-se!</button>
      </form>
    </div>
  )
}

export default SidebarNewsletterForm
