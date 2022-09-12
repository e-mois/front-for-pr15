function PopupWithForm({name, title, isOpen, onClose, buttonName, children, onSubmit}){
  return (
    <div className={`popup popup_type_${name} ${isOpen && 'popup_opened'}`}>
      <div className="popup__container">
        <button type="button" className="popup__close-button" aria-label="Закрыть" onClick={onClose}></button>
        <h2 className="popup__title">{title}</h2>
        <form className="popup__container-form" name={name} onSubmit={onSubmit}>

          {children}
          
          <button type="submit" className="popup__button popup__button_type_save">{buttonName}</button>
        </form>
      </div>
    </div>
  )
}

export default PopupWithForm;