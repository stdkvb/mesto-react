import React from 'react';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App(props) {

  const[isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const[isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const[isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  
  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  };

  function handleEditProfileClick() {
    setEditProfilePopupOpen(!isEditProfilePopupOpen);
  };

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(!isAddPlacePopupOpen);
  };

  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
  };

  return (
    <body class="page">
        <Header />
        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
        />
        <Footer />
        
        <PopupWithForm
          name="edit-avatar"
          title="Обновить аватар"
          buttonText="Сохранить"
          formSection={
            <section className="popup__form-section">
              <input className="popup__input" id="avatar-url" type="url" name="avatar" placeholder="Ссылка на аватар" required/>
              <span className="popup__input-error avatar-url-error"></span>
            </section>
          }
          isOpen={isEditAvatarPopupOpen}          
          onClose={closeAllPopups}
        />
        
        <PopupWithForm
          name="edit-profile"
          title="Редактировать профиль"
          buttonText="Сохранить"
          formSection={
            <><section className="popup__form-section">
                <input className="popup__input profile-name" id="profile-name" type="text" name="name" placeholder="Имя" required minlength="2" maxlength="40" />
                <span className="popup__input-error profile-name-error"></span>
              </section>
              <section className="popup__form-section">
                <input className="popup__input profile-job" id="profile-job" type="text" name="about" placeholder="О себе" required minlength="2" maxlength="200" />
                <span className="popup__input-error profile-job-error"></span>
              </section></>
          }
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        />       

        <PopupWithForm
          name="add-place"
          title="Новое место"
          buttonText="Создать"
          formSection={
            <><section className="popup__form-section">
                <input className="popup__input" id="place-name" type="text" name="name" placeholder="Название" required minlength="2" maxlength="30"/>
                <span className="popup__input-error place-name-error"></span>
              </section>
              <section className="popup__form-section">
                <input className="popup__input" id="place-url" type="url" name="link" placeholder="Ссылка на картинку" required/>
                <span className="popup__input-error place-url-error"></span>
              </section></>
          }
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        />

        <PopupWithForm
          name="delete"
          title="Вы уверены?"
          buttonText="Да"
          onClose={closeAllPopups}
        />
     </body>
  );
}

export default App;
