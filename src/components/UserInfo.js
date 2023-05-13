export default class UserInfo {
  constructor({ nameUser, aboutUser, avatarUser }) {
    this._nameUser = document.querySelector(nameUser);
    this._aboutUser = document.querySelector(aboutUser);
    this._avatarUser = document.querySelector(avatarUser);
  }

  getUserInfo() {
    const userInfo = {
      name: this._nameUser.textContent,
      about: this._aboutUser.textContent,
    };
    return userInfo;
  }

  setUserInfo({ name, about, avatar, _id }) {
    this._nameUser.textContent = name;
    this._aboutUser.textContent = about;
    this._avatarUser.src = avatar;
    this._id = _id;
  }

  getUserId() {
    return this._id;
  }
}
