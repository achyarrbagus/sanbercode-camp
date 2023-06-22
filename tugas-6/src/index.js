import { sapa } from "./lib/sapa";
import { Convert } from "./lib/convert";
import { checkScore } from "./lib/checkscore";
const argumen = process.argv.slice(2);

if (argumen[0] == "sapa") {
  console.log(sapa(argumen[1]));
} else if (argumen[0] == "convert") {
  console.log(Convert(argumen[1], argumen[2], argumen[3]));
} else if (argumen[0] == "checkScore") {
  console.log(checkScore(String(argumen[1]).split(",")));
}
