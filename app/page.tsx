import { Gallery } from "../components/gallery"; 
// Catatan: Jika di modul menggunakan "@/components/gallery" dan terjadi error merah, gunakan "../components/gallery" seperti baris di atas karena sebelumnya Anda tidak menggunakan folder 'src'.

export default function Home() {
  return (
    <main style={{ padding: "20px" }}>
      <h2>Ilmuwan yang luar biasa</h2>
      <Gallery />
    </main>
  );
}