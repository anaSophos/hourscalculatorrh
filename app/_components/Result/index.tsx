interface ResultProps {
  result: string;
  restriction: string;
  entradaoursaida: string;
}

export default function Result({ result, restriction, entradaoursaida }: ResultProps) {
  if (!result) return null;

  return (
    <div className="text-center mt-4 text-lg flex flex-col gap-2">
      <p>
        Previsão de {entradaoursaida}: 
      </p>
      <span className="font-bold">{result}</span>
      
      <div className=" w-full mx-auto mt-2 h-auto p-2 rounded-md bg-red-100 text-center mt-4 flex flex-col gap-1">
        <p className="text-red-600 text-base">
          Evite registrar seu ponto:
        </p>
        <span className="font-bold text-red-600 text-lg">{restriction}</span>
      </div>
    </div>
  );
}
