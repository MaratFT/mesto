export default class UserInfo {
  constructor({ nameUser, aboutUser }) {
    this._nameUser = document.querySelector(nameUser);
    this._aboutUser = document.querySelector(aboutUser);
  }
  getUserInfo() {
    const userInfo = {
      name: this._nameUser.textContent,
      aboutMe: this._aboutUser.textContent,
    };
    return userInfo;
  }

  setUserInfo({ name, aboutMe }) {
    this._nameUser.textContent = name;
    this._aboutUser.textContent = aboutMe;
  }
}
