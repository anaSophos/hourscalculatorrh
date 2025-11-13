'use client';
import { useState } from 'react';
import Input from './_components/Input';
import Button from './_components/Button';
import Result from './_components/Result';
import SelectType from './_components/SelectType';

export default function Home() {
  const [entrada, setEntrada] = useState('');
  const [saida, setSaida] = useState('');
  const [tipoHora, setTipoHora] = useState('');

  function calcularSaida() {
    if (!entrada || !tipoHora) return;

    const entradaDate = new Date(entrada);

    let horasTrabalho = 0;

    switch (tipoHora) {
      case '11h':
        horasTrabalho = 11;
        break;
      case '35h':
        horasTrabalho = 35;
        break;
      case 'Minutos Residuais':
        horasTrabalho = 10;
        break;
      default:
        horasTrabalho = 0;
    }

    entradaDate.setHours(entradaDate.getHours() + horasTrabalho);

    const dia = entradaDate.toLocaleDateString('pt-BR');
    const hora = entradaDate.toTimeString().slice(0, 5);

    setSaida(`${dia} às ${hora}`);
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-6 rounded-2xl shadow-md w-full max-w-sm">

        <h1 className="text-2xl font-semibold text-center mb-4">
          Calculadora de Horário de Ponto
        </h1>

        <SelectType
          label="Tipo de jornada:"
          value={tipoHora}
          onChange={(e) => setTipoHora(e.target.value)}
          options={[
            { label: 'Selecione...', value: '' },
            { label: '11 horas', value: '11h' },
            { label: '35 horas', value: '35h' },
            { label: 'Minutos Residuais', value: 'Minutos Residuais' },
          ]}
        />

        <Input
          label="Data e hora de entrada:"
          type="datetime-local"
          value={entrada}
          onChange={(e) => setEntrada(e.target.value)}
          disabled={tipoHora === ''}
        />

        <Button
          text="Calcular horário final"
          onClick={calcularSaida}
          disabled={tipoHora === '' || entrada === ''}
        />

        <Result saida={saida} entrada={entrada} />
      </div>
    </main>
  );
}
