import clsx from "clsx";

// TODO: 카테고리 데이터로 태그 렌더링 & 반응형
// TODO: 카테고리 kor 바인딩
export default function AdditionalMetadata() {
  return (
    <div className="flex flex-col w-[396px]">
      <div className="p-1">
        <div className="flex gap-3">
          <div
            className={clsx(
              "rounded-sm border-[0.5px] border-meta-tag shadow-xs py-[7px] px-4",
              "font-semibold text-[13px] text-meta-tag"
            )}
          >
            주식 발행
          </div>
          <div
            className={clsx(
              "rounded-sm border-[0.5px] border-meta-tag shadow-xs py-[7px] px-4",
              "font-semibold text-[13px] text-meta-tag"
            )}
          >
            지분 인수
          </div>
          <div
            className={clsx(
              "rounded-sm border-[0.5px] border-meta-tag shadow-xs py-[7px] px-4",
              "font-semibold text-[13px] text-meta-tag"
            )}
          >
            현금 지급
          </div>
        </div>

        <div
          className={clsx(
            "mt-3.5 bg-bg-primary",
            "rounded-[40px] px-[22px] py-1",
            "font-semibold text-xs text-primary text-center"
          )}
        >
          일반 공시
        </div>
      </div>
    </div>
  );
}
