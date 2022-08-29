import React from "react";
import api from "../utils/Api";

function Main (props) {
  const[userName, setUserName] = React.useState('');
  const[userDescription, setUserDescription] = React.useState('');
  const[userAvatar, setUserAvatar] = React.useState('');

  React.useEffect(() => {
      api.getUserInfo()
        .then((userInfo) => {
          setUserName(userInfo.name);
          setUserDescription(userInfo.about);
          setUserAvatar(userInfo.avatar);
        })
        .catch(err => console.log(err));
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
          </ul>
        </section>
      </main>
      );
};

export default Main;