class Student {
  constructor(name, kelas) {
    this.name = name;
    this.class = kelas;
  }

  get User() {
    return {
      name: this.name,
      class: this.class,
    };
  }
}

module.exports = Student;
