import { Gallery } from "../components/gallery";
import Bio from "../components/bio";
import TodoList from "../components/todolist";

export default function Home() {
  return (
    <main style={{ padding: "20px" }}>
      <Bio />
      <hr style={{ margin: "20px 0" }} />
      <h2>Ilmuwan yang luar biasa</h2>
      <Gallery />
      <hr style={{ margin: "20px 0" }} />
      <TodoList />
    </main>
  );
}