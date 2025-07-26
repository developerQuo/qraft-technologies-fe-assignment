import clsx from "clsx";

type InputProps = {
  value: string;
  onChange: (value: string) => void;
  id: string;
  max: string;
};

export default function DateInput({ value, onChange, id, max }: InputProps) {
  const onDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const date = e.target.value;
    if (date > max) {
      onChange(max);
    } else {
      onChange(date);
    }
  };
  return (
    <input
      type="date"
      id={id}
      value={value}
      onChange={onDateChange}
      className={clsx(
        "border-border-primary border-[0.5px] rounded-sm w-[132px] h-8 p-2 shadow",
        "font-medium text-xs text-input"
      )}
      style={{
        colorScheme: "light",
      }}
      max={max}
    />
  );
}
