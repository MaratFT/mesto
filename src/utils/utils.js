// export function closePopup(popup) {
//   popup.classList.remove("popup_opened");
//   document.removeEventListener("keydown", handleEscapeKey);
// }

// export function openPopup(popup) {
//   popup.classList.add("popup_opened");
//   document.addEventListener("keydown", handleEscapeKey);
// }

// export function clickEditButton() {
//   openPopup(profilePopup);
//   nameInput.value = titleCopy.textContent;
//   aboutMeInput.value = subtitleCopy.textContent;
// }

// export function saveFormSubmit(evt) {
//   evt.preventDefault();
//   titleCopy.textContent = nameInput.value;
//   subtitleCopy.textContent = aboutMeInput.value;
//   closePopup(profilePopup);
// }

// export function creatImageSubmit(evt) {
//   evt.preventDefault();
//   const placeTitleValue = nameImageInput.value;
//   const placeImageInput = imageInput.value;

//   const newImage = {
//     name: placeTitleValue,
//     link: placeImageInput,
//   };

//   fieldsImage.reset();

//   place.prepend(createCard(newImage));

//   closePopup(popupAdd);
//   newCardFormValidator.resetValidation();
// }

// export function handleEscapeKey(evt) {
//   if (evt.key === "Escape") {
//     const popupOpened = document.querySelector(".popup_opened");
//     if (popupOpened) {
//       closePopup(popupOpened);
//     }
//   }
// }

// export function createCard(item) {
//   const card = new Card(item, "#place-template", handleCardClick);
//   const cardElement = card.generateCard();
//   return cardElement;
// }

// export function handleCardClick(name, link) {
//   imageView.src = link;
//   imageView.alt = name;
//   imageTitle.textContent = name;
//   openPopup(imageScale);
// }
