import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor({ popupSelector, formSubmit }) {
    super(popupSelector);
    this._formSubmit = formSubmit;
    this._formSelector = this._popupSelector.querySelector(".popup__fields");
    this._inputSelectors = Array.from(
      this._popupSelector.querySelectorAll(".popup__field")
    );
  }

  _getInputValues() {
    this._formValues = {};

    this._inputSelectors.forEach(
      (input) => (this._formValues[input.name] = input.value)
    );

    return this._formValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._formSelector.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._formSubmit(this._getInputValues());
      this.close();
    });
  }

  close() {
    super.close();
    this._formSelector.reset();
  }
}
