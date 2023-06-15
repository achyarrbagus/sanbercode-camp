export class KaryawantModel {
  constructor(name, password, role) {
    this._name = name;
    this._password = password;
    this._role = role;
    this._isLogin = "false";
    if (role === "trainer") {
      this._students = [];
    }
  }
  get Response() {
    return {
      name: this._name,
      password: this._password,
      role: this._role,
      isLogin: this._isLogin,
    };
  }
  set isLogin(value) {
    this._isLogin = value;
  }
  get isLogin() {
    return this._isLogin;
  }
}
