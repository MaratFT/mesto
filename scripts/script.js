let page = document.querySelector(".page");

let profileEditButton = page.querySelector(".profile__edit-button");

let buttonClose = page.querySelector(".popup__close");

let popup = page.querySelector(".popup");

let titleCopy = page.querySelector(".profile__title");

let subtitleCopy = page.querySelector(".profile__subtitle");

let nameInput = page.querySelector("#user-name-input");

let aboutMeInput = page.querySelector("#about-me-input");

let formSave = page.querySelector(".popup__fields");

const place = page.querySelector(".places");

const popupAdd = page.querySelector(".popup_add");

const profileAddButton = page.querySelector(".profile__add-button");

const profileCloseButton = page.querySelector(".popup__closeAdd");

const nameImageInput = page.querySelector("#image-name-input");

const imageInput = page.querySelector("#image-input");

const fieldsImage = page.querySelector(".popup__fieldsImage");

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

function clickEditButton() {
  popup.classList.add("popup_opened");
  nameInput.value = titleCopy.textContent;
  aboutMeInput.value = subtitleCopy.textContent;
}

function saveFormSubmit(evt) {
  evt.preventDefault();
  titleCopy.textContent = nameInput.value;
  subtitleCopy.textContent = aboutMeInput.value;
  clickCloseButton();
}

function clickCloseButton() {
  popup.classList.remove("popup_opened");
}

function clickAddButton() {
  popupAdd.classList.add("popup_opened");
}

function clickCloseButtonAdd() {
  popupAdd.classList.remove("popup_opened");
}

function addImage(url) {
  let placeTemplate = page
    .querySelector("#place-template")
    .content.cloneNode(true);
  let placeElement = placeTemplate.querySelector(".place");
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
  clickCloseButtonAdd();
}

profileEditButton.addEventListener("click", clickEditButton);

profileAddButton.addEventListener("click", clickAddButton);

buttonClose.addEventListener("click", clickCloseButton);

profileCloseButton.addEventListener("click", clickCloseButtonAdd);

formSave.addEventListener("submit", saveFormSubmit);

place.querySelector(".place__like").addEventListener("click", function (evt) {
  evt.target.classList.toggle("place__like_active");
});
fieldsImage.addEventListener("submit", creatImageSubmit);
