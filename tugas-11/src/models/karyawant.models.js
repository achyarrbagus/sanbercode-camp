class Karyawant {
  constructor(name, password, role, isLogin) {
    this.name = name;
    this.password = password;
    this.role = role;
    this.isLogin = isLogin;
    if (role === "trainer") {
      this.students = [];
    }
  }

  get User() {
    return {
      name: this.name,
      password: this.password,
      role: this.role,
      isLogin: this.isLogin,
    };
  }
}

module.exports = Karyawant;
