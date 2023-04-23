export class FormValidator {
  constructor(validation, formElement) {
    this._validation = validation;
    this._formElement = formElement;
    this._inputList = Array.from(
      this._formElement.querySelectorAll(this._validation.inputSelector)
    );
    this._submitButton = this._formElement.querySelector(
      this._validation.submitButtonSelector
    );
  }

  _toggleButtonState() {
    const hasInvalidInput = this._inputList.some(
      (input) => !input.validity.valid
    );
    if (hasInvalidInput) {
      this._submitButton.classList.add(this._validation.inactiveButtonClass);
      this._submitButton.disabled = true;
    } else {
      this._submitButton.classList.remove(this._validation.inactiveButtonClass);
      this._submitButton.disabled = false;
    }
  }

  _showInputError(inputElement, errorMessage) {
    const errorElement = this._formElement.querySelector(
      `#${inputElement.id}-error`
    );
    inputElement.classList.add(this._validation.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._validation.errorClass);
  }

  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(
      `#${inputElement.id}-error`
    );
    inputElement.classList.remove(this._validation.inputErrorClass);
    errorElement.textContent = "";
    errorElement.classList.remove(this._validation.errorClass);
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _resetValidation(formElement, inputSelector, inputErrorClass, errorClass) {
    const inputList = Array.from(formElement.querySelectorAll(inputSelector));

    inputList.forEach((inputElement) => {
      hideInputError(formElement, inputElement, inputErrorClass, errorClass);
    });

    toggleButtonState(
      inputList,
      formElement.querySelector(".popup__button-save"),
      inactiveButtonClass
    );
  }

  _setEventListeners() {
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });

    this._toggleButtonState();
  }

  enableValidation() {
    this._setEventListeners();
  }
}
