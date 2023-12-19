// Fungsi untuk menghitung luas lingkaran
function hitungLuasLingkaran(jariJari) {
    return Math.PI * Math.pow(jariJari, 2);
}

// Fungsi untuk menghitung keliling lingkaran
function hitungKelilingLingkaran(jariJari) {
    return 2 * Math.PI * jariJari;
}

// Meminta pengguna memasukkan jari-jari lingkaran
var jariJari = parseFloat(prompt("Masukkan jari-jari lingkaran:"));

// Memanggil fungsi untuk menghitung luas dan keliling
var luas = hitungLuasLingkaran(jariJari);
var keliling = hitungKelilingLingkaran(jariJari);

// Menampilkan hasil
console.log("Luas lingkaran dengan jari-jari " + jariJari + " adalah: " + luas.toFixed(2));
console.log("Keliling lingkaran dengan jari-jari " + jariJari + " adalah: " + keliling.toFixed(2));