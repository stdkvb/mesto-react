function ImagePopup() {
    return(
      <div className="popup popup_dark-background" id="imagePopup">
        <div className="popup__container popup__container_fullsize">
          <button className="popup__close-button" type="button"></button>
          <img className="popup__image" alt="фото места"/>
          <p className="popup__description"></p>
        </div>
      </div>
    )
};

export default ImagePopup;