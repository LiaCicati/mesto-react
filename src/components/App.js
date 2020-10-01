import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ModalWithForm from "./ModalWithForm";
import ModalImage from "./ModalImage";

function App() {
  const [isEditProfileModalOpen, setEditProfile] = React.useState(false);
  function handleEditProfileClick() {
    setEditProfile(true);
  }

  const [isEditAvatarModalOpen, setEditAvatar] = React.useState(false);
  function handleEditAvatarClick() {
    setEditAvatar(true);
  }

  const [isAddPlaceModalOpen, setAddCard] = React.useState(false);
  function handleAddPlaceClick() {
    setAddCard(true);
  }

  const [selectedCard, setSelectedCard] = React.useState("");
  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllModals() {
    setEditProfile(false);
    setEditAvatar(false);
    setAddCard(false);
    handleCardClick("");
  }

  return (
    <div className="page">
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
      />
      <Footer />

      <section className="modals">
        <ModalWithForm
          name="edit"
          title="Редактировать профиль"
          isOpen={isEditProfileModalOpen}
          onClose={closeAllModals}
          children={
            <>
              <label className="modal__input">
                <input
                  id="name-input"
                  className="modal__text modal__text_name"
                  type="text"
                  name="fullName"
                  required
                  placeholder="Введите имя"
                  minLength="2"
                  maxLength="40"
                  autoComplete="off"
                />
                <span
                  id="name-input-error"
                  className="modal__input-error"
                ></span>
              </label>
              <label className="modal__input">
                <input
                  id="job-input"
                  className="modal__text modal__text_job"
                  type="text"
                  name="about"
                  required
                  placeholder="Введите описание"
                  minLength="2"
                  maxLength="200"
                  autoComplete="off"
                />
                <span
                  id="job-input-error"
                  className="modal__input-error"
                ></span>
              </label>

              <button
                className="modal__submit-button"
                type="submit"
                aria-label="Save"
              >
                Сохранить
              </button>
            </>
          }
        />

        <ModalWithForm
          name="add"
          title="Новое место"
          isOpen={isAddPlaceModalOpen}
          onClose={closeAllModals}
          children={
            <>
              <label className="modal__input">
                <input
                  id="title-input"
                  className="modal__text modal__text_place"
                  type="text"
                  name="title"
                  required
                  placeholder="Название"
                  minLength="1"
                  maxLength="30"
                  autoComplete="off"
                />
                <span
                  id="title-input-error"
                  className="modal__input-error"
                ></span>
              </label>
              <label className="modal__input">
                <input
                  id="link-input"
                  className="modal__text modal__text_link"
                  type="url"
                  name="url"
                  required
                  placeholder="Cсылка на картинку"
                  autoComplete="off"
                />
                <span
                  id="link-input-error"
                  className="modal__input-error"
                ></span>
              </label>
              <button
                className="modal__submit-button"
                type="submit"
                aria-label="Создать"
              >
                Создать
              </button>
            </>
          }
        />

        <ModalWithForm
          name="delete"
          title="Вы уверены?"
          onClose={closeAllModals}
          children={
            <>
              <button
                className="modal__submit-button modal__submit-button_delete"
                type="submit"
              >
                Да
              </button>
            </>
          }
        />

        <ModalWithForm
          name="avatar"
          title="Обновить аватар"
          isOpen={isEditAvatarModalOpen}
          onClose={closeAllModals}
          children={
            <>
              <label className="modal__input">
                <input
                  id="link-input"
                  className="modal__text modal__text_link"
                  type="url"
                  name="url"
                  required
                  placeholder="Ссылка на картинку"
                  autoComplete="off"
                />
                <span
                  id="link-input-error"
                  className="modal__input-error"
                ></span>
              </label>
              <button
                className="modal__submit-button"
                type="submit"
                aria-label="Save"
              >
                Сохранить
              </button>
            </>
          }
        />

        <ModalImage card={selectedCard} onClose={closeAllModals} />
      </section>
    </div>
  );
}

export default App;
