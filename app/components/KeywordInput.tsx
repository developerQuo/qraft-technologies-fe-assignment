"use client";

import clsx from "clsx";
import LabelWrapper from "./LabelWrapper";
import { useFilterStore } from "@/stores/filter-store";

export default function KeywordInput() {
  const keyword = useFilterStore((state) => state.keyword);
  const setKeyword = useFilterStore((state) => state.setKeyword);
  return (
    <LabelWrapper label="키워드" htmlFor="keyword">
      <input
        id="keyword"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        className={clsx(
          "border-border-primary border-[0.5px] rounded-sm w-[120px] h-8 p-2 shadow",
          "font-medium text-xs"
        )}
      />
    </LabelWrapper>
  );
}
