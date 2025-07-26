import { create } from "zustand";
import { createExchangeSlice, ExchangeSlice } from "./exchangeSlice";

export const useFilterStore = create<ExchangeSlice>()((...a) => ({
  ...createExchangeSlice(...a),
}));
