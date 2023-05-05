import "./index.css";

import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithForm from "../components/PopupWithForm.js";

// import {
//   profileFormValidator,
//   newCardFormValidator,
// } from "../utils/constants.js";

import {
  enableValidation,
  profilePopup,
  popupAdd,
} from "../utils/constants.js";

import {
  profileEditButton,
  profileAddButton,
  closeButtons,
  formSave,
  fieldsImage,
  popups,
  initialCards,
  place,
  imageScale,
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

      cardList.addItem(cardElement);
    },
  },
  ".places"
);

function creatCard(item) {
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

  nameInput.value = info.name;
  aboutMeInput.value = info.aboutMe;
});

popupProfile.setEventListeners();

const popupCard = new PopupWithForm({
  popupSelector: ".popup_add",
  formSubmit: (item) => {
    cardList.addItem(creatCard(item));
    console.log(item);
  },
});

profileAddButton.addEventListener("click", () => {
  popupCard.open();
  fieldsImage.reset();
  newCardFormValidator.resetValidation();
});

popupCard.setEventListeners();

// function addImage(url) {
//   const placeTemplate = page
//     .querySelector("#place-template")
//     .content.cloneNode(true);
//   const placeElement = placeTemplate.querySelector(".place");
//   placeElement.querySelector(".place__image").setAttribute("src", url.link);
//   placeElement.querySelector(".place__image").setAttribute("alt", url.name);
//   placeTemplate.querySelector(".place__title").textContent = url.name;

//   return placeTemplate;
// }

// function addImageTrue(url, place) {
//   const placeTemplate = addImage(url);
//   place.prepend(placeTemplate);
// }

// initialCards.forEach((url) => {
//   const placeElement = addImage(url);
//   place.append(placeElement);
// });

// Отправка данных карточки

// profileEditButton.addEventListener("click", clickEditButton);

// profileAddButton.addEventListener("click", function () {
//   openPopup(popupAdd);
// });

// closeButtons.forEach((button) => {
//   const popup = button.closest(".popup");
//   button.addEventListener("click", () => closePopup(popup));
// });

// formSave.addEventListener("submit", saveFormSubmit);

// fieldsImage.addEventListener("submit", creatImageSubmit);

// place.addEventListener("click", function (evt) {
//   if (evt.target.classList.contains("place__like")) {
//     evt.target.classList.toggle("place__like_active");
//   }
// });

// Удаление карточки

// place.addEventListener("click", function (evt) {
//   if (evt.target.classList.contains("place__remove")) {
//     evt.target.closest(".place").remove();
//   }
// });

// Попап изображения карточки

// place.addEventListener("click", function (evt) {
//   if (evt.target.classList.contains("place__image")) {
//     const placeTitle = evt.target
//       .closest(".place")
//       .querySelector(".place__title").textContent;
//     const placeName = evt.target.getAttribute("alt");
//     imageView.setAttribute("src", evt.target.src);
//     imageView.setAttribute("alt", placeName);
//     imageTitle.textContent = placeTitle;
//     openPopup(imageScale);
//   }
// });

// popups.forEach((popup) => {
//   popup.addEventListener("click", (event) => {
//     if (event.target === popup) {
//       closePopup(popup);
//     }
//   });
// });

// initialCards.forEach((info) => {
//   const cardElement = createCard(info);

//   place.append(cardElement);
// });

cardList.renderItems();

// const enableValidation = {
//   formSelector: ".popup__fields",
//   inputSelector: ".popup__field",
//   submitButtonSelector: ".popup__button-save",
//   inactiveButtonClass: "popup__button-save_disabled",
//   inputErrorClass: "popup__field_type-error",
//   errorClass: "popup__error_visible",
// };

// const formElements = document.querySelectorAll(enableValidation.formSelector);
// formElements.forEach((formElement) => {
//   const formValidator = new FormValidator(enableValidation, formElement);
//   formValidator.enableValidation();
// });

// const formValidators = {};

// // Включение валидации
// const enableValidation = (config) => {
//   const formList = Array.from(document.querySelectorAll(config.formSelector));
//   formList.forEach((formElement) => {
//     const validator = new FormValidator(formElement, config);
//     // получаем данные из атрибута `name` у формы
//     const formName = formElement.getAttribute("name");

//     // вот тут в объект записываем под именем формы
//     formValidators[formName] = validator;
//     validator.enableValidation();
//   });
// };

// enableValidation(classValidation);

// const formList = document.querySelectorAll(".popup__fields");
// formList.forEach((form) => {
//   const validator = new FormValidator(validation, form);
//   console.log(validation);
//   validator.enableValidation();
// });

// const profileFormValidator = new FormValidator(enableValidation, profilePopup);
// const newCardFormValidator = new FormValidator(enableValidation, popupAdd);

// profileFormValidator.enableValidation();
// newCardFormValidator.enableValidation();
// console.log(profileFormValidator);
// console.log(newCardFormValidator);
