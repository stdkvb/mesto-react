const PopupWithForm = props => {
    const { title, name, formSection, buttonText } = props;

    return (
        <div className="popup" id={props.name}>
          <div className="popup__container">
            <button className="popup__close-button" type="button"></button>
            <form className="popup__form" name={props.name} novalidate>
              <h3 className="popup__title">{props.title}</h3>
              {props.formSection}
              <button className="popup__submit-button" type="submit">{props.buttonText}</button>
            </form>
          </div>
        </div>
    )
};

export default PopupWithForm;