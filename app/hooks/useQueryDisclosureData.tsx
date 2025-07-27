import { useFilterStore } from "@/stores/filter-store";
import { TQueryData } from "@/types/disclosure";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useMemo } from "react";

export default function useQueryDisclosureData() {
  const { exchange, keyword, startDate, endDate } = useFilterStore();

  const fetchUrl = useMemo(() => {
    const searchParams = new URLSearchParams();

    if (exchange) searchParams.set("exchange", exchange);
    if (keyword) searchParams.set("keyword", keyword);
    if (startDate) searchParams.set("startDate", startDate);
    if (endDate) searchParams.set("endDate", endDate);

    return `/api/disclosure?${searchParams.toString()}`;
  }, [exchange, keyword, startDate, endDate]);

  return useInfiniteQuery<TQueryData>({
    queryKey: ["disclosure", fetchUrl],
    queryFn: ({ pageParam }) =>
      fetch(fetchUrl + `&page=${pageParam}`).then((res) => res.json()),
    getNextPageParam: (lastPage) => {
      return lastPage.page.next !== -1 ? lastPage.page.next : undefined;
    },
    initialPageParam: 0,
    staleTime: 1000 * 60 * 5,
  });
}
