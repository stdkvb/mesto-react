import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
    const avatarRef = React.useRef();

    React.useEffect(() => {
        avatarRef.current.value = '';
    },[props.onUpdateAvatar]);
    
    function handleSubmit(e) {
        e.preventDefault();
        props.onUpdateAvatar({
          avatar: avatarRef.current.value
        });
      }

    return (
        <PopupWithForm
        name="edit-avatar"
        title="Обновить аватар"
        buttonText="Сохранить"
        formSection={
          <section className="popup__form-section">
            <input className="popup__input"
            id="avatar-url"
            ref={avatarRef}
            type="url"
            name="avatar"
            placeholder="Ссылка на аватар"
            required/>
            <span className="popup__input-error avatar-url-error"></span>
          </section>
        }
        isOpen={props.isOpen}          
        onClose={props.onClose}        
        onSubmit={handleSubmit}
      />
    )
};

export default EditAvatarPopup;