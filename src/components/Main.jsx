function Main (props) {
    return (
        <main className="content">
          <section className="profile">
            <div className="profile__avatar">
              <img className="profile__avatar-image" src="<%=require('./images/avatar.jpg')%>" alt="ава"/>
              <button className="profile__avatar-edit-button" type="button" onClick={ props.onEditAvatar }></button>
            </div>
            <div className="profile__info">
              <h1 className="profile__name"></h1>
              <button className="profile__edit-button" type="button" onClick={ props.onEditProfile }></button>
              <p className="profile__job"></p>
            </div>
            <button className="profile__add-button" type="button" onClick={ props.onAddPlace }></button>
          </section>

          <section className="cards">
            <ul className="cards__list">
            </ul>
          </section>
        </main>
    )
};

export default Main;