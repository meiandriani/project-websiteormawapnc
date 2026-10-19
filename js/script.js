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
const tombolBaca = document.getElementById("tombol-baca");
const teksTambahan = document.getElementById("teks-tambahan");

if (tombolBaca && teksTambahan) {
    tombolBaca.addEventListener("click", function () {
        teksTambahan.hidden = !teksTambahan.hidden;

        tombolBaca.textContent = teksTambahan.hidden
            ? "Baca Selengkapnya"
            : "Tutup";
    });
}

/*===BAGIAN MAHASISWA (Kegiatan)===*/

/*===BAGIAN MAHASISWA (Kontak dan Pendaftaran )===*/
