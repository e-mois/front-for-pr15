import { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card(props) {

  const currentUser = useContext(CurrentUserContext);

  const isOwn = props.elem.owner === currentUser._id;
  const cardDeleteButtonClassName = (
    `element__trashbin ${isOwn ? 'element__trashbin_visible' : ''}`
  );

  const isLiked = props.elem.likes.some(i => i === currentUser._id);
  const cardLikeButtonClassName = (
    `element__like ${isLiked ? 'element__like_type_active' : ''}`
  ); 
  
  function handleClick() {
    props.onCardClick(props.elem);
  }

  function handleCardLike() {
    props.onCardLike(props.elem);
  }

  function handleCardDelete() {
    props.onCardDelete(props.elem);
  }

  return (
    <li className="element">
      <button className={cardDeleteButtonClassName} aria-label="Удалить" onClick={handleCardDelete}></button>
      <div className="element__image-container">
        <a href="#" className="element__link">
          <img src={props.elem.link} alt={props.elem.name} className="element__image" onClick={handleClick} />
        </a>
      </div>
      <div className="element__info">
        <h2 className="element__title">{props.elem.name}</h2>
        <div className="element__like-container">
          <button className={cardLikeButtonClassName} aria-label="" onClick={handleCardLike}></button>
          <p className="element__like-count">{props.elem.likes.length}</p>
        </div>
      </div>
    </li>
  )
}

export default Card;