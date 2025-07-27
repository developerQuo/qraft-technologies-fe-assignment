"use client";

import clsx from "clsx";
import LabelWrapper from "../common/LabelWrapper";
import { exchangeOptions } from "../../constants/options";
import { useFilterStore } from "@/stores/filter-store";
import { Exchange } from "@/constants/enums";

export default function ExchangeSelector() {
  const exchange = useFilterStore((state) => state.exchange);
  const setExchange = useFilterStore((state) => state.setExchange);
  return (
    <LabelWrapper label="거래소" htmlFor="exchange">
      <select
        className={clsx(
          "border-border-primary border-[0.5px] rounded-sm w-[100px] h-8 p-2 shadow",
          "font-medium text-xs"
        )}
        id="exchange"
        name="exchange"
        value={exchange}
        onChange={(e) => setExchange(e.target.value as Exchange)}
      >
        {exchangeOptions.map((option) => (
          <option
            key={option.value}
            value={option.value}
            className="text-input"
          >
            {option.name}
          </option>
        ))}
      </select>
    </LabelWrapper>
  );
}
