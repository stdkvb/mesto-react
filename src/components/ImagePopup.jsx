function ImagePopup(props) {
    return(
      <div className={`popup popup_dark-background ${props.card && 'popup_opened'}`} id="imagePopup">
        <div className="popup__container popup__container_fullsize">
          <button className="popup__close-button" type="button" onClick={props.onClose}></button>
          <img className="popup__image" src={`${props.card.link}`} alt="фото места"/>
          <p className="popup__description">{props.card.name}</p>
        </div>
      </div>
    )
};

export default ImagePopup;