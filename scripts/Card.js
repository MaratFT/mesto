// const initialCards = [
//   {
//     name: "Архыз",
//     link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
//   },
//   {
//     name: "Челябинская область",
//     link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
//   },
//   {
//     name: "Иваново",
//     link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
//   },
//   {
//     name: "Камчатка",
//     link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
//   },
//   {
//     name: "Холмогорский район",
//     link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
//   },
//   {
//     name: "Байкал",
//     link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
//   },
// ];

export class Card {
  constructor(initialCards, placeTemplate) {
    this._name = initialCards.name;
    this._link = initialCards.link;
    this._placeTemplate = placeTemplate;
  }

  _getTemplate() {
    const placeElement = document
      .querySelector(this._placeTemplate)
      .content.querySelector(".place")
      .cloneNode(true);

    return placeElement;
  }

  _handleCardLike() {
    this.likeCardButton.classList.toggle("place__like_active");
  }

  _handleCardRemove() {
    this._element.remove();
  }

  _setEventListeners() {
    this.likeCardButton.addEventListener("click", () => {
      this._handleCardLike();
    });

    this.removeCardButton.addEventListener("click", () => {
      this._handleCardRemove();
    });

    this.placeImage.addEventListener("click", () => {});
  }

  generateCard() {
    this._element = this._getTemplate();
    this.placeImage = this._element.querySelector(".place__image");
    this.placeImage.src = this._link;
    this.placeImage.alt = this._name;
    this._element.querySelector(".place__title").textContent = this._name;
    this.likeCardButton = this._element.querySelector(".place__like");
    this.removeCardButton = this._element.querySelector(".place__remove");

    this._setEventListeners();

    return this._element;
  }
}
