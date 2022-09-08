import React from "react";
import api from "../utils/api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import Card from "./Card";

function Main (props) {
  const currentUser = React.useContext(CurrentUserContext);
  const[cards, setCards] = React.useState([]);

  React.useEffect(() => {
      api.getInitialCards()
        .then((cardsData) => {
          setCards(cardsData);
        })
        .catch(err => console.log(err));
  }, []);

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    api.changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
      });
  };

  return (
      <main className="content">
        <section className="profile">
          <div className="profile__avatar">
            <img className="profile__avatar-image" src={currentUser.avatar} alt={`аватар пользователя ${currentUser.name}`}/>
            <button className="profile__avatar-edit-button" type="button" onClick={ props.onEditAvatar }></button>
          </div>
          <div className="profile__info">
            <h1 className="profile__name">{currentUser.name}</h1>
            <button className="profile__edit-button" type="button" onClick={ props.onEditProfile }></button>
            <p className="profile__job">{currentUser.about}</p>
          </div>
          <button className="profile__add-button" type="button" onClick={ props.onAddPlace }></button>
        </section>

        <section className="cards">
          <ul className="cards__list">
            {cards.map((card) =>
              <Card key={card._id} card={card} user={currentUser} onCardClick={props.onCardClick} onCardLike={handleCardLike} />
              )
            }
          </ul>
        </section>
      </main>
      );
};

export default Main;