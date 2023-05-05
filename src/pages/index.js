import "./index.css";

import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithForm from "../components/PopupWithForm.js";

import {
  enableValidation,
  profilePopup,
  popupAdd,
} from "../utils/constants.js";

import {
  profileEditButton,
  profileAddButton,
  fieldsImage,
  initialCards,
  nameInput,
  aboutMeInput,
} from "../utils/constants.js";

const profileFormValidator = new FormValidator(enableValidation, profilePopup);

const newCardFormValidator = new FormValidator(enableValidation, popupAdd);

profileFormValidator.enableValidation();
newCardFormValidator.enableValidation();

const cardList = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      cardList.addItem(createCard(item));
    },
  },
  ".places"
);

function createCard(item) {
  const card = new Card(
    {
      info: item,
      handleCardClick: (name, link) => {
        const cardView = new PopupWithImage(".popup_image-scale");
        cardView.open(name, link);
        cardView.setEventListeners();
      },
    },
    "#place-template"
  );
  const cardElement = card.generateCard();

  return cardElement;
}

const userInfo = new UserInfo({
  nameUser: ".profile__title",
  aboutUser: ".profile__subtitle",
});

const popupProfile = new PopupWithForm({
  popupSelector: ".profile-popup",
  formSubmit: (info) => {
    userInfo.setUserInfo(info);

    popupProfile.close();
  },
});

profileEditButton.addEventListener("click", () => {
  popupProfile.open();
  const info = userInfo.getUserInfo();

  nameInput.value = info.firstName;
  aboutMeInput.value = info.aboutMe;
  profileFormValidator.resetValidation();
});

popupProfile.setEventListeners();

const popupCard = new PopupWithForm({
  popupSelector: ".popup_add",
  formSubmit: (item) => {
    cardList.addItem(createCard(item));
  },
});

profileAddButton.addEventListener("click", () => {
  popupCard.open();
  fieldsImage.reset();
  newCardFormValidator.resetValidation();
});

popupCard.setEventListeners();

cardList.renderItems();
