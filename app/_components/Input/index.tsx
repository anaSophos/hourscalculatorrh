interface InputProps {
  label: string;
  type: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  step?: string;
  min?: string;
  disabled?: boolean;
}

export default function Input({
  label,
  type,
  value,
  onChange,
  step,
  min,
}: InputProps) {
  return (
    <div className="mb-4">
      <label className="block mb-2 font-medium">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        step={step}
        min={min}
        className="w-full border p-2 rounded"
      />
    </div>
  );
}
