"use strict";

var _bootcamp = require("./bootcamp/bootcamp");
var _siswa = require("./siswa/siswa");
var sanber = new _bootcamp.Bootcamp("sanbercode");
sanber.createClass("Laravel", "beginner", "abduh");
sanber.createClass("React", "beginner", "abdul");
var names = ["regi", "ahmad", "bondra", "iqbal", "putri", "rezky"];
names.map(function (nama, index) {
  var newStud = new _siswa.Student(nama);
  var kelas = sanber.classes[index % 2]._name;
  sanber.Register(kelas, newStud);
});

// console.log(sanber.Bootcamp, "ini sini");/

sanber.classes.forEach(function (kelas) {
  console.log(kelas);
});