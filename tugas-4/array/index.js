// Soal No. 1 (Array Multidimensi)

// tampilankan menggunakan looping
// Tugas kamu adalah mengimplementasikan fungsi dataHandling() agar dapat menampilkan data-data pada dari argumen seperti di bawah ini

var input = [
  ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
  ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
  ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
  ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"],
];

const dataHandling = (input) => {
  return input.forEach((item, index) => {
    console.log("Nomor ID:", item[0]);
    console.log("Nama Lengkap:", item[1]);
    console.log("TTL :", item[2]);
    console.log("Hobi:", item[3]);
    console.log("---");
  });
};

console.log(dataHandling(input));

//Soal No. 2 (Balik Kata)
// Kamu telah mempelajari beberapa method yang dimiliki oleh String dan Array. String sebetulnya bersifat mirip sebuah array karena kita dapat mengakses karakter-karakter pada sebuah string layaknya mengakses elemen pada array.
// Buatlah sebuah function balikKata() yang menerima sebuah parameter berupa string dan mengembalikan kebalikan dari string tersebut.

// console.log("hello world".length);

const balikKata = (text) => {
  let result = "";
  let arrayText = Array.from(String(text));
  for (let x = String(text).length - 1; x >= 0; x--) {
    result += arrayText[x];
  }
  return String(result);
};

console.log(balikKata("SanberCode"));
console.log(balikKata("racecar"));
console.log(balikKata("kasur rusak"));
console.log(balikKata("haji ijah"));
console.log(balikKata("I am Sanbers"));
