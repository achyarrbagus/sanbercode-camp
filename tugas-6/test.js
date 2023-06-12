import text from "./src/lib";

console.log("hello world");
let scores = ["98", "95", "93", "90", "87", "85"];
let [first, ...restOfScores] = scores;

//
console.log(first); // 98
console.log(second); // 95
console.log(restOfScores); // [90, 87, 85]

console.log(text);
