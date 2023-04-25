export class Card {
  constructor(initialCards, placeTemplate, handleCardClick) {
    this._name = initialCards.name;
    this._link = initialCards.link;
    this._placeTemplate = placeTemplate;
    this._handleCardClick = handleCardClick;
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

  // _handleOpenPopup() {
  //   imageView.src = this._link;
  //   imageScale.classList.add("popup_opened");
  //   imageTitle.textContent = this._name;
  // }

  // _handleClosePopup() {
  //   imageView.src = "";
  //   imageScale.classList.remove("popup_opened");
  // }

  _setEventListeners() {
    this.likeCardButton.addEventListener("click", () => {
      this._handleCardLike();
    });

    this.removeCardButton.addEventListener("click", () => {
      this._handleCardRemove();
    });

    // this.placeImage.addEventListener("click", () => {
    //   this._handleOpenPopup();
    // });

    // imageClose.addEventListener("click", () => {
    //   this._handleClosePopup();
    // });

    this.placeImage.addEventListener("click", () => {
      this._handleCardClick(this._name, this._link);
    });
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
