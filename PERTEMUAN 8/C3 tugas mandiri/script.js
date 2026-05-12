// Mengambil elemen HTML
const form = document.getElementById("formRegister");

const nama = document.getElementById("nama");
const email = document.getElementById("email");
const password = document.getElementById("password");

const errorNama = document.getElementById("errorNama");
const errorEmail = document.getElementById("errorEmail");
const errorPassword = document.getElementById("errorPassword");

const hasil = document.getElementById("hasil");

const previewNama = document.getElementById("previewNama");

const btnDarkMode = document.getElementById("btnDarkMode");

const judul = document.getElementById("judul");


// ==========================
// EVENT KEYUP
// ==========================

// Saat user mengetik nama
nama.addEventListener("keyup", function () {

    previewNama.textContent =
        "Halo, " + nama.value;

});


// ==========================
// EVENT CLICK DARK MODE
// ==========================

btnDarkMode.addEventListener("click", function () {

    // Manipulasi DOM -> ubah style
    document.body.classList.toggle("dark");

});


// ==========================
// VALIDASI FORM
// ==========================

form.addEventListener("submit", function (event) {

    // Mencegah form reload
    event.preventDefault();

    // Reset error
    errorNama.textContent = "";
    errorEmail.textContent = "";
    errorPassword.textContent = "";
    hasil.textContent = "";

    // Variable validasi
    let valid = true;

    // VALIDASI NAMA
    if (nama.value.trim() === "") {

        errorNama.textContent =
            "Nama wajib diisi";

        valid = false;
    }

    // VALIDASI EMAIL
    const formatEmail =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.value.trim() === "") {

        errorEmail.textContent =
            "Email wajib diisi";

        valid = false;

    } else if (
        !formatEmail.test(email.value)
    ) {

        errorEmail.textContent =
            "Format email tidak valid";

        valid = false;
    }

    // VALIDASI PASSWORD
    if (password.value.length < 8) {

        errorPassword.textContent =
            "Password minimal 8 karakter";

        valid = false;
    }

    // Jika semua valid
    if (valid) {

        // Manipulasi DOM -> ubah teks
        hasil.textContent =
            "Pendaftaran berhasil!";

        // Manipulasi DOM -> ubah style
        hasil.style.color = "green";

        judul.textContent =
            "Registrasi Berhasil";
    }

});