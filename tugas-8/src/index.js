const fs = require("fs");
import { Office } from "./lib/register/controler.karyawant";

// jalankan readData
// console.log(readData());
const input = process.argv.slice(2);

if (input[0] == "register") {
  let name = input[1].split(",")[0];
  let password = input[1].split(",")[1];
  let role = input[1].split(",")[2];
  Office.Register(name, password, role);
} else if (input[0] == "login") {
  let name = input[1].split(",")[0];
  let password = input[1].split(",")[1];
  Office.Login(name, password);
} else if (input[0] == "addSiswa") {
  let student = input[1].split(",")[0];
  let trainer = input[1].split(",")[1];
  Office.AddSiswa(student, trainer);
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
