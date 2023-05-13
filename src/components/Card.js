export default class Card {
  constructor(
    { info, handleCardClick, handleDeleteCard, handleLikeNumber, idUser },
    placeTemplate
  ) {
    this._name = info.name;
    this._link = info.link;
    this._placeTemplate = placeTemplate;
    this._handleCardClick = handleCardClick;
    this._likes = info.likes;
    this._id = info._id;
    this._owner = info.owner._id;
    this._idUser = idUser;
    this._handleDeleteCard = handleDeleteCard;
    this._handleLikeNumber = handleLikeNumber;
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

  handleCardRemove() {
    this._element.remove();
    this._element = null;
  }

  _setEventListeners() {
    this.likeCardButton.addEventListener("click", () => {
      this._handleLikeNumber();
    });

    this.removeCardButton.addEventListener("click", () => {
      this._handleDeleteCard();
    });

    this.placeImage.addEventListener("click", () => {
      this._handleCardClick(this._name, this._link);
    });
  }

  getId() {
    return this._id;
  }

  _checkLike() {
    return this._likes.some((like) => like._id === this._idUser);
  }
  _changeLikeState = () => {
    this._likeScore.textContent = this._likes.length;
    if (this._checkLike()) {
      this.likeOn();
    } else {
      this.likeDisabled();
    }
  };

  likeOn() {
    this.likeCardButton.classList.add("place__like_active");
    this.isLiked = true;
  }
  likeDisabled() {
    this.likeCardButton.classList.remove("place__like_active");
    this.isLiked = false;
  }

  setLikesNumber(item) {
    this._likeScore.textContent = item.likes.length;
  }

  generateCard() {
    this._element = this._getTemplate();
    this.placeImage = this._element.querySelector(".place__image");
    this.placeImage.src = this._link;
    this.placeImage.alt = this._name;
    this._element.querySelector(".place__title").textContent = this._name;
    this.likeCardButton = this._element.querySelector(".place__like");
    this.removeCardButton = this._element.querySelector(".place__remove");
    this._likeScore = this._element.querySelector(".place__like-number");

    this._changeLikeState();

    if (this._owner !== this._idUser) {
      this.removeCardButton.remove();
    }

    this._setEventListeners();

    return this._element;
  }
}
