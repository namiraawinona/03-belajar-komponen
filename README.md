# Laporan Praktikum - Belajar Komponen

## Soal 1

**Apa yang telah saya pelajari:**
Pada langkah ini, saya belajar tentang konsep dasar komponen pada React/Next.js. Saya memisahkan bagian antarmuka menjadi komponen mandiri (membuat file `profile.tsx` di dalam folder `components`), lalu mengimpor dan memanggil komponen tersebut berkali-kali di halaman utama (`page.tsx`). Hal ini membuat kode menjadi lebih rapi dan dapat digunakan ulang (*reusable*).

**Bagaimana cara menyelesaikan error gambar:**
Saat pertama kali dijalankan, muncul error `Invalid src prop` karena Next.js secara ketat membatasi pemuatan gambar dari sumber eksternal demi alasan keamanan dan optimasi. 
Untuk mengatasinya, saya mengedit file `next.config.ts` dan mendaftarkan domain penyedia gambar tersebut ke dalam daftar yang diizinkan (allowlist). Saya menambahkan konfigurasi `remotePatterns` dan memasukkan hostname `i.imgur.com`. Setelah server di-*restart*, gambar berhasil dimuat.

## Soal 2

**Apa yang telah saya pelajari:**
Pada praktikum ini, saya belajar melakukan *refactoring* dengan memindahkan logika pemanggilan komponen ke dalam komponen pembungkus ( *wrapper*). Saya membuat komponen `Gallery` yang memuat tiga komponen `Profile`, lalu memanggil `<Gallery />` di `page.tsx`. Ini membuat struktur kode di halaman utama menjadi jauh lebih bersih.
Selain itu, saya belajar tentang *Named Export* pada `export function Gallery()`, sehingga impornya memerlukan kurung kurawal `{ Gallery }`.

**Bagaimana tampilannya saat ini:**
Tampilan web masih memunculkan tiga foto profil Katherine Johnson di bawah judul. Namun, karena komponen `Gallery` dibungkus dengan `<div className="columns-3">`, ketiga foto tersebut kini terbagi rata ke dalam tiga kolom yang mengisi ruang layar, berbeda dengan susunan *flex* sebelumnya yang saling berdempetan.
## Soal 3

**Apa yang telah saya pelajari & Mengapa error terjadi:**
Pada soal ini, saya belajar tentang aturan ketat (strict rules) penulisan sintaks JSX yang berbeda dengan HTML biasa. Error pada kode awal terjadi karena tiga alasan utama yang langsung saya perbaiki:
1. **Multiple Root Elements:** JSX harus mengembalikan satu elemen tunggal. Solusinya, saya membungkus elemen `<div>` dan `<p>` menggunakan *Fragment* kosong `<> ... </>`.
2. **Atribut tidak camelCase:** Penggunaan atribut `class` menyebabkan error karena bentrok dengan keyword JavaScript. Saya mengubahnya menjadi `className`.
3. **Tag tidak ditutup sempurna:** Tag tunggal `<br>` harus ditulis dengan penutup mandiri menjadi `<br />`. Selain itu, penulisan tag bersarang yang tumpang tindih `<b><i>...</b></i>` telah diperbaiki susunannya menjadi `<b><i>...</i></b>`.
## Soal 4

**Apa yang telah saya pelajari & Mengapa error terjadi:**
Pada soal ini, saya belajar cara menyisipkan nilai JavaScript (variabel/objek) ke dalam JSX menggunakan kurung kurawal `{}`. 
Error pada kode asli terjadi karena kode mencoba merender seluruh objek `person` secara langsung di dalam tag `<h1>{person}'s Todos</h1>`. React tidak mengizinkan objek dirender langsung sebagai *child* dari elemen HTML.
**Solusinya:** Saya memperbaikinya dengan mengakses properti *string* spesifik dari objek tersebut menggunakan *dot notation*, yaitu mengubahnya menjadi `<h1>{person.name}'s Todos</h1>`.

Selain itu, saya juga belajar cara memberikan gaya (*styling*) dinamis pada elemen dengan memberikan objek `person.theme` pada atribut `style={person.theme}`.