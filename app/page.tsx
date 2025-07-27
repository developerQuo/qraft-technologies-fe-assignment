import ContentList from "./components/content/ContentList";
import Filter from "./components/Filter";

// TODO: 스토리북 데이터 파싱 테스트 추가
// TODO: 데이터 파싱 테스트 추가
export default function Home() {
  return (
    <div className="min-h-screen w-[772px] mx-auto">
      <Filter />
      <ContentList />
    </div>
  );
}
