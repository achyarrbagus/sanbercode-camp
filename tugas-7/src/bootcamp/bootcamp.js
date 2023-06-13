import { kelas } from "../kelas/kelas";
import { Student } from "../siswa/siswa";

export class Bootcamp {
  constructor(name) {
    this._name = name;
    this._kelas = [];
  }

  createClass(name, level, difficulty) {
    let cls = new kelas(name, level, difficulty);
    this._kelas.push(cls);
  }
  get Bootcamp() {
    let result = {
      name: this._name,
      student: Student.Student(),
      kelas: this._kelas,
    };
    return result;
  }
  get classes() {
    return this._kelas;
  }

  Register(className, studentName) {
    let dataClass = this._kelas.find((Element) => Element._name === className);
    dataClass._student.push(studentName);
    return dataClass;
  }
}
