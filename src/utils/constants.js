export const page = document.querySelector(".page");

export const profileEditButton = document.querySelector(
  ".profile__edit-button"
);

export const closeButtons = document.querySelectorAll(".popup__close");

export const profilePopup = document.querySelector(".profile-popup");

export const titleCopy = page.querySelector(".profile__title");

export const subtitleCopy = page.querySelector(".profile__subtitle");

export const nameInput = document.querySelector("#user-name-input");

export const aboutMeInput = document.querySelector("#about-me-input");

export const formSave = page.querySelector(".popup__fields");

// export const place = page.querySelector(".places");

export const place = ".places";

export const popupAdd = document.querySelector(".popup_add");

export const profileAddButton = document.querySelector(".profile__add-button");

export const profileCloseButton = page.querySelector(".popup__closeAdd");

export const nameImageInput = page.querySelector("#image-name-input");

export const imageInput = page.querySelector("#image-input");

export const fieldsImage = document.querySelector(".popup__fieldsImage");

// const placeImage = page.querySelector(".place__image");

export const popups = document.querySelectorAll(".popup");

export const imageScale = document.querySelector(".popup_image-scale");
export const imageClose = document.querySelector(".popup__close-image");
export const imageView = document.querySelector(".popup__image-view");
export const imageTitle = document.querySelector(".popup__image-title");

export const avatarProfile = document.querySelector(".profile__avatar-button");

export const popupAvatar = document.querySelector(".popup__avatar");

export const removeCard = document.querySelector(".popup__confirmation");

export const enableValidation = {
  formSelector: ".popup__fields",
  inputSelector: ".popup__field",
  submitButtonSelector: ".popup__button-save",
  inactiveButtonClass: "popup__button-save_disabled",
  inputErrorClass: "popup__field_type-error",
  errorClass: "popup__error_visible",
};

export const initialCards = [
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
