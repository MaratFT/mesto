let page = document.querySelector(".page");

let profileEditButton = page.querySelector(".profile__edit-button");

let closeButton = page.querySelector(".popup__close");

function clickCloseButton() {
  popup.classList.add("popup_disable");
}

closeButton.addEventListener("click", clickCloseButton);

let popup = page.querySelector(".popup");

function clickEditButton() {
  popup.classList.add("popup_opened");
  console.log("Открытие попапа");
}

profileEditButton.addEventListener("click", clickEditButton);

function clickCloseButton() {
  popup.classList.remove("popup_opened");
  console.log("Закрытие попапа");
  let a = page.querySelector(".profile__title").innerHTML;
  page.querySelector("#user-name-input").value = a;
  let b = page.querySelector(".profile__subtitle").innerHTML;
  page.querySelector("#about-me-input").value = b;
}

closeButton.addEventListener("click", clickCloseButton);

let buttonSave = page.querySelector(".popup__button-save");

function saveForm() {
  console.log("Кнопка сохранения работает");
  let a = page.querySelector("#user-name-input").value;
  console.log(a);
  page.querySelector(".profile__title").innerHTML = a;
  let b = page.querySelector("#about-me-input").value;
  console.log(b);
  page.querySelector(".profile__subtitle").innerHTML = b;
  popup.classList.remove("popup_opened");
  console.log("Сохранение и закрытие попапа");
}

buttonSave.addEventListener("click", saveForm);

let a = page.querySelector(".profile__title").innerHTML;

page.querySelector("#user-name-input").value = a;

let b = page.querySelector(".profile__subtitle").innerHTML;

page.querySelector("#about-me-input").value = b;

let formElement = page.querySelector(".popup__fields");
let nameInput = formElement.querySelector("#user-name-input");
let jobInput = formElement.querySelector("#about-me-input");

function handleFormSubmit(evt) {
  evt.preventDefault();

  page.querySelector("#user-name-input").value;
  page.querySelector("#about-me-input").value;

  page.querySelector(".profile__title").innerHTML;
  page.querySelector(".profile__subtitle").innerHTML;

  page.querySelector(".profile__title").innerHTML =
    page.querySelector("#user-name-input").value;
  page.querySelector(".profile__subtitle").innerHTML =
    page.querySelector("#about-me-input").value;
}

formElement.addEventListener("submit", handleFormSubmit);
