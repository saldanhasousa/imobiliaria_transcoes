import React from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
import ListaUsuario from '../../components/ListaUsuario'
import ListaImoveis from '../../components/ListaImovel'
const Administrador = () => {
  return (
    <main className="min-h-screen bg-slate-50 p-4">
      
      {/* HEADER */}
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-slate-800">
          Painel do Administrador
        </h1>
        <p className="text-slate-500 text-sm">
          Gerencie usuários, imóveis e publicações
        </p>
      </header>

      {/* NAVEGAÇÃO */}
      <nav className="bg-white rounded-xl shadow p-4 flex flex-wrap gap-3 mb-6">
        <Link
          to="listUsuario"
          className="px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition"
        >
          Usuários
        </Link>

        <Link
          to="listImoveis"
          className="px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition"
        >
          Imóveis
        </Link>

        <button className="px-4 py-2 bg-slate-600 text-white rounded-lg">
          Editar publicação
        </button>
      </nav>

      {/* AÇÕES CRÍTICAS */}
      <section className="bg-white rounded-xl shadow p-4 flex flex-wrap gap-3 mb-6">
        <button className="px-4 py-2 bg-green-500 text-white rounded-lg">
          Aceitar
        </button>

        <button className="px-4 py-2 bg-yellow-500 text-white rounded-lg">
          Validar
        </button>

        <button className="px-4 py-2 bg-red-500 text-white rounded-lg">
          Publicar
        </button>
      </section>

      {/* CONTEÚDO */}
      <section className="bg-white rounded-xl shadow p-4">
        <Outlet />
      </section>

    </main>
  )
}

export default Administrador