import { useContext, useEffect, useState } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup(props) {

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, props.isOpen]);

  function handleChangeName(event) {
    setName(event.target.value);
  }

  function handleChangeDescription(event) {
    setDescription(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      name='profile'
      title='Редактировать профиль'
      buttonName='Сохранить'
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <label htmlFor="input-name" className="popup__label">
        <input 
          type="text" 
          id="input-name" 
          className="popup__input popup__input_type_name" 
          value={name || ''} 
          required 
          minLength="2" 
          maxLength="40" 
          name="name" 
          placeholder="Имя"
          onChange={handleChangeName}
        />
        <span className="input-name-error popup__input-error"></span>
      </label>
      <label htmlFor="input-about" className="popup__label">
        <input 
          type="text" 
          id="input-about" 
          className="popup__input popup__input_type_about" 
          value={description || ''} 
          required 
          minLength="2" 
          maxLength="200" 
          name="about" 
          placeholder="Занятие" 
          onChange={handleChangeDescription}/>
        <span className="input-about-error popup__input-error"></span>
      </label>
    </PopupWithForm>
  )
}

export default EditProfilePopup;