import { useState, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {

  const [name, setName] = useState('');
  const [link, setLink] = useState('');

  useEffect(() => {
    setName('');
    setLink('');
  }, [props.isOpen]);

  function handleChangeName(event) {
    setName(event.target.value);
  }

  function handleChangeLink(event) {
    setLink(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.onSavePlace({
      name,
      link,
    });
  }


  return (
    <PopupWithForm
      name='add-place'
      title='Новое место'
      buttonName='Создать'
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <label htmlFor="input-place-name" className="popup__label">
        <input 
          type="text" 
          id="input-place-name" 
          className="popup__input popup__input_type_place-name" 
          placeholder="Название" 
          required 
          minLength="2" 
          maxLength="30" 
          name="name" 
          onChange={handleChangeName}
          value={name}
        />
        <span className="input-place-name-error popup__input-error"></span>
      </label>
      <label htmlFor="input-place-link" className="popup__label">
        <input 
          type="url" 
          id="input-place-link" 
          className="popup__input popup__input_type_place-link" 
          placeholder="Ссылка на картинку" 
          required 
          name="link" 
          onChange={handleChangeLink}
          value={link}
        />
        <span className="input-place-link-error popup__input-error"></span>
      </label>
    </PopupWithForm>
  )
}

export default AddPlacePopup;