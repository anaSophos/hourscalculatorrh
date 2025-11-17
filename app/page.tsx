'use client';
import { useState } from 'react';
import Input from './_components/Input';
import Button from './_components/Button';
import Result from './_components/Result';
import SelectType from './_components/SelectType';

export default function Home() {
  const [entrada, setEntrada] = useState('');
  const [saida, setSaida] = useState('');
  const [entradaorsaida, setEntradaorsaida] = useState('');
  const [tipoHora, setTipoHora] = useState('');

  function calcularSaida() {
    if (!entrada || !tipoHora) return;

    const entradaDate = new Date(entrada);

    let horasTrabalho = 0;

    switch (tipoHora) {
      case '11h':
        horasTrabalho = 11;
        setEntradaorsaida('saída');
        break;
      case '35h':
        horasTrabalho = 35;
        setEntradaorsaida('saída');
        break;
      case 'Minutos Residuais':
        horasTrabalho = 10;
        setEntradaorsaida('entrada');
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
          Calculadora de Ponto
        </h1>

        <SelectType
          label="O que deseja calcular?"
          value={tipoHora}
          onChange={(e) => {
            const v = e.target.value;
            setTipoHora(v);

            if (v === '11h' || v === '35h') {
              setEntradaorsaida('saída');
            } else if (v === 'Minutos Residuais') {
              setEntradaorsaida('entrada');
            } else {
              setEntradaorsaida('');
            }
          }}
          options={[
            { label: 'Selecione...', value: '' },
            { label: 'Descanso de 11 horas', value: '11h' },
            { label: ' Descanso de 35 horas', value: '35h' },
            { label: 'Minutos Residuais', value: 'Minutos Residuais' },
          ]}
        />

        <Input
          label="Data e hora de "
          labelComplement={entradaorsaida}
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
