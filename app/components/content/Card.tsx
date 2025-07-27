import clsx from "clsx";

import RepresentativeMetadata from "./RepresentativeMetadata";
import AdditionalMetadata from "./AdditionalMetadata";
import { Content } from "@/types/content";

type InputProps = Content;

export default function Card({
  dataDate,
  korName,
  details,
  analysisDetails,
  exchange,
}: InputProps) {
  return (
    <div
      className={clsx(
        "px-5 py-3",
        "rounded-lg border-[0.5px] border-border-secondary"
      )}
    >
      <div className="flex justify-between px-5 py-3 items-center">
        <RepresentativeMetadata
          dataDate={dataDate}
          korName={korName}
          secCode={details.secCode}
          secName={details.secName}
          exchange={exchange}
        />
        <AdditionalMetadata
          topicKor={analysisDetails.topicKor}
          categoryId={details.categoryId}
          exchange={exchange}
        />
      </div>
      <div
        className={clsx(
          "mt-2.5 px-5 py-3",
          "font-medium text-lg text-text-primary"
        )}
      >
        <p>{analysisDetails.summarizeTinyKor}</p>
        <p className="mt-5">{analysisDetails.summarizeLongKor}</p>
      </div>
    </div>
  );
}
