import clsx from "clsx";
import ContentList from "./components/content/ContentList";
import Filter from "./components/Filter";

export default function Home() {
  return (
    <div className={clsx("h-screen w-[772px] mx-auto", "flex flex-col")}>
      <Filter />
      <div
        role="list"
        className={clsx(
          "mt-2.5 px-3.5 py-2.5 overflow-y-auto bg-white",
          "flex flex-col gap-2.5"
        )}
      >
        <ContentList />
      </div>
    </div>
  );
}
