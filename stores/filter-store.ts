import { create } from "zustand";
import { createExchangeSlice, ExchangeSlice } from "./exchangeSlice";
import { createKeywordSlice, KeywordSlice } from "./keywordSlice";

export const useFilterStore = create<ExchangeSlice & KeywordSlice>()(
  (...a) => ({
    ...createExchangeSlice(...a),
    ...createKeywordSlice(...a),
  })
);
