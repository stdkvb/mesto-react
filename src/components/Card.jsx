function Card(props) {
    const handleClick = () => {
        props.onCardClick(props.card);
      } 

    return(
        <li className="card">
            <img className="card__img" src={props.card.link} alt="картинка" onClick={handleClick}/>
            <h2 className="card__title">{props.card.name}</h2>
            <div className="card__like-section">
                <button className="card__like-button" type="button"></button>
                <p className="card__like-counter">{props.card.likes.length}</p>
            </div>
            <button className="card__delete-button" type="button"></button>
        </li>
    );
};

export default Card;