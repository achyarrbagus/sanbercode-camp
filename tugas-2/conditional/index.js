// If-else
// Petunjuk : Kita akan memasuki dunia game werewolf. Pada saat akan bermain kamu diminta memasukkan nama dan peran . Untuk memulai game pemain harus memasukkan variable nama dan peran. Jika pemain tidak memasukkan nama maka game akan mengeluarkan warning "Nama harus diisi!". Jika pemain memasukkan nama tapi tidak memasukkan peran maka game akan mengeluarkan warning "Pilih Peranmu untuk memulai game". Terdapat tiga peran yaitu penyihir, guard, dan werewolf. Tugas kamu adalah membuat program untuk mengecek input dari pemain dan hasil response dari game sesuai input yang dikirimkan.

// Petunjuk:

// Nama dan peran diisi manual dan bisa diisi apa saja
// Nama tidak perlu dicek persis sesuai dengan input/output
// Buat kondisi if-else untuk masing-masing peran
// Input:

// var nama = "John";
// var peran = "";

var nama = "Jenita";
var peran = "Werewolf";

if (!nama) {
  console.log("Nama harus diisi!");
  return;
} else if (nama && !peran) {
  console.log(`Halo ${nama}, Pilih peranmu untuk memulai game!`);
  return;
} else if (nama && peran == "Penyihir") {
  console.log(`Selamat datang di Dunia Werewolf, ${nama}`);
  console.log(`Halo ${peran} ${nama}, kamu dapat melihat siapa yang menjadi werewolf!`);
  return;
} else if (nama && peran == "Guard") {
  console.log(`Selamat datang di Dunia Werewolf, ${nama}`);

  console.log(`Halo Guard ${nama}, kamu akan membantu melindungi temanmu dari serangan werewolf.`);
  return;
} else if (nama && peran == "Werewolf") {
  console.log(`Selamat datang di Dunia Werewolf, ${nama}`);
  console.log(`Halo Werewolf ${nama}, Kamu akan memakan mangsa setiap malam!`);
  return;
}

// Switch Case
// Kamu akan diberikan sebuah tanggal dalam tiga variabel, yaitu hari, bulan, dan tahun. Disini kamu diminta untuk membuat format tanggal. Misal tanggal yang diberikan adalah hari 1, bulan 5, dan tahun 1945. Maka, output yang harus kamu proses adalah menjadi 1 Mei 1945.

// Gunakan switch case untuk kasus ini!

// Contoh:

// var hari = 21;
// var bulan = 1;
// var tahun = 1945;
//  Maka hasil yang akan tampil di console adalah: '21 Januari 1945';

var hari = 21;
var bulan = 5;
var tahun = 1945;

switch (bulan) {
  case 1: {
    console.log(`${hari} Januari ${tahun}`);
    break;
  }
  case 2: {
    console.log(`${hari} februari ${tahun}`);
    break;
  }
  case 3: {
    console.log(`${hari} maret ${tahun}`);
    break;
  }
  case 4: {
    console.log(`${hari} april ${tahun}`);
    break;
  }
  case 5: {
    console.log(`${hari} mei ${tahun}`);
    break;
  }
  case 6: {
    console.log(`${hari} juni ${tahun}`);
    break;
  }
  case 7: {
    console.log(`${hari} juli ${tahun}`);
    break;
  }
  case 8: {
    console.log(`${hari} agustus ${tahun}`);
    break;
  }
  case 9: {
    console.log(`${hari} september ${tahun}`);
    break;
  }
  case 10: {
    console.log(`${hari} oktober ${tahun}`);
    break;
  }
  case 11: {
    console.log(`${hari} november ${tahun}`);
    break;
  }
  case 12: {
    console.log(`${hari} desember ${tahun}`);
    break;
  }
}
