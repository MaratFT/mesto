let page = document.querySelector(".page");

let profileEditButton = page.querySelector(".profile__edit-button");

let buttonClose = page.querySelector(".popup__close");

let popup = page.querySelector(".popup");

let titleCopy = page.querySelector(".profile__title");

let subtitleCopy = page.querySelector(".profile__subtitle");

let nameInput = page.querySelector("#user-name-input");

let aboutMeInput = page.querySelector("#about-me-input");

let formSave = page.querySelector(".popup__fields");

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

profileEditButton.addEventListener("click", clickEditButton);

buttonClose.addEventListener("click", clickCloseButton);

saveForm.addEventListener("submit", saveFormSubmit);
