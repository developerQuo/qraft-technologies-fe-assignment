import { Content } from "@/types/content";
import { useQuery } from "@tanstack/react-query";
import Card from "./Card";
import { useFilterStore } from "@/stores/filter-store";
import { useMemo } from "react";

export default function ContentList() {
  const { exchange, keyword, startDate, endDate } = useFilterStore();
  const fetchUrl = useMemo(() => {
    const searchParams = new URLSearchParams();

    if (exchange) searchParams.set("exchange", exchange);
    if (keyword) searchParams.set("keyword", keyword);
    if (startDate) searchParams.set("startDate", startDate);
    if (endDate) searchParams.set("endDate", endDate);

    return `/api/contents?${searchParams.toString()}`;
  }, [exchange, keyword, startDate, endDate]);

  const { data } = useQuery<Content[]>({
    queryKey: ["contents", fetchUrl],
    queryFn: () => fetch(fetchUrl).then((res) => res.json()),
    staleTime: 1000 * 5,
  });

  return data?.length
    ? data.map((content) => <Card key={content.id} {...content} />)
    : null;
}
