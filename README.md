# Laporan Praktikum - Belajar Komponen

## Soal 1

**Apa yang telah saya pelajari:**
Pada langkah ini, saya belajar tentang konsep dasar komponen pada React/Next.js. Saya memisahkan bagian antarmuka menjadi komponen mandiri (membuat file `profile.tsx` di dalam folder `components`), lalu mengimpor dan memanggil komponen tersebut berkali-kali di halaman utama (`page.tsx`). Hal ini membuat kode menjadi lebih rapi dan dapat digunakan ulang (*reusable*).

**Bagaimana cara menyelesaikan error gambar:**
Saat pertama kali dijalankan, muncul error `Invalid src prop` karena Next.js secara ketat membatasi pemuatan gambar dari sumber eksternal demi alasan keamanan dan optimasi. 
Untuk mengatasinya, saya mengedit file `next.config.ts` dan mendaftarkan domain penyedia gambar tersebut ke dalam daftar yang diizinkan (allowlist). Saya menambahkan konfigurasi `remotePatterns` dan memasukkan hostname `i.imgur.com`. Setelah server di-*restart*, gambar berhasil dimuat.