import { useState } from "react";
import CardsImoveis from "./cards/CardsImoveis";


export default function SecaoImoveis({
  titulo,
  dados = [],
  limiteInicial = 4,
}) {
  const [expandido, setExpandido] = useState(false);

  const dadosVisiveis = expandido
    ? dados
    : dados.slice(0, limiteInicial);

  if (!dados.length) return null;

  return (
    <section className="mt-8 relative">
      <h2 className="text-2xl font-bold text-gray-800 py-5">
        {titulo}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {dadosVisiveis.map((info) => (
          <CardsImoveis
            key={info.id}
            {...info}
          />
        ))}
      </div>

      {dados.length > limiteInicial && (
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setExpandido(!expandido)}
            className="px-6 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition "
          >
            {expandido
              ? "Ver menos"
              : `Ver mais (${dados.length - limiteInicial}) casas`}
          </button>
        </div>
      )}
    </section>
  );
}
