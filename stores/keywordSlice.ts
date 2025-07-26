import { StateCreator } from "zustand";

export interface KeywordSlice {
  keyword: string;
  setKeyword: (keyword: string) => void;
}

export const createKeywordSlice: StateCreator<
  KeywordSlice,
  [],
  [],
  KeywordSlice
> = (set) => ({
  keyword: "",
  setKeyword: (keyword: string) => set({ keyword }),
});
