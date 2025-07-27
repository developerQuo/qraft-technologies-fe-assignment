"use client";

import Card from "./Card";
import { useEffect, useRef } from "react";
import clsx from "clsx";
import useQueryDisclosureData from "@/hooks/useQueryDisclosureData";
import Loading from "../Loading";
import Error from "../Error";
import NoData from "../NoData";

export default function CardList() {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } =
    useQueryDisclosureData();

  const observerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const currentObserver = observerRef.current;
    if (!currentObserver || !hasNextPage) return;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasNextPage) {
        fetchNextPage();
      }
    });

    observer.observe(currentObserver);

    return () => {
      if (currentObserver) observer.unobserve(currentObserver);
    };
  }, [fetchNextPage, hasNextPage]);

  if (status === "pending") return <Loading />;
  if (status === "error") return <Error />;
  if (data?.pages[0].items.length === 0) return <NoData />;

  return (
    <>
      <div
        role="list"
        className={clsx(
          "px-3.5 py-2.5 overflow-y-auto bg-white",
          "flex flex-col gap-2.5"
        )}
      >
        {data?.pages.map(({ items }) =>
          items.map((item) => <Card key={item.id} {...item} />)
        )}
        {hasNextPage && (
          <div
            ref={observerRef}
            className="py-4 text-center text-sm text-text-secondary"
          >
            {isFetchingNextPage && "로딩 중..."}
          </div>
        )}
      </div>
    </>
  );
}
