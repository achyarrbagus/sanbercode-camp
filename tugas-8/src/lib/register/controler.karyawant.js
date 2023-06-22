import { KaryawantModel } from "./karyawant";
import fs from "fs";
const fsPromises = require("fs").promises;
import { Student } from "./student";
import { error } from "console";

const path = "./src/lib/data/data.json";

export class Office {
  static Register(inputName, inputPassword, inputRole) {
    fs.readFile(path, (err, data) => {
      if (err) {
        console.log("failed to get data");
        return;
      }

      let dataJson = JSON.parse(data);
      let userData = new KaryawantModel(inputName, inputPassword, inputRole);
      if (!userData._name || !userData._password || !userData._role) {
        console.log("please enter the form correctly");
        return;
      }

      const existingData = dataJson.find((item) => item._name.toLowerCase() === userData._name.toLowerCase());
      if (existingData) {
        console.log("username is already in use");
        return;
      }

      dataJson.push(userData);
      fs.writeFile(path, JSON.stringify(dataJson), (err) => {
        if (err) {
          console.log("register failed");
          return;
        }
        console.log(userData.Response);
      });
    });
  }
  static Login(inputName, inputPassword) {
    fsPromises
      .readFile(path)
      .then((data) => {
        let dataJson = JSON.parse(data);
        const matchedUsers = dataJson.filter((user) => user._name === inputName && user._password === inputPassword);
        if (matchedUsers.length == 0) {
          throw new Error("User Not Found");
        }
        let index = dataJson.indexOf(matchedUsers[0]);
        dataJson.splice(index, 1);
        matchedUsers[0]._isLogin = true;
        dataJson.push(matchedUsers[0]);
        //update
        return dataJson;
      })
      .then((dataJson) => {
        fsPromises.writeFile(path, JSON.stringify(dataJson), (err) => {
          if (err) {
            console.log("failed login");
          }
        });
      })
      .catch((err) => console.log(err));
  }

  static async AddSiswa(inputStudent, inputTrainer) {
    try {
      let result = [];
      let data = JSON.parse(await fs.promises.readFile(path));
      let loginAdmin = data.find((item) => item._isLogin == true);
      let trainer = new KaryawantModel(inputTrainer, 123456, "trainer");
      // create student
      let student = new Student(inputStudent);
      trainer._students.push(student.Name);
      // //
      result.push(loginAdmin, trainer);

      data.push(result);
      //write new data
      await fs.promises.writeFile(path, JSON.stringify(data), (err) => {
        if (err) {
          throw new error();
        }
      });

      let Newdata = JSON.parse(await fs.promises.readFile(path));
      let lastData = Newdata[Newdata.length - 1];
      let Response = [
        {
          name: lastData[0]._name,
          password: lastData[0]._password,
          role: lastData[0]._role,
          isLogin: lastData[0]._isLogin,
        },
        {
          name: lastData[1]._name,
          password: lastData[1]._password,
          role: lastData[1]._role,
          isLogin: lastData[1]._isLogin,
          students: lastData[1]._students,
        },
      ];

      console.log(Response);
    } catch (error) {
      console.log(error);
    }
  }
}
