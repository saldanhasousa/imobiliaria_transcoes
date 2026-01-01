import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import { Filter, Search } from "lucide-react";
import FilterModal from "../search/FilterModal.jsx";

export default function SearchBar({ variant = "default" }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const [params] = useSearchParams();

  const [filters, setFilters] = useState({
    localizacao: params.get("localizacao") || "",
    tipo: params.get("tipo") || "",
    precoMax: params.get("precoMax") || "",
  });

  function handleChange(e) {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  }

  function handleSearch() {
    const query = new URLSearchParams(filters).toString();
    navigate(`/imoveis?${query}`);
  }

  return (
    <>
      <div
        className={`max-sm:hidden
        bg-white shadow-lg rounded-xl p-4
        grid grid-cols-1 md:grid-cols-4 gap-3
        ${variant === "hero" ? "max-w-5xl mx-auto" : ""}
      `}>
     
        <input
          name="localizacao"
          placeholder="Localização"
          value={filters.localizacao}
          onChange={handleChange}
          className="input"
        />

        <select
          name="tipo"
          value={filters.tipo}
          onChange={handleChange}
          className="input"
        >
          <option value="">Tipo</option>
          <option value="T1">T1</option>
          <option value="T2">T2</option>
          <option value="T3">T3</option>
        </select>

        <select
          name="precoMax"
          value={filters.precoMax}
          onChange={handleChange}
          className="input"
        >
          <option value="">Preço máximo</option>
          <option value="30000">30.000 Kz</option>
          <option value="60000">60.000 Kz</option>
          <option value="100000">100.000 Kz</option>
        </select>

        <button
          onClick={handleSearch}
          className="bg-gray-500 hover:bg-gray-600 text-white rounded-lg flex items-center justify-center gap-2 transition"
        >
          <Search size={18} />
          Pesquisar
        </button>
      </div>

      <div className="md:hidden flex gap-2 ">
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex-1 border border-gray-200 rounded-lg py-3 flex items-center justify-center gap-2 bg-gray-300/50 hover:bg-gray-300/60 text-gray-100 font-bold cursor-pointer"
        >
          <Filter size={18} className=""/>
          Filtrar
        </button>

        <button
          onClick={handleSearch}
          className="bg-yellow-500 text-white px-4 rounded-lg"
        >
          <Search size={18} />
        </button>
      </div>

      <FilterModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        filters={filters}
        setFilters={setFilters}
        onApply={() => {
          handleSearch();
          setIsModalOpen(false);
        }}
      />
    </>
  );
}
