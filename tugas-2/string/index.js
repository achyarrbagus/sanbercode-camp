// 1. Soal No. 1 (Membuat kalimat),
// Terdapat kumpulan variable dengan data string sebagai berikut
// var word = 'JavaScript';
// var second = 'is';
// var third = 'awesome';
// var fourth = 'and';
// var fifth = 'I';
// var sixth = 'love';
// var seventh = 'it!';
// Buatlah agar kata-kata di atas menjadi satu kalimat . Output:
// JavaScript is awesome and I love it!

var word = "JavaScript";
var second = "is";
var third = "awesome";
var fourth = "and";
var fifth = "I";
var sixth = "love";
var seventh = "it!";

var text = word + " " + second + " " + third + " " + fourth + " " + fifth + " " + sixth + " " + seventh;
console.log(text);

// 2. Soal No.2 Mengurai kalimat (Akses karakter dalam string),
// Terdapat satu kalimat seperti berikut:
var sentence = "I am going to be Node JS Developer";
console.log(sentence);

var exampleFirstWord = sentence[0];
var secondWord = sentence[2] + sentence[3];
var thirdWord = sentence[5] + sentence[6] + sentence[7] + sentence[8] + sentence[9];
var fourthWord = sentence[11] + sentence[12];
var fifthWord = sentence[14] + sentence[15];
var sixthWord = sentence[17] + sentence[18] + sentence[19] + sentence[20];
var seventhWord = sentence[22] + sentence[23];
var eighthWord =
  sentence[25] +
  sentence[26] +
  sentence[27] +
  sentence[28] +
  sentence[29] +
  sentence[30] +
  sentence[31] +
  sentence[32] +
  sentence[33];

console.log("First Word: " + exampleFirstWord);
console.log("Second Word: " + secondWord);
console.log("Third Word: " + thirdWord);
console.log("Fourth Word: " + fourthWord);
console.log("Fifth Word: " + fifthWord);
console.log("Sixth Word: " + sixthWord);
console.log("Seventh Word: " + seventhWord);
console.log("Eighth Word: " + eighthWord);

// 3.Soal No. 3 Mengurai Kalimat (Substring)
var sentence2 = "wow JavaScript is so cool";

var exampleFirstWord2 = sentence2.substring(0, 3);
var secondWord2 = sentence2.substring(4, 14);
var thirdWord2 = sentence2.substring(15, 18);
var fourthWord2 = sentence2.substring(18, 21);
var fifthWord2 = sentence2.substring(21, 25);

console.log("First Word: " + exampleFirstWord2);
console.log("Second Word: " + secondWord2);
console.log("Third Word: " + thirdWord2);
console.log("Fourth Word: " + fourthWord2);
console.log("Fifth Word: " + fifthWord2);

//3. Uraikan lah kalimat sentence2 di atas menjadi kata-kata penyusunnya. Output:
// First Word: wow
// Second Word: JavaScript
// Third Word: is
// Fourth Word: so
// Fifth Word: cool

var sentence3 = "wow JavaScript is so cool";

var exampleFirstWord3 = sentence3.substring(0, 3);
var secondWord3 = sentence3.substring(4, 14);
var thirdWord3 = sentence3.substring(15, 17);
var fourthWord3 = sentence3.substring(18, 20);
var fifthWord3 = sentence3.substring(21, 25);

var firstWordLength = exampleFirstWord3.length;
var secondWordLength = secondWord3.length;
var thirdWordLength = thirdWord3.length;
var fourthWordLength = fourthWord3.length;
var fifthWordLength = fifthWord3.length;
// lanjutkan buat variable lagi di bawah ini
console.log("First Word: " + exampleFirstWord3 + ", with length: " + firstWordLength);
console.log("Second Word: " + secondWord3 + ", with length: " + secondWordLength);
console.log("Third Word: " + thirdWord3 + ", with length: " + thirdWordLength);
console.log("Fourth Word: " + fourthWord3 + ", with length: " + fourthWordLength);
console.log("Fifth Word: " + fifthWord3 + ", with length: " + fifthWordLength);
// Output:
// First Word: wow, with length: 3
// Second Word: JavaScript, with length: 10
// Third Word: is, with length: 2
// Fourth Word: so, with length: 2
// Fifth Word: cool, with length: 4
