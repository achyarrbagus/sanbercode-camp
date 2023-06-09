// Soal No. 1 (Array to Object)
// Buatlah function dengan nama arrayToObject() yang menerima sebuah parameter berupa array multidimensi. Dalam array tersebut berisi value berupa First Name, Last Name, Gender, dan Birthyear. Data di dalam array dimensi tersebut ingin kita ubah ke dalam bentuk Object dengan key bernama : firstName, lastName, gender, dan age. Untuk key age ambillah selisih tahun yang ditulis di data dengan tahun sekarang. Jika tahun tidak terdefinisi atau tahunnya lebih besar dibandingkan dengan tahun sekarang maka kembalikan nilai : "Invalid birth year".

// Contoh: jika input nya adalah [["Abduh", "Muhamad", "male", 1992], ["Ahmad", "Taufik", "male", 1985]]

// maka outputnya di console seperti berikut :

// 1. Abduh Muhamad : { firstName: "Abduh", lastName: "Muhamad", gender: "male", age: 28}
// 2. Ahmad Taufik : { firstName: "Ahmad", lastName: "Taufik", gender: "male", age: 35}

let input = [
  ["Abduh", "Muhamad", "male", 1992],
  ["Ahmad", "Taufik", "male", 1985],
];

const arrayToObject = (arrayInput) => {
  let date = new Date();
  let arrayResult = [];

  arrayInput.map((item, index) => {
    let fullName = `${index + 1}. ${item[0]} ${item[1]} :`;
    let objectResult = {
      firstName: item[0],
      lastName: item[1],
      gender: item[2],
      age: date.getFullYear() - item[3],
    };
    arrayResult.push(fullName, objectResult);
  });

  let finalResult = arrayResult.map((element) => element);

  return finalResult;
};

console.log(arrayToObject(input).forEach((element) => console.log(element)));

// Soal No. 2 (Naik Angkot)
// Problem
// Diberikan function naikAngkot(listPenumpang) yang akan menerima satu parameter berupa array dua dimensi. Function akan me-return array of object.
// Diberikan sebuah rute, dari A - F. Penumpang diwajibkan membayar Rp2000 setiap melewati satu rute.
// Contoh: input: [ ['Dimitri', 'B', 'F'] ] output: [{ penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 }]
let inputPenumpang = [
  ["Dimitri", "B", "F"],
  ["Icha", "A", "B"],
];

function naikAngkot(listPenumpang) {
  let arrayResult = [];
  listPenumpang.map((item, index) => {
    let objectResult = {
      Penumpang: item[0],
      naikDari: item[1],
      tujuan: item[2],
      bayar: totalTarif(item[1], item[2]),
    };
    arrayResult.push(objectResult);
  });
  return arrayResult;
}

function totalTarif(dari, tujuan) {
  let rute = ["A", "B", "C", "D", "E", "F"];
  let start = rute.indexOf(dari);
  let end = rute.indexOf(tujuan);
  let totalTarif = end > start ? (end - (start <= 0 ? 1 : start)) * 2000 : (start - (end <= 0 ? 1 : end)) * 2000;
  return totalTarif <= 0 ? 2000 : totalTarif;
}
console.log(naikAngkot(inputPenumpang));

// Soal No 3. Nilai Tertinggi
// Problem
// Buatlah sebuah function nilaiTertinggi yang menerima input berupa array of
//  object berisi data-data peserta sanbercode beserta nilai nya. function akan
//  mengembalikan sebuah object seperti berikut:

function nilaiTertinggi(siswa) {
  let sortData = siswa.sort((a, b) => b.score - a.score);
  sortData.forEach((item, index) => {
    console.log(item.class, {
      name: item.name,
      score: item.score,
    });
  });
}

console.log(
  nilaiTertinggi([
    {
      name: "Asep",
      score: 90,
      class: "adonis",
    },
    {
      name: "Ahmad",
      score: 85,
      class: "vuejs",
    },
    {
      name: "Regi",
      score: 74,
      class: "adonis",
    },
    {
      name: "Afrida",
      score: 78,
      class: "reactjs",
    },
  ])
);
