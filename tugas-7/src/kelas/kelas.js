export class kelas {
  constructor(name, difficulty, instructor) {
    this._name = name;
    this._student = [];
    this._level = difficulty;
    this._instructor = instructor;
  }

  get Name() {
    return this._name;
  }
  get Student() {
    return this._student;
  }
}
