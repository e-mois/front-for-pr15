import { useRef } from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {

  const avatarRef = useRef();

  function handleSubmit(event) {
    event.preventDefault();
    props.onUpdateAvatar({
      link: avatarRef.current.value,
    });
  }

  return (
    <PopupWithForm
      name='avatar'
      title='Обновить аватар'
      buttonName='Сохранить'
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <label htmlFor="input-avatar" className="popup__label">
        <input 
          type="url" 
          id="input-avatar" 
          className="popup__input popup__input_type_avatar" 
          placeholder="Ссылка на картинку" 
          required 
          name="link" 
          ref={avatarRef}
        />
        <span className="input-avatar-error popup__input-error"></span>
      </label>
    </PopupWithForm>
  )
} 

export default EditAvatarPopup;