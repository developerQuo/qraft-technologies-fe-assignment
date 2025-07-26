import clsx from "clsx";

export default function Selector<T extends string>({
  options,
  value,
  onChange,
}: {
  options: { value: T; name: string }[];
  value: T;
  onChange: (value: T) => void;
}) {
  return (
    <select
      className={clsx(
        "border-border-primary border-[0.5px] rounded-sm w-[100px] h-8 p-2 shadow",
        "font-medium text-xs"
      )}
      id="exchange"
      name="exchange"
      value={value}
      onChange={(e) => onChange(e.target.value as T)}
    >
      {options.map((option) => (
        <option
          key={option.value}
          value={option.value}
          className="text-text-secondary"
        >
          {option.name}
        </option>
      ))}
    </select>
  );
}
