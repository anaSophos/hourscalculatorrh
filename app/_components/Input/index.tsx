interface InputProps {
  label: string;
  labelComplement: string;
  type: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  step?: string;
  min?: string;
  disabled?: boolean;
}

export default function Input({
  label,
  labelComplement,
  type,
  value,
  onChange,
  step,
  min,
  disabled,
}: InputProps) {
  return (
    <div className="mb-4">
      <label className="block mb-2 font-medium">
        {label}{labelComplement}
      </label>

      <input
        type={type}
        value={value}
        onChange={onChange}
        step={step}
        min={min}
        disabled={disabled} // ← ADICIONE ISSO
        className="w-full border p-2 rounded disabled:bg-gray-200"
      />
    </div>
  );
}

