
document.getElementById("pesan").textContent = "Hello World";
console.log("Hello World");

// Meminta nama pengguna
const namaPengguna = prompt("Masukkan nama Anda:", "");

if (namaPengguna && namaPengguna.trim() !== "") {
    alert("Halo, " + namaPengguna + "!");
    document.getElementById("pesan").textContent =
        "Selamat datang, " + namaPengguna + ".";
} else if (namaPengguna !== null) {
    alert("Nama belum diisi.");
}

// Operasi dasar
function operasiDasar(a, b) {
    console.log("Penjumlahan:", a + b);
    console.log("Pengurangan:", a - b);
    console.log("Perkalian:", a * b);
    console.log("Pembagian:", b !== 0 ? a / b : "Tidak dapat dibagi nol");
    console.log("Modulus:", a % b);
}

operasiDasar(9, 4);

// Latihan status kelulusan sederhana
const inputNilai = prompt("Masukkan nilai (0–100):");

if (inputNilai !== null && inputNilai.trim() !== "") {
    const nilaiMahasiswa = Number(inputNilai);

    if (Number.isFinite(nilaiMahasiswa) &&
        nilaiMahasiswa >= 0 && nilaiMahasiswa <= 100) {
        alert(nilaiMahasiswa >= 60 ? "Lulus" : "Belum lulus");
    } else {
        alert("Input nilai tidak valid.");
    }
}

// Pilihan angka
const inputPilihan = prompt("Masukkan angka 1–5:");

switch (inputPilihan) {
    case "1": alert("Bilangan satu"); break;
    case "2": alert("Bilangan dua"); break;
    case "3": alert("Bilangan tiga"); break;
    case "4": alert("Bilangan empat"); break;
    case "5": alert("Bilangan lima"); break;
    case null: break;
    default: alert("Pilihan tidak tersedia");
}

// Mengubah warna latar
function ubahWarnaLatar(warna) {
    document.body.style.backgroundColor = warna;
}

// Kalkulator Nilai Mahasiswa
function hitungNilaiAkhir(tugas, uts, uas) {
    return tugas * 0.30 + uts * 0.30 + uas * 0.40;
}

function tentukanPredikat(nilai) {
    if (nilai >= 85) return "A";
    if (nilai >= 75) return "B";
    if (nilai >= 60) return "C";
    if (nilai >= 50) return "D";
    return "E";
}

function hitungKalkulator() {
    const tugas = document.getElementById("tugas").value;
    const uts = document.getElementById("uts").value;
    const uas = document.getElementById("uas").value;
    const hasil = document.getElementById("hasilNilai");

    if (tugas === "" || uts === "" || uas === "") {
        hasil.textContent = "Semua nilai harus diisi!";
        return;
    }

    const t = Number(tugas);
    const u = Number(uts);
    const a = Number(uas);

    if (![t, u, a].every(n =>
        Number.isFinite(n) && n >= 0 && n <= 100
    )) {
        hasil.textContent = "Nilai harus antara 0 sampai 100!";
        return;
    }

    const akhir = hitungNilaiAkhir(t, u, a);
    const predikat = tentukanPredikat(akhir);
    const status = akhir >= 60 ? "Lulus" : "Belum lulus";

    hasil.innerHTML =
        "Nilai Akhir: " + akhir.toFixed(2) +
        "<br>Predikat: " + predikat +
        "<br>Status: " + status;
}

// Pemeriksaan bilangan ganjil atau genap
function cekBilangan() {
    const input = document.getElementById("bilangan").value;
    const angka = Number(input);
    const hasil = document.getElementById("hasilBilangan");

    if (input.trim() === "" || !Number.isInteger(angka)) {
        hasil.textContent = "Masukkan bilangan bulat yang valid.";
    } else if (angka % 2 === 0) {
        hasil.textContent = "Bilangan genap";
    } else {
        hasil.textContent = "Bilangan ganjil";
    }
}

// Menghitung total menu makanan
const daftarMenu = document.querySelectorAll(".menu");

daftarMenu.forEach((item) => {
    item.addEventListener("change", hitungTotal);
});

function hitungTotal() {
    let total = 0;

    daftarMenu.forEach((item) => {
        if (item.checked) {
            total += Number(item.value);
        }
    });

    document.getElementById("total").textContent =
        total.toLocaleString("id-ID");
}
