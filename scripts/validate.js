enableValidation({
  formSelector: ".popup__fields",
  inputSelector: ".popup__field",
  submitButtonSelector: ".popup__button-save",
  inactiveButtonClass: "popup__button-save_disabled",
  inputErrorClass: "popup__field_type-error",
  errorClass: "popup__error_visible",
});

function enableValidation({
  formSelector,
  inputSelector,
  submitButtonSelector,
  inactiveButtonClass,
  inputErrorClass,
  errorClass,
}) {
  const formList = Array.from(document.querySelectorAll(formSelector));
  formList.forEach((formSelector) => {
    formSelector.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });
    setEventListeners(
      formSelector,
      inputSelector,
      submitButtonSelector,
      inactiveButtonClass,
      inputErrorClass,
      errorClass
    );
  });
}

function toggleButtonState(inputs, submitButton, inactiveButtonClass) {
  const hasInvalidInput = inputs.some((input) => !input.validity.valid);
  if (hasInvalidInput) {
    submitButton.classList.add(inactiveButtonClass);
    submitButton.disabled = true;
  } else {
    submitButton.classList.remove(inactiveButtonClass);
    submitButton.disabled = false;
  }
}

function showInputError(
  formSelector,
  inputSelector,
  errorMessage,
  inputErrorClass,
  errorClass
) {
  const errorElement = formSelector.querySelector(`#${inputSelector.id}-error`);
  inputSelector.classList.add(inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(errorClass);
}

function hideInputError(
  formSelector,
  inputSelector,
  inputErrorClass,
  errorClass
) {
  const errorElement = formSelector.querySelector(`#${inputSelector.id}-error`);
  inputSelector.classList.remove(inputErrorClass);
  errorElement.textContent = "";
  errorElement.classList.remove(errorClass);
}

function checkInputValidity(
  formSelector,
  inputSelector,
  inputErrorClass,
  errorClass
) {
  if (!inputSelector.validity.valid) {
    showInputError(
      formSelector,
      inputSelector,
      inputSelector.validationMessage,
      inputErrorClass,
      errorClass
    );
  } else {
    hideInputError(formSelector, inputSelector, inputErrorClass, errorClass);
  }
}

function resetValidation(
  formSelector,
  inputSelector,
  inputErrorClass,
  errorClass
) {
  const inputList = Array.from(formSelector.querySelectorAll(inputSelector));
  const errorList = Array.from(formSelector.querySelectorAll(`.${errorClass}`));

  inputList.forEach((inputSelector) => {
    hideInputError(formSelector, inputSelector, inputErrorClass, errorClass);
  });

  errorList.forEach((errorElement) => {
    errorElement.textContent = "";
    errorElement.classList.remove(errorClass);
  });

  toggleButtonState(inputList, submitButtonSelector, inactiveButtonClass);
}

function setEventListeners(
  formSelector,
  inputSelector,
  submitButtonSelector,
  inactiveButtonClass,
  inputErrorClass,
  errorClass
) {
  const inputList = Array.from(formSelector.querySelectorAll(inputSelector));
  const submitButton = formSelector.querySelector(submitButtonSelector);

  inputList.forEach((inputSelector) => {
    inputSelector.addEventListener("input", function () {
      checkInputValidity(
        formSelector,
        inputSelector,
        inputErrorClass,
        errorClass
      );
      toggleButtonState(inputList, submitButton, inactiveButtonClass);
    });
  });

  toggleButtonState(inputList, submitButton, inactiveButtonClass);
}
