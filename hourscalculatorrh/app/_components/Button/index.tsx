interface ButtonProps {
  text: string;
  onClick: () => void;
  disabled?: boolean;
}

export default function Button({ text, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
    >
      {text}
    </button>
  );
}
