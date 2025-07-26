"use client";

import Image from "next/image";
import DateInput from "./DateInput";
import { useFilterStore } from "@/stores/filter-store";
import { TODAY } from "@/utils/date";

export default function DateRange() {
  const startDate = useFilterStore((state) => state.startDate);
  const endDate = useFilterStore((state) => state.endDate);
  const setStartDate = useFilterStore((state) => state.setStartDate);
  const setEndDate = useFilterStore((state) => state.setEndDate);

  return (
    <div className="flex gap-3 py-1 px-3 items-center justify-between">
      <DateInput
        value={startDate}
        onChange={setStartDate}
        id="startDate"
        max={endDate}
      />
      <Image
        src="/icons/bx-chevron-down.svg"
        alt="arrow-right"
        width={36}
        height={36}
      />
      <DateInput
        value={endDate}
        onChange={setEndDate}
        id="endDate"
        max={TODAY}
      />
    </div>
  );
}
