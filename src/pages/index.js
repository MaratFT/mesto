import "./index.css";

import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithForm from "../components/PopupWithForm.js";
import Api from "../components/Api.js";
import PopupWithConfirmation from "../components/PopupWithConfirmation.js";

import {
  enableValidation,
  profilePopup,
  popupAdd,
  profileEditButton,
  profileAddButton,
  fieldsImage,
  nameInput,
  aboutMeInput,
  avatarProfile,
  popupAvatar,
  removeCard,
} from "../utils/constants.js";

const userInfo = new UserInfo({
  nameUser: ".profile__title",
  aboutUser: ".profile__subtitle",
  avatarUser: ".profile__avatar-image",
});

const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-65/",
  headers: {
    authorization: "936efb00-9cef-4590-85c9-50906bbdf2d0",
    "Content-Type": "application/json",
  },
});

Promise.all([api.getInfoUser(), api.getInitialCards()])
  .then(([info, cards]) => {
    userInfo.setUserInfo(info);

    cardList.renderItems(cards);
  })
  .catch((err) => console.log(err));

const cardList = new Section(
  {
    renderer: (item) => {
      cardList.addItem(createCard(item));
    },
  },
  ".places"
);

const profileFormValidator = new FormValidator(enableValidation, profilePopup);

const newCardFormValidator = new FormValidator(enableValidation, popupAdd);

const profileFormAvatarValidator = new FormValidator(
  enableValidation,
  popupAvatar
);

const cardDeleteValidator = new FormValidator(enableValidation, removeCard);

profileFormValidator.enableValidation();
newCardFormValidator.enableValidation();
profileFormAvatarValidator.enableValidation();

cardDeleteValidator.enableValidation();

const popupConfirmation = new PopupWithConfirmation(".popup_confirmation");

function createCard(item) {
  const card = new Card(
    {
      info: item,
      handleCardClick: (name, link) => {
        const cardView = new PopupWithImage(".popup_image-scale");
        cardView.open(name, link);
        cardView.setEventListeners();
      },
      handleDeleteCard: () => {
        popupConfirmation.open();

        popupConfirmation.handleConfirm(() => {
          api
            .deleteCard(card.getId())
            .then(() => {
              card.handleCardRemove();
              popupConfirmation.close();
            })
            .catch((err) => console.log(err));
        });
      },
      handleLikeNumber: () => {
        if (card.isLiked) {
          api
            .deleteLike(card.getId())
            .then((likes) => {
              card.likeDisabled();
              card.setLikesNumber(likes);
            })
            .catch((err) => console.log(err));
        } else {
          api
            .addLike(card.getId())
            .then((likes) => {
              card.likeOn();
              card.setLikesNumber(likes);
            })
            .catch((err) => console.log(err));
        }
      },
      idUser: userInfo.getUserId(),
    },
    "#place-template"
  );
  const cardElement = card.generateCard();

  return cardElement;
}

const popupProfile = new PopupWithForm({
  popupSelector: ".profile-popup",
  formSubmit: (info) => {
    popupProfile.renderSave(true);
    api
      .editInfoUser(info)
      .then((res) => {
        userInfo.setUserInfo(res);
        popupProfile.close();
      })
      .catch((err) => console.log(err))
      .finally(() => {
        popupProfile.renderSave(false);
      });
  },
});

profileEditButton.addEventListener("click", () => {
  popupProfile.open();
  const info = userInfo.getUserInfo();

  nameInput.value = info.name;
  aboutMeInput.value = info.about;
  profileFormValidator.resetValidation();
});

popupProfile.setEventListeners();

const popupCard = new PopupWithForm({
  popupSelector: ".popup_add",
  formSubmit: (item) => {
    popupCard.renderSave(true);
    api
      .addCard(item)
      .then((res) => {
        cardList.addItem(createCard(res));
        popupCard.close();
      })
      .catch((err) => console.log(err))
      .finally(() => {
        popupCard.renderSave(false);
      });
  },
});

popupCard.setEventListeners();

const popupNewAvatar = new PopupWithForm({
  popupSelector: ".popup_avatar",
  formSubmit: (item) => {
    popupNewAvatar.renderSave(true);
    api
      .editAvatarUser(item)
      .then((res) => {
        userInfo.setUserInfo(res);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        popupNewAvatar.renderSave(false);
        popupNewAvatar.close();
      });
  },
});

profileAddButton.addEventListener("click", () => {
  popupCard.open();
  fieldsImage.reset();
  newCardFormValidator.resetValidation();
});

avatarProfile.addEventListener("click", () => {
  popupNewAvatar.open();
  profileFormAvatarValidator.resetValidation();
});

popupNewAvatar.setEventListeners();

popupConfirmation.setEventListeners();
