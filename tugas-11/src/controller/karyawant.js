const path = "./src/data/data.json";
const { json } = require("express");
const KaryawantModel = require("../models/karyawant.models");
const StudentModel = require("../models/student.model");
const fs = require("fs");

const fsPromises = require("fs/promises");

class BootcampController {
  static Register(req, res) {
    fs.readFile(path, (err, data) => {
      if (err) {
        return res.status(400).json({
          error: err,
        });
      }

      let dataJson = JSON.parse(data);

      let { name, role, password } = req.body;

      let newUser = new KaryawantModel(name, password, role, false);

      dataJson.push({ ...newUser });
      let dataResp = [newUser];

      fsPromises
        .writeFile(path, JSON.stringify(dataJson))
        .then(() =>
          res.status(200).json({
            message: "Berhasil register",
            data: dataResp,
          })
        )
        .catch((err) =>
          res.status(400).json({
            message: "Register gagal",
            error: err,
          })
        );
    });
  }
  static GetAllUser(req, res) {
    fs.readFile(path, (err, data) => {
      if (err) {
        return res.status(400).json({
          error: err,
          message: "Gagal mendapat kan data karyawant",
        });
      }

      let dataJson = JSON.parse(data);
      console.log(dataJson, "ini data json");

      return res.status(200).json({
        message: "Berhasil get karyawan",
        data: dataJson,
      });
    });
  }

  static Login(req, res) {
    fs.readFile(path, (err, data) => {
      if (err) {
        return res.status(400).json({
          message: "User Not Found",
          error: err,
        });
      }
      let dataJson = JSON.parse(data);
      let { name, password } = req.body;
      const matchedUsers = dataJson.find((user) => user.name === name && user.password === password);
      if (!matchedUsers) {
        return res.status(404).json({
          message: "Username dan Password salah",
          error: new Error(),
        });
      }

      matchedUsers.isLogin = true;
      let index = dataJson.indexOf(matchedUsers);
      //
      dataJson.splice(index, 1);
      //
      dataJson.push(matchedUsers);
      console.log(dataJson, "setelah update");

      fsPromises
        .writeFile(path, JSON.stringify(dataJson))
        .then(() =>
          res.status(200).json({
            message: "Berhasil login",
            data: matchedUsers,
          })
        )
        .then((err) =>
          res.status(400).json({
            message: "Login gagal",
            error: err,
          })
        );
    });
  }

  static AddSiswa(req, res) {
    const trainerName = req.params.name;
    // Lakukan sesuatu dengan karyawanName
    let { name, kelas } = req.body;

    fs.readFile(path, (err, data) => {
      if (err) {
        return res.status(400).json({
          message: "gagal mendapatkan data user",
          error: err,
        });
      }

      let dataJson = JSON.parse(data);

      let newStudent = new StudentModel(name, kelas);

      let traineer = dataJson.find((item) => String(item.name).toLowerCase() === String(trainerName).toLowerCase());
      let admin = dataJson.find((item) => item.isLogin === true);

      traineer.students.push({ ...newStudent });

      let respStruct = [admin, traineer];
      console.log(respStruct, "ini respon");

      fsPromises
        .writeFile(path, JSON.stringify(dataJson))
        .then(() =>
          res.status(200).json({
            message: "Berhasil add siswa",
            data: respStruct,
          })
        )
        .catch((err) =>
          res.status(500).json({
            message: "terjadi kesalahan pada server",
            error: err,
          })
        );
    });
  }
}

module.exports = BootcampController;
