import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';

function App() {
  return (
    <body class="page">
        <Header />
        <Main />
        <Footer />
        
        <PopupWithForm name="edit-avatar" title="Обновить аватар" buttonText="Сохранить">
          formSection={
            <section className="popup__form-section">
            <input className="popup__input" id="avatar-url" type="url" name="avatar" placeholder="Ссылка на аватар" required/>
            <span className="popup__input-error avatar-url-error"></span>
            </section>
          }
        </PopupWithForm>

        <PopupWithForm name="edit-profile" title="Редактировать профиль" buttonText="Сохранить">
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
        </PopupWithForm>

        <PopupWithForm name="add-place" title="Новое место" buttonText="Создать">
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
        </PopupWithForm>

        <PopupWithForm name="delete" title="Вы уверены?" buttonText="Да" />

        <div className="popup popup_dark-background" id="imagePopup">
          <div className="popup__container popup__container_fullsize">
            <button className="popup__close-button" type="button"></button>
            <img className="popup__image" alt="фото места"/>
            <p className="popup__description"></p>
          </div>
        </div>

        <div className="popup" id="deletePopup">
          <div className="popup__container">
            <button className="popup__close-button" type="button"></button>
            <form className="popup__form" novalidate>
              <h3 className="popup__title">Вы уверены?</h3>
              <button className="popup__submit-button" type="submit">Да</button>
            </form>
          </div>
        </div>

        <template className="card-template">
          <li className="card">
            <img className="card__img"/>
            <h2 className="card__title"></h2>
            <div className="card__like-section">
              <button className="card__like-button" type="button"></button>
              <p className="card__like-counter">0</p>
            </div>
            <button className="card__delete-button" type="button"></button>
          </li>
        </template>
     </body>
  );
}

export default App;
