import Profile from "../components/profile";

export default function Home() {
  return (
    <main style={{ padding: "20px" }}>
      <h2>Ilmuwan yang luar biasa</h2>
      <div style={{ display: "flex" }}>
        <Profile />
        <Profile />
        <Profile />
      </div>
    </main>
  );
}