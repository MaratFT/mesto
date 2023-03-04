let page = document.querySelector(".page");

let profileEditButton = page.querySelector(".profile__edit-button");

let form = page.querySelector(".form");

let closeButton = page.querySelector(".form__close");

function clickCloseButton() {
  form.classList.add("form_disable");
}

closeButton.addEventListener("click", clickCloseButton);

let popup = page.querySelector(".popup");

function clickEditButton() {
  popup.classList.add("popup_opened");
}

profileEditButton.addEventListener("click", clickEditButton);

function clickCloseButton() {
  popup.classList.remove("popup_opened");
}

closeButton.addEventListener("click", clickCloseButton);

let firstName = page.querySelector(".form__field");

let aboutMe = page.querySelector(".form__field");
