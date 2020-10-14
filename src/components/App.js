import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ModalImage from "./ModalImage";
import { api } from "../utils/Api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import EditProfileModal from "./EditProfileModal";
import EditAvatarModal from "./EditAvatarModal";
import AddPlaceModal from "./AddPlaceModal";
import ModalWithDelete from "./ModalWithDelete";

function App() {
  const [isLoading, setIsLoading] = React.useState(false);

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
  const [deletedCard, setDeletedCard] = React.useState(null);
  const [isModalWithDeleteOpen, setModalWithDelete] = React.useState(false);
  function handleDeleteClick(card) {
    setModalWithDelete(true);
    setDeletedCard(card);
  }

  const [selectedCard, setSelectedCard] = React.useState(null);
  const [isModalImageOpen, setModalImage] = React.useState(false);
  function handleCardClick(card) {
    setSelectedCard(card);
    setModalImage(true);
  }

  function closeAllModals() {
    setEditProfile(false);
    setEditAvatar(false);
    setAddCard(false);
    setModalImage(false);
    setModalWithDelete(false);
    setSelectedCard(null);
    setDeletedCard(null);
  }

  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getInitialCards(), api.getUserInfo()])
      .then(([cards, userData]) => {
        setCurrentUser(userData);
        setCards(cards);
      })
      .catch((err) => console.log(err));
  }, []);

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    if (!isLiked) {
      api
        .likeCard(card._id)
        .then((newCard) => {
          const newCards = cards.map((c) => (c._id === card._id ? newCard : c));
          setCards(newCards);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      api
        .dislikeCard(card._id)
        .then((newCard) => {
          const newCards = cards.map((c) => (c._id === card._id ? newCard : c));
          setCards(newCards);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  function handleCardDelete() {
    setIsLoading(true);
    api
      .deleteCard(deletedCard._id)
      .then(() => {
        const newCards = cards.filter((c) => c._id !== deletedCard._id);
        setCards(newCards);
        closeAllModals();
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleUpdateUser(items) {
    setIsLoading(true);
    api
      .setUserInfo(items)
      .then((res) => {
        setCurrentUser(res);
        closeAllModals();
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleUpdateAvatar(item) {
    setIsLoading(true);
    api
      .setUserAvatar(item)
      .then((res) => {
        setCurrentUser(res);
        closeAllModals();
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleAddPlaceSubmit(newCard) {
    setIsLoading(true);
    api
      .postNewCard(newCard)
      .then((newCard) => setCards([newCard, ...cards]))
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false);
        closeAllModals();
      });
  }

  function handlerEscClose(evt) {
    if (evt.key === "Escape") {
      closeAllModals();
    }
  }

  function closeByOverlay(evt) {
    if (evt.target.classList.contains("modal")) {
      closeAllModals();
    }
  }

  React.useEffect(() => {
    document.addEventListener("keydown", handlerEscClose);
    document.addEventListener("click", closeByOverlay);
    return () => {
      document.removeEventListener("keydown", handlerEscClose);
      document.removeEventListener("click", closeByOverlay);
    };
  });

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Main
          cards={cards}
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
          onCardLike={handleCardLike}
          onCardDelete={handleDeleteClick}
        />
        <Footer />

        <section className="modals">
          <EditProfileModal
            isOpen={isEditProfileModalOpen}
            isClose={closeAllModals}
            onUpdateUser={handleUpdateUser}
            isLoading={isLoading}
          ></EditProfileModal>

          <AddPlaceModal
            isOpen={isAddPlaceModalOpen}
            isClose={closeAllModals}
            postNewCard={handleAddPlaceSubmit}
            isLoading={isLoading}
          ></AddPlaceModal>

          <EditAvatarModal
            isOpen={isEditAvatarModalOpen}
            isClose={closeAllModals}
            onUpdateAvatar={handleUpdateAvatar}
            isLoading={isLoading}
          ></EditAvatarModal>

          <ModalWithDelete
            isOpen={isModalWithDeleteOpen}
            isClose={closeAllModals}
            onDelete={handleCardDelete}
            card={deletedCard}
            isLoading={isLoading}
          />

          <ModalImage
            isOpen={isModalImageOpen}
            onClose={closeAllModals}
            card={selectedCard}
          />
        </section>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
