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
      <h2 className="font-bold text-[1.5em]">Lista de Usuários</h2>
              <table className=" border-separate  w-[740px] border-spacing-y-2.5  ">
                
                  
                  {usuarios.map(usuario => (
                    <tr className=" bg-gray-300    *:p-2  *:text-nowrap " key={usuario.id}>
                        <td className="">{usuario.id}</td>
                        <td className="">{usuario.nome}</td>
                        <td>{usuario.email}</td>
                        <td>{usuario.telefone}</td>
                        <td>{usuario.senha}</td>
                        <td className="  font-bold hover:text-red-600 text-center text-red-700 hover:cursor-pointer">
                            Apagar
                        </td>
                    </tr>
                  ))}
              </table>
      
    </div>
  );
}
