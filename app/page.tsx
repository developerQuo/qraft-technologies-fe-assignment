import clsx from "clsx";
import ContentList from "./components/content/ContentList";
import Filter from "./components/Filter";

export default function Home() {
  return (
    <div className={clsx("h-screen w-[772px] mx-auto", "flex flex-col")}>
      <Filter />
      <ContentList />
    </div>
  );
}
