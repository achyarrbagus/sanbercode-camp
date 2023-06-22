// No. 1 Looping While
// 1.pada tugas ini kamu diminta untuk melakukan looping dalam
// JavaScript dengan menggunakan syntax while. Untuk membuat tantangan ini lebih
// menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan menghitung mundur.
// Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'."

let loopingPertama = 1;

while (loopingPertama <= 20) {
  if (loopingPertama == 1) {
    console.log("LOOPING PERTAMA");
    loopingPertama++;
  }
  console.log(`${loopingPertama} I love coding`);
  loopingPertama++;
}

let loopingKedua = 20;
while (loopingKedua >= 1) {
  if (loopingKedua == 20) {
    console.log("LOOPING KEDUA");
    loopingKedua--;
  }
  console.log(`${loopingKedua} I will become a mobile developer`);
  loopingKedua--;
}

// No. 2 Looping menggunakan for
//Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax for. Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk memenuhi syarat tertentu yaitu:

// SYARAT:
// A. Jika angka ganjil maka tampilkan Santai
// B. Jika angka genap maka tampilkan Berkualitas
// C. Jika angka yang sedang ditampilkan adalah kelipatan 3 DAN angka ganjil maka tampilkan I Love Coding.

for (let x = 1; x <= 20; x++) {
  if (x % 3 == 0) {
    console.log("I Love Coding.");
  } else if (x % 2 == 0) {
    console.log("Berkualitas");
  } else {
    console.log("Santai");
  }
}

// No. 3 Membuat Persegi Panjang #
// Pada soal ini Kamu diminta untuk membuat function makeRectangle yang menerima dua parameter panjang dan lebar. function tersebut akan menampilkan persegi dengan dimensi panjang x lebar dengan tanda pagar (#) dengan perulangan atau looping. Looping boleh menggunakan syntax apa pun (while, for, do while).

function makeRectangle(panjang, lebar) {
  // your code
  for (let x = 1; x <= lebar; x++) {
    let row = "";
    for (let y = 1; y <= panjang; y++) {
      row += "#";
    }
    console.log(row);
  }
}

// TEST CASE

makeRectangle(8, 4);

//2.Kali ini kamu diminta untuk membuat function makeLadder yang menerima sebuah parameter sisi. function akan menampilkan sebuah segitiga sama sisi dengan tanda pagar (#) dengan panjang sisi sesuai parameter yang diberikan . Looping boleh menggunakan syntax apa pun (while, for, do while).

function makeLadder(sisi) {
  // your code
  for (let i = 1; i <= sisi; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += "#";
    }
    console.log(row);
  }
}

// TEST CASE
makeLadder(7);

// Output:

// #
// ##
// ###
// ####
// #####
// ######
// #######
