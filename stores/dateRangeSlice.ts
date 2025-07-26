import { ONE_YEAR_AGO, TODAY } from "@/utils/date";
import { StateCreator } from "zustand";

export interface DateRangeSlice {
  startDate: string;
  endDate: string;
  setStartDate: (startDate: string) => void;
  setEndDate: (endDate: string) => void;
}

export const createDateRangeSlice: StateCreator<
  DateRangeSlice,
  [],
  [],
  DateRangeSlice
> = (set) => ({
  startDate: ONE_YEAR_AGO,
  endDate: TODAY,
  setStartDate: (startDate: string) => set({ startDate }),
  setEndDate: (endDate: string) =>
    set(({ startDate }) => ({
      startDate: startDate > endDate ? endDate : startDate,
      endDate,
    })),
});
