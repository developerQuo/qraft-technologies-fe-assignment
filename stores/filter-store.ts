import { create } from "zustand";
import { createExchangeSlice, ExchangeSlice } from "./exchangeSlice";
import { createKeywordSlice, KeywordSlice } from "./keywordSlice";
import { createDateRangeSlice, DateRangeSlice } from "./dateRangeSlice";

export const useFilterStore = create<
  ExchangeSlice & KeywordSlice & DateRangeSlice
>()((...a) => ({
  ...createExchangeSlice(...a),
  ...createKeywordSlice(...a),
  ...createDateRangeSlice(...a),
}));
