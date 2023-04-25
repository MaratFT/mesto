import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";

const page = document.querySelector(".page");

const profileEditButton = page.querySelector(".profile__edit-button");

// const buttonClose = page.querySelector(".popup__close");

const profilePopup = page.querySelector(".profile-popup");

const titleCopy = page.querySelector(".profile__title");

const subtitleCopy = page.querySelector(".profile__subtitle");

const nameInput = page.querySelector("#user-name-input");

const aboutMeInput = page.querySelector("#about-me-input");

const formSave = page.querySelector(".popup__fields");

const place = page.querySelector(".places");

const popupAdd = page.querySelector(".popup_add");

const profileAddButton = page.querySelector(".profile__add-button");

const profileCloseButton = page.querySelector(".popup__closeAdd");

const nameImageInput = page.querySelector("#image-name-input");

const imageInput = page.querySelector("#image-input");

const fieldsImage = page.querySelector(".popup__fieldsImage");

// const placeImage = page.querySelector(".place__image");

const popups = document.querySelectorAll(".popup");

export const imageScale = document.querySelector(".popup_image-scale");
export const imageClose = document.querySelector(".popup__close-image");
export const imageView = document.querySelector(".popup__image-view");
export const imageTitle = document.querySelector(".popup__image-title");

const enableValidation = {
  formSelector: ".popup__fields",
  inputSelector: ".popup__field",
  submitButtonSelector: ".popup__button-save",
  inactiveButtonClass: "popup__button-save_disabled",
  inputErrorClass: "popup__field_type-error",
  errorClass: "popup__error_visible",
};

const profileFormValidator = new FormValidator(enableValidation, profilePopup);
const newCardFormValidator = new FormValidator(enableValidation, popupAdd);

profileFormValidator.enableValidation();
newCardFormValidator.enableValidation();

const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", handleEscapeKey);
}

function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", handleEscapeKey);
}

function clickEditButton() {
  openPopup(profilePopup);
  nameInput.value = titleCopy.textContent;
  aboutMeInput.value = subtitleCopy.textContent;
}

function saveFormSubmit(evt) {
  evt.preventDefault();
  titleCopy.textContent = nameInput.value;
  subtitleCopy.textContent = aboutMeInput.value;
  closePopup(profilePopup);
}

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

function creatImageSubmit(evt) {
  evt.preventDefault();
  const placeTitleValue = nameImageInput.value;
  const placeImageInput = imageInput.value;

  const newImage = {
    name: placeTitleValue,
    link: placeImageInput,
  };

  fieldsImage.reset();

  place.prepend(createCard(newImage));

  closePopup(popupAdd);
}

profileEditButton.addEventListener("click", clickEditButton);

profileAddButton.addEventListener("click", function () {
  openPopup(popupAdd);
});

const closeButtons = document.querySelectorAll(".popup__close");

closeButtons.forEach((button) => {
  const popup = button.closest(".popup");
  button.addEventListener("click", () => closePopup(popup));
});

formSave.addEventListener("submit", saveFormSubmit);

fieldsImage.addEventListener("submit", creatImageSubmit);

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

popups.forEach((popup) => {
  popup.addEventListener("click", (event) => {
    if (event.target === popup) {
      closePopup(popup);
    }
  });
});

function handleEscapeKey(evt) {
  if (evt.key === "Escape") {
    const popupOpened = document.querySelector(".popup_opened");
    if (popupOpened) {
      closePopup(popupOpened);
    }
  }
}

initialCards.forEach((info) => {
  const cardElement = createCard(info);

  place.append(cardElement);
});

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

function createCard(item) {
  const card = new Card(item, "#place-template");
  const cardElement = card.generateCard();
  return cardElement;
}

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
