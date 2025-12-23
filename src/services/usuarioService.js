import api from "./api"; // importa a instância do axios já criada

export async function deletarUsuario(id) {
  return api.delete(`/usuario/${id}`);
}

export async function listarUsuarios() {
  return api.get("/usuario");
}
