// Menghitung luas persegi panjang
let panjang = 5;
let lebar = 3;
let luasPersegiPanjang = panjang * lebar;
console.log("Luas Persegi Panjang: " + luasPersegiPanjang);

// Menghitung diameter, keliling, dan luas lingkaran
let jariJari = 5;
let diameterLingkaran = 2 * jariJari;
let kelilingLingkaran = 2 * Math.PI * jariJari;
let luasLingkaran = Math.PI * (jariJari * jariJari);
console.log("Diameter: " + diameterLingkaran);
console.log("Keliling: " + kelilingLingkaran.toFixed(4));
console.log("Luas: " + luasLingkaran.toFixed(3));

// Menghitung sudut ketiga segitiga
let sudut1 = 80;
let sudut2 = 65;
let sudutKetiga = 180 - (sudut1 + sudut2);
console.log("Sudut ketiga: " + sudutKetiga);

// Menghitung selisih hari antara dua tanggal
let tanggal1 = new Date("2024-03-19");
let tanggal2 = new Date("2024-03-21");
let selisihHari = Math.abs((tanggal2 - tanggal1) / (1000 * 60 * 60 * 24));
console.log("Selisih hari: " + selisihHari);

// Mengambil inisial dari nama
let nama = "John Doe";
let namaTerpisah = nama.split(" ");
let inisial = namaTerpisah[0][0].toUpperCase() + namaTerpisah[1][0].toUpperCase();
console.log("Inisial: " + inisial);
