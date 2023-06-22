// console.log("Hello World");

class Car {
  constructor(brand, factory) {
    this.brand = brand;
    this.factory = factory;
  }
  Speed(id) {
    return `Mobil Merek ${this.brand} dengan id:${id} mampu berjalan dengan kecepatan seratus`;
  }
  set SetCarbrand(name) {
    this.brand = name;
  }
  get Carbrand() {
    return this.brand;
  }
  static Hello() {
    return `hello world`;
  }
}

let kijang = new Car("kijang", "bekasi");

// kijang.Carbrand("mio");
console.log(kijang.Carbrand);
kijang.SetCarbrand = "pajero";
console.log(kijang.Carbrand);

// console.log(kijang.Speed(10));

// console.log(kijang);

// var Car2 = class Car2 {
//   constructor(brand, factory) {
//     this.brand = brand;
//     this.factory = factory;
//   }
//   Spesifikasi() {
//     return `mobil dengan brand ${this.brand} dengan pabrikan ${this.factory} lebih cepat dibanding kan yang lain`;
//   }
//   static Hello() {
//     return "Hello!!";
//   }
// };

// let car3 = new Car2("kawasaki", "cikarang");

// console.log(Car2.hello());
