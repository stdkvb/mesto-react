import React from "react";
import api from "../utils/Api";

function Main (props) {
  const[userName, setUserName] = React.useState('');
  const[userDescription, setUserDescription] = React.useState('');
  const[userAvatar, setUserAvatar] = React.useState('');
  const[cards, setCards] = React.useState([]);

  React.useEffect(() => {
      api.getUserInfo()
        .then((userInfo) => {
          setUserName(userInfo.name);
          setUserDescription(userInfo.about);
          setUserAvatar(userInfo.avatar);
        })
        .catch(err => console.log(err));
      api.getInitialCards()
        .then((cardsData) => {
          setCards(cardsData);
        })
  });

  return (
      <main className="content">
        <section className="profile">
          <div className="profile__avatar">
            <img className="profile__avatar-image" src={userAvatar} alt="ава"/>
            <button className="profile__avatar-edit-button" type="button" onClick={ props.onEditAvatar }></button>
          </div>
          <div className="profile__info">
            <h1 className="profile__name">{userName}</h1>
            <button className="profile__edit-button" type="button" onClick={ props.onEditProfile }></button>
            <p className="profile__job">{userDescription}</p>
          </div>
          <button className="profile__add-button" type="button" onClick={ props.onAddPlace }></button>
        </section>

        <section className="cards">
          <ul className="cards__list">
            {cards.map((card) =>
              <li className="card" key={card._id}>
                <img className="card__img" src={card.link} alt="картинка"/>
                <h2 className="card__title">{card.name}</h2>
                <div className="card__like-section">
                  <button className="card__like-button" type="button"></button>
                  <p className="card__like-counter">{card.likes.length}</p>
                </div>
                <button className="card__delete-button" type="button"></button>
              </li>)
            }
          </ul>
        </section>
      </main>
      );
};

export default Main;