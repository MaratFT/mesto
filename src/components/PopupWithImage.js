import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImageSelector =
      this._popupElement.querySelector(".popup__image-view");
    this._popupImageTitle = this._popupElement.querySelector(
      ".popup__image-title"
    );
  }
  open(name, link) {
    super.open();
    this._popupImageTitle.textContent = name;
    this._popupImageSelector.src = link;
    this._popupImageSelector.alt = name;
  }
}
