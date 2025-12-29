import pesquisa from './../assets/image/img_header/icons8-pesquisar-24.png'
import close_img from './../assets/image/img_header/close_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png'
import menu_img from './../assets/image/img_header/menu_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png'
import ImovelCadastro from '../../page/ImovelCadastro';

import HamburgerButton from './mobal/HamburgerButton.jsx';
import MobMenu from './mobal/MobMenu.jsx';
import { useState } from "react";
import { Link, NavLink } from 'react-router-dom';
import Imoveis from './Imoveis';
import { FaSearch } from "react-icons/fa";



function Header() {
    const [menuAberto, setMenuAberto] = useState(false);
    return (
        <>
        <header className="text-white flex items-center fixed bg-gray-900 top-0 w-full row-end-2 row-start-1 justify-between text-[1.2em] z-50 max-sm:justify-end gap-3.5 py-2.5 px-3.5">

            <div id="cont_logo">
                LogoKubico
            </div>

            <menu className=''>
                <ul className="flex flex-nowrap *:p-1 justify-center  gap-2.5 max-sm:hidden font-bold *:rounded-[10px] *:hover:bg-gray-800 *:hover:duration-600 *:hover:transition-colors">
                    <li>
                        <NavLink to="">

                            Home

                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/imoveis">Imóveis</NavLink>
                    </li>

                    <li>
                        <NavLink to="/aprenda">Aprenda</NavLink>
                    </li>

                    <li>
                        <NavLink to="/sobre">Sobre</NavLink>
                    </li>

                    <li>
                        <NavLink to="/contactos">Contactos</NavLink>
                    </li>
                  
                </ul>

               <HamburgerButton
           aberto={menuAberto}
            onClick={() => setMenuAberto(!menuAberto)}
               />
            </menu>

            <div className=' flex gap-3.5 justify-between items-center'>
                <div id="img_pesquisa" className=' pl-6'>
                    <FaSearch />
                </div>

                <div className="flex gap-2">
                    <button className="px-4 py-1 border rounded-lg hover:bg-gray-800">
                        Publicar
                    </button>
                    <button className="px-4 py-1 bg-yellow-400 hover:bg-yellow-300 rounded-lg font-semibold">
                        Login
                    </button>
                </div>
            </div>
        </header>

        <MobMenu
       aberto={menuAberto}
        onClose={() => setMenuAberto(false)}
        />
        </>
    )
}

export default Header