import clsx from "clsx";
import CardList from "./components/disclosure-data/CardList";
import Filter from "./components/Filter";

export default function Home() {
  return (
    <div className={clsx("h-screen w-[772px] mx-auto", "flex flex-col")}>
      <Filter />
      <CardList />
    </div>
  );
}
