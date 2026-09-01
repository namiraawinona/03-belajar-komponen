import { Gallery } from "../components/gallery";
import TodoList from "../components/todolist";
import MyGallery from "../components/mygallery";
import MyProfile from "../components/myprofile";

export default function Home() {
  return (
    <section>
      <h1 className="font-semibold text-slate-900 truncate pr-20 text-center">Ilmuwan yang luar biasa</h1>
      <hr />
      <Gallery />
      <hr />
      <TodoList />
      <hr style={{ margin: "20px 0" }} />
      <MyGallery />
      <hr style={{ margin: "20px 0" }} />
    </section>
  );
}