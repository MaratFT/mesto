import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor({ popupSelector, formSubmit }) {
    super(popupSelector);
    this._formSubmit = formSubmit;
    this._formSelector = this._popupElement.querySelector(".popup__fields");
    this._inputSelectors = Array.from(
      this._popupElement.querySelectorAll(".popup__field")
    );
    this._saveButton = this._formSelector.querySelector(".popup__button-save");
    this._saveButtonTextContent = this._saveButton.textContent;
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
      // this.close();
    });
  }

  close() {
    super.close();
    this._formSelector.reset();
  }

  renderSave(loading) {
    if (loading) {
      this._saveButton.textContent = `Cохранение...`;
    } else {
      this._saveButton.textContent = this._saveButtonTextContent;
    }
  }
}
