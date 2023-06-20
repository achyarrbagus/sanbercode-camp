const express = require("express");
let router = express.Router();
const BootcampController = require("../src/controller/karyawant");

// Karyawant Router
router.post("/register", BootcampController.Register);
router.get("/karyawan", BootcampController.GetAllUser);
router.post("/login", BootcampController.Login);
router.post("/karyawan/:name/siswa", BootcampController.AddSiswa);

module.exports = router;
