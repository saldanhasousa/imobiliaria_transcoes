import { useEffect, useState } from "react";

export default function ListaUsuario() {
  const [usuarios, setUsuarios] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8080/usuarios")
      .then(response => response.json())
      .then(data => {
        setUsuarios(data);
        setCarregando(false);
      })
      .catch(err => {
        console.error("Erro ao buscar usuários:", err);
        setCarregando(false);
      });
  }, []);

  if (carregando) {
    return <p>Carregando...</p>;
  }

  return (
    <div>
      <h2>Lista de Usuários</h2>
              <table className="m-auto w-[1000px] max-sm:w-full border-separate  border-spacing-y-2.5  ">
                
                  
                  {usuarios.map(usuario => (
                    <tr className=" even:bg-gray-300 hover:even:bg-gray-400/70 hover:odd:bg-blue-500/60 odd:bg-blue-300 *:p-2  *:text-nowrap " key={usuario.id}>
                        <td className="">{usuario.id}</td>
                        <td className="">{usuario.nome}</td>
                        <td>{usuario.email}</td>
                        <td>{usuario.telefone}</td>
                        <td>{usuario.senha}</td>
                        <td className="bg-red-600  font-bold text-white text-center">
                            Apagar
                        </td>
                    </tr>
                  ))}
              </table>
      
    </div>
  );
}
