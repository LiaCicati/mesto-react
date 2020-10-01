import React from "react";

function ModalImage({ card, onClose }) {
  return (
    <div className={`modal modal_image ${card && "modal_opened"}`}>
      <div className="modal__content">
        <img className="modal__image" src={`${card.link}`} alt={card.name} />
        <p className="modal__caption">{card.name}</p>
        <button
          className="modal__close-button"
          type="button"
          aria-label="Закрыть"
          onClick={onClose}
        ></button>
      </div>
    </div>
  );
}

export default ModalImage;
