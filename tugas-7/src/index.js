import { Bootcamp } from "./bootcamp/bootcamp";
import { Student } from "./siswa/siswa";

const sanber = new Bootcamp("sanbercode");

sanber.createClass("Laravel", "beginner", "abduh");
sanber.createClass("React", "beginner", "abdul");

let names = ["regi", "ahmad", "bondra", "iqbal", "putri", "rezky"];
names.map((nama, index) => {
  let newStud = new Student(nama);
  let kelas = sanber.classes[index % 2]._name;
  sanber.Register(kelas, newStud);
});

// console.log(sanber.Bootcamp, "ini sini");/

sanber.classes.forEach((kelas) => {
  console.log(kelas);
});
