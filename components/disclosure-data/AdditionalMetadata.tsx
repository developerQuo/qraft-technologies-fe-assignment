import useQueryCategory from "@/hooks/useQueryCategory";
import { Exchange } from "@/constants/enums";
import { Data } from "@/types/disclosure";
import clsx from "clsx";

type InputProps = Pick<Data["analysisDetails"], "topicKor"> &
  Pick<Data["details"], "categoryId"> &
  Pick<Data, "exchange">;

export default function AdditionalMetadata({
  topicKor,
  categoryId,
  exchange,
}: InputProps) {
  const { data: categoryData } = useQueryCategory(exchange);

  const topicTag = topicKor
    .split(",")
    .slice(0, 3)
    .map((tag) => tag.trim());
  return (
    <div className="flex flex-col w-[396px]">
      <div className="p-1">
        <div className="flex gap-3">
          {topicTag.map((tag, index) => (
            <div
              key={index}
              className={clsx(
                "rounded-sm border-[0.5px] border-meta-tag shadow-xs py-[7px] px-4",
                "font-semibold text-[13px] text-meta-tag"
              )}
            >
              {tag}
            </div>
          ))}
        </div>

        <div
          className={clsx(
            "mt-3.5 bg-bg-primary",
            "rounded-[40px] px-[22px] py-1",
            "font-semibold text-xs text-primary text-center"
          )}
        >
          {
            categoryData?.find(
              (item) =>
                item.value ===
                (exchange === Exchange.SHENZHEN ? categoryId[0] : categoryId)
            )?.kor
          }
        </div>
      </div>
    </div>
  );
}
