"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkScore = void 0;
var checkScore = function checkScore(data) {
  var name = data[0].split(":")[1];
  var kelas = data[1].split(":")[1];
  var score = data[2].split(":")[1];
  return {
    name: name,
    kelas: kelas,
    score: score
  };
};
exports.checkScore = checkScore;