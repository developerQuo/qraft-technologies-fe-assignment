"use client";

import clsx from "clsx";

import { useFilterStore } from "@/stores/filter-store";
import LabelWrapper from "../common/LabelWrapper";
import { useEffect, useRef, useState } from "react";

export default function KeywordInput() {
  const setKeyword = useFilterStore((state) => state.setKeyword);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (inputValue.length === 0) return;
    if (timerRef.current) clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      setKeyword(inputValue);
    }, 700);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [inputValue, setKeyword]);

  return (
    <LabelWrapper label="키워드" htmlFor="keyword">
      <input
        id="keyword"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className={clsx(
          "border-border-primary border-[0.5px] rounded-sm w-[120px] h-8 p-2 shadow",
          "font-medium text-xs"
        )}
      />
    </LabelWrapper>
  );
}
