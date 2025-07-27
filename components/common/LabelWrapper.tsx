type InputProps = {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
};

export default function LabelWrapper({ label, htmlFor, children }: InputProps) {
  return (
    <div className="flex gap-3 py-1 px-3 items-center">
      <label
        htmlFor={htmlFor}
        className="text-text-primary font-semibold text-[15px]"
      >
        {label}
      </label>

      {children}
    </div>
  );
}
