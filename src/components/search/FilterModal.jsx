import { X } from "lucide-react";

export default function FilterModal({ isOpen, onClose, filters, setFilters, onApply }) {
  if (!isOpen) return null;

  function handleChange(e) {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex justify-end">
      <div className="bg-white w-full max-w-sm h-full p-5 animate-slideIn">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Filtros</h2>
          <button onClick={onClose}>
            <X />
          </button>
        </div>

        {/* Filtros */}
        <div className="space-y-4">
          <input
            name="localizacao"
            placeholder="Localização"
            value={filters.localizacao}
            onChange={handleChange}
            className="input w-full"
          />

          <select name="tipo" value={filters.tipo} onChange={handleChange} className="input w-full">
            <option value="">Tipo</option>
            <option value="T1">T1</option>
            <option value="T2">T2</option>
            <option value="T3">T3</option>
          </select>

          <select name="precoMax" value={filters.precoMax} onChange={handleChange} className="input w-full">
            <option value="">Preço máximo</option>
            <option value="30000">30.000 Kz</option>
            <option value="60000">60.000 Kz</option>
            <option value="100000">100.000 Kz</option>
          </select>
        </div>

        {/* Footer */}
        <div className="mt-6">
          <button
            onClick={onApply}
            className="w-full bg-yellow-500 text-white py-3 rounded-lg"
          >
            Aplicar filtros
          </button>
        </div>
      </div>
    </div>
  );
}
