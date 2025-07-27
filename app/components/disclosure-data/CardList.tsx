"use client";

import { TQueryData } from "@/types/disclosure";
import { useInfiniteQuery } from "@tanstack/react-query";
import Card from "./Card";
import { useFilterStore } from "@/stores/filter-store";
import { useEffect, useMemo, useRef } from "react";
import clsx from "clsx";

export default function CardList() {
  const { exchange, keyword, startDate, endDate } = useFilterStore();
  const fetchUrl = useMemo(() => {
    const searchParams = new URLSearchParams();

    if (exchange) searchParams.set("exchange", exchange);
    if (keyword) searchParams.set("keyword", keyword);
    if (startDate) searchParams.set("startDate", startDate);
    if (endDate) searchParams.set("endDate", endDate);

    return `/api/disclosure?${searchParams.toString()}`;
  }, [exchange, keyword, startDate, endDate]);

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery<TQueryData>({
      queryKey: ["disclosure", fetchUrl],
      queryFn: ({ pageParam }) =>
        fetch(fetchUrl + `&page=${pageParam}`).then((res) => res.json()),
      getNextPageParam: (lastPage) => {
        return lastPage.page.next !== -1 ? lastPage.page.next : undefined;
      },
      initialPageParam: 0,
      staleTime: 1000 * 60 * 5,
    });

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

  return (
    <>
      <div
        role="list"
        className={clsx(
          "mt-2.5 px-3.5 py-2.5 overflow-y-auto bg-white",
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
