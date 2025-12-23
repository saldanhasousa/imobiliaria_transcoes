import { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { deletarUsuario} from "../services/usuarioService";
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




   const handleDelete = async (id) => {
    if (!window.confirm("Tem certeza que deseja deletar este usuário?")) return;

    try {
      await deletarUsuario(id);
      setUsuarios(usuarios.filter(u => u.id !== id));
      alert("Usuário deletado com sucesso");
    } catch (err) {
      console.error("Erro ao deletar usuário:", err);
      alert("Erro ao deletar usuário");
    }
  };

  
  if (carregando) {
    return <p>Carregando...</p>;
  }
  return (
    <div>
      <h2 className="font-bold text-[1.5em]">Lista de Usuários</h2>
              <table className=" border-separate  w-[740px] border-spacing-y-2.5  ">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Nome</th>
                      <th>Email</th>
                      <th>Telefone</th>
                      <th>Senha</th>
                      <th>Ações</th>
                    </tr>
                  </thead>
                 <tbody>
                   
                   {usuarios.map(usuario => (
                     <tr className=" bg-gray-300    *:p-2  *:text-nowrap " key={usuario.id}>
                   
                         <td className="">{usuario.id}</td>
                         <td className="">{usuario.nome}</td>
                         <td>{usuario.email}</td>
                         <td>{usuario.telefone}</td>
                         <td>{usuario.senha}</td>
                         <td >
                             <MdDelete className="  hover:text-red-600 text-center text-red-700 hover:cursor-pointer  "  onClick={() => handleDelete(usuario.id)}/>
                         </td>
                     </tr>
                   ))}
                 </tbody>
              </table>
      
    </div>
  );
}
