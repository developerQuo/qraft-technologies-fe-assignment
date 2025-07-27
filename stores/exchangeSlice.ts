import { Exchange } from "@/constants/enums";
import { StateCreator } from "zustand";

export interface ExchangeSlice {
  exchange: Exchange;
  setExchange: (exchange: Exchange) => void;
}

export const createExchangeSlice: StateCreator<
  ExchangeSlice,
  [],
  [],
  ExchangeSlice
> = (set) => ({
  exchange: Exchange.ALL,
  setExchange: (exchange: Exchange) => set({ exchange }),
});
