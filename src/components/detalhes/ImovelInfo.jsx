

function ImovelInfo({estado, preco, local, titulo}) {
  return (
    <div className="bg-white rounded-xl p-6 shadow space-y-4">
      <p className="inline-block bg-green-500 text-white px-3 py-1 rounded-full text-sm">
        {estado}
      </p>

      <h1 className="text-2xl font-bold">{titulo}</h1>
      <p className="text-gray-500">📍 {local}</p>

      <p className="text-3xl font-bold text-gray-500">
        {preco}
      </p>

      <div className="flex gap-3 pt-4 font-bold">
        <button className="text-gray-200 flex-1 bg-gray-700 py-3 rounded-xl font-semibold">
          Marcar visita
        </button>
        <button className="text-gray-500 flex-1 border py-3 rounded-xl">
          Contactar
        </button>
      </div>
    </div>
  );
}
export default ImovelInfo