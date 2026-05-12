# Tugas JavaScript - Form Registrasi Interaktif

## Deskripsi Program
Program ini merupakan halaman web interaktif menggunakan HTML, CSS, dan JavaScript. Website ini memiliki fitur validasi form, manipulasi DOM, dan event handling sesuai materi yang dipelajari.



## 1. Validasi Form
Program melakukan pengecekan data input pengguna sebelum form berhasil dikirim.

Validasi yang digunakan:
- Nama tidak boleh kosong
- Email harus menggunakan format email yang valid
- Password minimal 8 karakter

Jika input salah, maka pesan error akan muncul di bawah field input.



## 2. Manipulasi DOM
Program menggunakan JavaScript untuk mengubah isi dan tampilan halaman secara dinamis.

Contoh manipulasi DOM:
- Mengubah teks judul menjadi “Registrasi Berhasil”
- Menampilkan pesan “Pendaftaran berhasil!”
- Mengubah warna teks hasil menjadi hijau
- Mengaktifkan mode gelap (dark mode)



## 3. Event Handling
Program menggunakan beberapa event JavaScript, yaitu:

- `keyup`
  Digunakan saat pengguna mengetik nama. Website akan langsung menampilkan preview teks “Halo, [nama user]”.

- `click`
  Digunakan pada tombol dark mode untuk mengubah tampilan halaman menjadi dark mode.

- `submit`
  Digunakan saat tombol daftar ditekan untuk menjalankan validasi form.



## 4. Tampilan UI/UX
Website dibuat dengan tampilan sederhana, rapi, responsif, dan mudah digunakan.



## 5. Struktur Program
Program dipisahkan menjadi 3 file utama:
- `index.html`
- `style.css`
- `script.js`