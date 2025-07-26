"use client";

import { exchangeOptions } from "./data";
import Selector from "./Selector";
import { useFilterStore } from "@/stores/filter-store";

export default function ExchangeSelector() {
  const exchange = useFilterStore((state) => state.exchange);
  const setExchange = useFilterStore((state) => state.setExchange);
  return (
    <div className="flex gap-3 py-1 px-3 items-center ">
      <label
        htmlFor="exchange"
        className="text-text-primary font-semibold text-[15px]"
      >
        거래소
      </label>
      <Selector
        options={exchangeOptions}
        value={exchange}
        onChange={setExchange}
      />
    </div>
  );
}
