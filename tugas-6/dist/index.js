"use strict";

var _sapa = require("./lib/sapa");
var _convert = require("./lib/convert");
var _checkscore = require("./lib/checkscore");
var argumen = process.argv.slice(2);
if (argumen[0] == "sapa") {
  console.log((0, _sapa.sapa)(argumen[1]));
} else if (argumen[0] == "convert") {
  console.log((0, _convert.Convert)(argumen[1], argumen[2], argumen[3]));
} else if (argumen[0] == "checkScore") {
  console.log((0, _checkscore.checkScore)(String(argumen[1]).split(",")));
}