import { useContext } from "react";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import Header from "./Header";
import Footer from "./Footer";

function Main(props) {

  const currentUser = useContext(CurrentUserContext);

  return (
    <>
    <Header
      buttonName={props.headerLinkName} 
      headerLink={props.headerLinkUrl}
      onClick={props.onClick}
    >
      {props.pageData}
    </Header>
    <main className="content">
      <section className="profile">
        <div className="profile__info">
          <a href="#" className="profile__avatar-link" onClick={props.onEditAvatar}>
            <img src={currentUser.avatar} alt="Аватар" className="profile__avatar"/>
          </a>
          <div className="profile__person">
            <div className="profile__edit-block">
              <h1 className="profile__name">{currentUser.name}</h1>
              <button type="button" className="profile__edit" aria-label="Изменить" onClick={props.onEditProfile}></button>
            </div>
            <p className="profile__about">{currentUser.about}</p>
          </div>
        </div>
        <button type="button" className="profile__add-button" aria-label="Добавить" onClick={props.onAddPlace}></button>
    
      </section>
      <section className="elements" aria-label="Галерея">
        <ul className="elements-list">
          {props.cards.map((card) => (
            <Card 
              key={card._id} 
              elem={card} 
              onCardClick={props.onCardClick} 
              onCardLike={props.onCardLike} 
              onCardDelete={props.onCardDelete}
            />
          ))}
        </ul>
      </section>
    </main>
    <Footer />
    </>
  )
}

export default Main;