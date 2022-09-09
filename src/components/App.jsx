import React from 'react';
import '../index.css';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import api from '../utils/api';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';

function App(props) {

  const[currentUser, setCurrentUser] = React.useState({});
  const[isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const[isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const[isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const[selectedCard, setSelectedCard] = React.useState({name: '', link: ''});
  
  React.useEffect(() => {
    api.getUserInfo()
      .then((userInfo) => {
        setCurrentUser(userInfo);
      })
      .catch(err => console.log(err));
  }, []);

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  };

  function handleEditProfileClick() {
    setEditProfilePopupOpen(!isEditProfilePopupOpen);
  };

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(!isAddPlacePopupOpen);
  };

  function handleCardClick(card) {
    setSelectedCard(card)
  }

  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setSelectedCard({name: '', link: ''});
  };

  function handleUpdateUser({name, about}) {
    api.setUserInfo({name, about})
      .then((...currentUser) => {
        setCurrentUser({...currentUser, name, about});
        setEditProfilePopupOpen(false);
      })
      .catch(err => console.log(err));
  }

  function handleUpdateAvatar({avatar}) {
    api.editAvatar({avatar})
      .then((...currentUser) => {
        setCurrentUser({...currentUser, avatar});
        setEditAvatarPopupOpen(false);
    })
    .catch(err => console.log(err));
  }

  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
        />
        <Footer />
        
        <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar}/>      
        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />       

        <PopupWithForm
          name="add-place"
          title="Новое место"
          buttonText="Создать"
          formSection={
            <><section className="popup__form-section">
                <input className="popup__input" id="place-name" type="text" name="name" placeholder="Название" required /*minlength="2" maxlength="30"*//>
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

        <ImagePopup
          card={selectedCard}
          onClose={closeAllPopups}
        />
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
