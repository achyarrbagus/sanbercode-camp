"use strict";

var _controler = require("./lib/register/controler.karyawant");
var fs = require("fs");
// jalankan readData
// console.log(readData());
var input = process.argv.slice(2);
if (input[0] == "register") {
  var name = input[1].split(",")[0];
  var password = input[1].split(",")[1];
  var role = input[1].split(",")[2];
  _controler.Office.Register(name, password, role);
} else if (input[0] == "login") {
  var _name = input[1].split(",")[0];
  var _password = input[1].split(",")[1];
  _controler.Office.Login(_name, _password);
} else if (input[0] == "addSiswa") {
  var student = input[1].split(",")[0];
  var trainer = input[1].split(",")[1];
  _controler.Office.AddSiswa(student, trainer);
}

// const fecthData = async () => {
//   try {
//     const data = await fs.readFileSync("./src/lib/data/data.json", "utf8");
//     const objekJs = JSON.parse(data);
//     console.log(objekJs);
//     return objekJs;
//   } catch (error) {
//     console.log(error);
//   }
// };

// fecthData();

// console.log(input);