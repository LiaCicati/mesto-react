import React from "react";
import { api } from "../utils/Api";
import Card from "./Card";

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  const [cards, setCards] = React.useState([]);


React.useEffect(() => {
    Promise.all([api.getInitialCards(), api.getUserInfo()])
      .then(([cards, data]) => {
        setUserName(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar);
        setCards(cards);
      })
      .catch((err) => console.log(err));
  }, []);
  

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__image">
          <img
            className="profile__avatar"
            src={userAvatar}
            alt="Изображение пользователя"
          />
          <button
            className="profile__avatar-edit"
            onClick={onEditAvatar}
          ></button>
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <button
            className="profile__edit-button"
            type="button"
            aria-label="Редактировать"
            onClick={onEditProfile}
          ></button>
          <p className="profile__job">{userDescription}</p>
        </div>
        <button
          className="profile__add-button"
          type="button"
          aria-label="Add"
          onClick={onAddPlace}
        ></button>
      </section>

      <section className="elements">
        <ul className="elements__list">
          {cards.map((card) => (
            <Card key={card._id} card={card} onCardClick={onCardClick} />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
