const page = document.querySelector(".page");

const profileEditButton = page.querySelector(".profile__edit-button");

const buttonClose = page.querySelector(".popup__close");

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

const placeImage = page.querySelector(".place__image");

const imageScale = page.querySelector(".popup_image-scale");

const imageView = page.querySelector(".popup__image-view");

const imageTitle = page.querySelector(".popup__image-title");

const imageClose = page.querySelector(".popup__close-image");

const popup = document.querySelectorAll(".popup");

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
}

function openPopup(popup) {
  popup.classList.add("popup_opened");
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
/*
function clickCloseButton() {
  profilePopup.classList.remove("popup_opened");
}
*/
/*
function clickAddButton() {
  popupAdd.classList.add("popup_opened");
}
*/
/*
function clickCloseButtonAdd() {
  popupAdd.classList.remove("popup_opened");
}
*/

function addImage(url) {
  const placeTemplate = page
    .querySelector("#place-template")
    .content.cloneNode(true);
  const placeElement = placeTemplate.querySelector(".place");
  placeElement.querySelector(".place__image").setAttribute("src", url.link);
  placeElement.querySelector(".place__image").setAttribute("alt", url.name);
  placeTemplate.querySelector(".place__title").textContent = url.name;

  return placeTemplate;
}

function addImageTrue(url, place) {
  const placeTemplate = addImage(url);
  place.prepend(placeTemplate);
}

initialCards.forEach((url) => {
  const placeElement = addImage(url);
  place.append(placeElement);
});

function creatImageSubmit(evt) {
  evt.preventDefault();
  const placeTitleValue = nameImageInput.value;
  const placeImageInput = imageInput.value;

  const newImage = {
    name: placeTitleValue,
    link: placeImageInput,
  };
  addImageTrue(newImage, place);

  fieldsImage.reset();
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

function clickImageScale() {
  imageScale.classList.add("popup_opened");
}

function closeImageView() {
  imageScale.classList.remove("popup_opened");
}

place.addEventListener("click", function (evt) {
  if (evt.target.classList.contains("place__like")) {
    evt.target.classList.toggle("place__like_active");
  }
});

place.addEventListener("click", function (evt) {
  if (evt.target.classList.contains("place__remove")) {
    evt.target.closest(".place").remove();
  }
});

place.addEventListener("click", function (evt) {
  if (evt.target.classList.contains("place__image")) {
    const placeTitle = evt.target
      .closest(".place")
      .querySelector(".place__title").textContent;
    const placeName = evt.target.getAttribute("alt");
    imageView.setAttribute("src", evt.target.src);
    imageView.setAttribute("alt", placeName);
    imageTitle.textContent = placeTitle;
    openPopup(imageScale);
  }
});

popup.forEach((popup) => {
  popup.addEventListener("click", (event) => {
    if (event.target === popup) {
      popup.classList.remove("popup_opened");
    }
  });
});

function openPopup(popupElement) {
  popupElement.classList.add("popup_opened");
  document.addEventListener("keydown", handleEscapeKey);
}

function closePopup(popupElement) {
  popupElement.classList.remove("popup_opened");
  document.removeEventListener("keydown", handleEscapeKey);
}

function handleEscapeKey(evt) {
  if (evt.key === "Escape") {
    const popupOpened = document.querySelector(".popup_opened");
    if (popupOpened) {
      closePopup(popupOpened);
    }
  }
}
