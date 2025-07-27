import DateRange from "./date-range/DateRange";
import KeywordInput from "./KeywordInput";
import ExchangeSelector from "./ExchangeSelector";

export default function Filter() {
  return (
    <div className="flex justify-between items-center py-0.5 bg-white rounded-[3px]">
      <ExchangeSelector />
      <KeywordInput />
      <DateRange />
    </div>
  );
}
