function ImovelDescricao() {
  return (
    <div className="bg-white rounded-xl p-6 shadow">
      <h2 className="text-xl font-bold mb-4">Detalhes do imóvel</h2>

      <ul className="grid grid-cols-2 gap-3 text-gray-600">
        <li>✔ Sala</li>
        <li>✔ Quartos</li>
        <li>✔ Cozinha</li>
        <li>✔ WC</li>
      </ul>
    </div>
  );
}

export default ImovelDescricao
