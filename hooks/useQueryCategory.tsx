import { Exchange } from "@/constants/enums";
import { Category } from "@/types/category";
import { useQuery } from "@tanstack/react-query";

export default function useQueryCategory(
  exchange: Exchange.HONGKONG | Exchange.SHENZHEN
) {
  return useQuery<Category[]>({
    queryKey: ["category", exchange],
    queryFn: () =>
      fetch(`/api/category?exchange=${exchange}`).then((res) => res.json()),
    staleTime: 1000 * 60 * 60 * 24,
  });
}
