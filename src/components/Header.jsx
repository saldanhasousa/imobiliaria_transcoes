import pesquisa from './../assets/image/img_header/icons8-pesquisar-24.png'
import close_img from './../assets/image/img_header/close_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png'
import menu_img from './../assets/image/img_header/menu_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png'


import { Link, NavLink } from 'react-router-dom';
import Imoveis from './Imoveis';




function Header(){
        
    return(
        <header className="text-white flex items-center fixed bg-gray-400 top-0 w-full row-end-2 row-start-1 justify-center text-[1.2em] z-50 max-sm:justify-end gap-3.5 py-2.5 pr-3.5">

            <menu className=''>
                <ul className="flex flex-nowrap *:p-[5px]  gap-12 max-sm:hidden font-bold *:rounded-[10px] *:hover:bg-gray-300 *:hover:duration-600 *:hover:transition-colors">                        
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

                <div className='sm:hidden bg-gray-300 p-1 rounded-[5px] shadow-2xs'>
                    <img src={menu_img} alt="" />
                </div>
            </menu>

            <div className=' flex gap-3.5 items-center'>
                <div id="img_pesquisa" className='pl-6'>
                    <img src={pesquisa} alt="" />
                </div>
                <div>
                    <button type="button" className='p-[5px] rounded-[10px] bg-gray-300 '>
                        <Link to="/cadastro">
                        Login
                        </Link>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header