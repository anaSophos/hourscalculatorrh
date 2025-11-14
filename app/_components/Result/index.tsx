interface ResultProps {
  saida: string;
  entrada: string;
}

export default function Result({ saida, entrada }: ResultProps) {
  if (!saida) return null;

  return (
    <p className="text-center mt-4 text-lg">
      Você deve bater o ponto de entrada às <span className="font-bold">{saida}</span>
      <p className="text-center mt-4 text-lg text-red-600">
        Não bata o ponto de entrada entre <span className="font-bold">{entrada}</span>
      </p>
    </p>
  );
}
