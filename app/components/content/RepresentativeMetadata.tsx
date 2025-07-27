import { Content } from "@/types/content";
import { getLocalDateTime } from "@/utils/date";

type InputProps = Pick<Content, "dataDate" | "korName" | "exchange"> &
  Pick<Content["details"], "secCode" | "secName">;

export default function RepresentativeMetadata({
  dataDate,
  korName,
  secCode,
  secName,
  exchange,
}: InputProps) {
  const { time, exchangeTime } = getLocalDateTime(dataDate, exchange);
  return (
    <div className="flex flex-col">
      <div className="py-3">
        <div className="text-text-secondary text-[11px] font-semibold">
          <div className="flex gap-2.5">
            <div className="w-12">공시일</div>
            <div>{time}</div>
          </div>
          <div className="flex gap-2.5">
            <div className="w-12">현지시간</div>
            <div>{exchangeTime}</div>
          </div>
        </div>
        <div className="mt-5 text-text-primary text-[13px]">
          <p className="font-semibold">{secCode}</p>
          <p>
            {korName} ({secName})
          </p>
        </div>
      </div>
    </div>
  );
}
