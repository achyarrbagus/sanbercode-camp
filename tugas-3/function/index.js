//1.Tulislah sebuah function dengan nama teriak() yang mengembalikan nilai "Halo Sanbers!" yang kemudian dapat ditampilkan di console.

function teriak() {
  return "Halo Sanbers!";
}

// TEST CASE
console.log(teriak()); // "Halo Sanbers!"

//2. Tulislah sebuah function dengan nama kalikan() yang mengembalikan hasil perkalian dua parameter

function kalikan(num1, num2) {
  return num1 * num2;
}

console.log(kalikan(4, 12)); // 48

// 2.Tulislah sebuah function dengan nama introduce() yang memproses paramater yang dikirim menjadi sebuah kalimat perkenalan seperti berikut: "Nama saya [name], umur saya [age] tahun, alamat saya di [address], dan saya punya hobby yaitu [hobby]!"

function introduce(name, age, address, hobby) {
  let result = `Nama saya ${name}, umur saya ${age} tahun, alamat saya di ${address} dan saya punya hobby yaitu ${hobby}!`;
  return result;
}

// TEST CASES
console.log(introduce("Agus", 30, "Jogja", "Gaming"));
// Menampilkan
