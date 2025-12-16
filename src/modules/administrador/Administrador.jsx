import React from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
import ListaUsuario from '../../components/ListaUsuario'
const Administrador = () => {
  return (
    <div className='p-2.5 w-full h-full '>
        <h1 className='py-2.5 font-bold text-[2em]'>Administrador</h1>

        <div className=' [&_button]:rounded-sm [&_button]:p-2 flex *:text-nowrap [&_button]:mx-2.5  text-white [&_button]:font-bold max-sm:flex-wrap gap-2.5'>

            <Link to="listUsuario"><button className='bg-gray-600'>Lista Usuário</button></Link>
            <button className='bg-gray-600'>Lista Imoveis</button>
            <button className='bg-gray-600'>Editar publicação</button>
            <button className='bg-green-400'>Aceitar</button>
            <button className='bg-yellow-400'>Validar</button>
            <button className='bg-red-400'>Publicar</button>
        </div>

        <div className=' mt-2.5'>
            <Outlet/>
        </div>

    </div>
  )
}

export default Administrador