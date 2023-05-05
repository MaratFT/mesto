export default class UserInfo {
  constructor({ nameUser, aboutUser }) {
    this._nameUser = document.querySelector(nameUser);
    this._aboutUser = document.querySelector(aboutUser);
  }
  getUserInfo() {
    const userInfo = {
      firstName: this._nameUser.textContent,
      aboutMe: this._aboutUser.textContent,
    };
    return userInfo;
  }

  setUserInfo({ firstName, aboutMe }) {
    this._nameUser.textContent = firstName;
    this._aboutUser.textContent = aboutMe;
  }
}
