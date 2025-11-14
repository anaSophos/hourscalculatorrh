interface SelectTypeProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: { label: string; value: string }[];
}

export default function SelectType({ label, value, onChange, options }: SelectTypeProps) {
  return (
    <div className="mb-4">
      <label className="block mb-2 font-medium">{label}</label>
      <select
        value={value}
        onChange={onChange}
        className="w-full border p-2 rounded"
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}
