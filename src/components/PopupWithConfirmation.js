import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._formSelector = this._popupElement.querySelector(".popup__fields");
  }

  handleConfirm(submit) {
    this._submit = submit;
  }

  setEventListeners() {
    super.setEventListeners();
    this._formSelector.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._submit();
    });
  }
}
