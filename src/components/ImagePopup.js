function ImagePopup({name, card, onClose}) {
  return (
    <div className={`popup popup_type_${name} ${card.name ? 'popup_opened' : ''}`}>
      <div className="popup__container-image">
        <button type="button" className="popup__close-button" aria-label="Закрыть" onClick={onClose}></button>
        <img src={card.link} alt={card.name} className="popup__image" />
        <p className="popup__description">{card.name}</p>
      </div>    
    </div>
  )
}

export default ImagePopup;