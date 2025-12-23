import { useEffect, useState } from "react";
import api from "../services/api";
import { MdDelete } from "react-icons/md";
function ListaImoveis() {
  const [imoveis, setImoveis] = useState([]);

  useEffect(() => {
    carregarImoveis();
  }, []);

  function carregarImoveis() {
    api.get("/imovel")
      .then(res => setImoveis(res.data))
      .catch(err => console.error(err));
  }

  function deletar(id) {
    if (!window.confirm("Deseja realmente excluir?")) return;

    api.delete(`/imovel/${id}`)
      .then(() => carregarImoveis())
      .catch(err => alert("Erro ao deletar"));
  }

  return (
    <div>
      <h2>Lista de Imóveis</h2>
          <div id="container" className="flex">
              {imoveis.map(imovel => (
                  <div className="w-50 h-75" key={imovel.id} style={{ border: "1px solid #ccc", margin: 10 }}>
                      <img className="h-[65%] w-full" src={`http://localhost:8080/imoveis/${imovel.imagem1}`} alt="" />

                      <p><strong>{imovel.titulo}</strong></p>
                      <p>{imovel.preco} Kz</p>

                      <div className="flex justify-around">

                          <button className="font-bold  p-1 rounded-2xl bg-green-400 hover:bg-green-500">Informação</button>
                          <button onClick={() => deletar(imovel.id)} className="  hover:text-red-600 text-center text-red-700 hover:cursor-pointer p-2.5 rounded-[50%] hover:bg-gray-200">
                              <MdDelete />
                          </button>
                      </div>
                  </div>
              ))}

          </div>

    </div>
  );
}

export default ListaImoveis;
