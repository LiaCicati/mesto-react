import React from "react";

function Card({ card, onCardClick }) {
  function handleClick() {
    onCardClick(card);
  }

  return (
    <li className="element">
      <img
        className="element__image"
        src={card.link}
        alt={card.name}
        onClick={handleClick}
      />
      <div className="element__description">
        <h2 className="element__title">{card.name}</h2>
        <div className="element__like-interaction">
          <button
            className="element__like-button"
            aria-label="Лайк"
            type="button"
          ></button>
          <span className="element__like-counter">0</span>
        </div>
      </div>
      <button
        className="element__delete-button"
        type="button"
        aria-label="Удалить"
      ></button>
    </li>
  );
}

export default Card;
