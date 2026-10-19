//===BAGIAN UMUM: mode gelap (dipakai semua halaman)===
const tombolTema = document.getElementById("tombol-tema");

if (tombolTema) {
    tombolTema.addEventListener("click", function () {
        document.body.classList.toggle("gelap");

        if (document.body.classList.contains("gelap")) {
            tombolTema.textContent = "Mode Terang";
        } else {
            tombolTema.textContent = "Mode Gelap";
        }
    });
}

/*===BAGIAN MAHASISWA (Beranda)===*/

/*===BAGIAN MAHASISWA (Profil)===*/

/*===BAGIAN MAHASISWA (Kegiatan)===*/

/*===BAGIAN MAHASISWA (Kontak dan Pendaftaran )===*/

/* =====================================
   VALIDASI FORMULIR PENDAFTARAN ORMAWA
===================================== */

// Mengambil elemen HTML
const form = document.getElementById("formOrmawa");
const pesan = document.getElementById("pesan-validasi");
const hasil = document.getElementById("hasil-pendaftaran");
const tombolKembali = document.getElementById("tombol-kembali");

// Memastikan kode formulir hanya berjalan
// pada halaman yang memiliki formOrmawa
if (form && pesan && hasil && tombolKembali) {

    // Ketika formulir dikirim
    form.addEventListener("submit", function(event) {

        // Mencegah halaman dimuat ulang
        event.preventDefault();

        // Mengambil data formulir
        const nama = document.getElementById("nama").value.trim();
        const nim = document.getElementById("nim").value.trim();
        const prodi = document.getElementById("prodi").value;
        const organisasi = document.getElementById("organisasi").value;

        // Memeriksa apakah semua kolom terisi
        if (
            nama === "" ||
            nim === "" ||
            prodi === "" ||
            organisasi === ""
        ) {
            pesan.textContent = "Semua kolom wajib diisi!";
            pesan.style.color = "red";
            return;
        }

        // Memeriksa NIM hanya berisi angka
        if (!/^[0-9]+$/.test(nim)) {
            pesan.textContent = "NIM harus berupa angka!";
            pesan.style.color = "red";
            return;
        }

        // Menampilkan data pada ringkasan
        document.getElementById("hasil-nama").textContent = nama;
        document.getElementById("hasil-nim").textContent = nim;
        document.getElementById("hasil-prodi").textContent = prodi;
        document.getElementById("hasil-organisasi").textContent = organisasi;

        // Menampilkan pesan berhasil
        pesan.textContent = "Data berhasil divalidasi!";
        pesan.style.color = "green";

        // Menampilkan ringkasan pendaftaran
        hasil.hidden = false;

        // Mengarahkan tampilan ke ringkasan
        hasil.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });

    // Tombol kembali ke formulir
    tombolKembali.addEventListener("click", function() {

        // Menyembunyikan ringkasan
        hasil.hidden = true;

        // Mengosongkan formulir
        form.reset();

        // Menghapus pesan validasi
        pesan.textContent = "";

        // Mengarahkan tampilan ke formulir
        form.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
}


