import { FaFacebook } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
function Footer(){
    return(
        <footer className=" flex flex-col justify-between text-center text-white row-end-4 row-start-3  bg-gray-900  p-2 ">
            <div className="flex flex-col sm:flex-row sm:justify-around gap-5 pb-5 border-b">
                <div className="informacaof">
                    <h2>Redes</h2>
                   <ul className="flex justify-center gap-2.5 py-2.5">
                    <li><FaFacebook  className=' w-6 h-6'/></li>
                    <li><FaWhatsappSquare className='w-6 h-6'/></li>
                    <li><FaInstagramSquare className='w-6 h-6'/></li>
                   </ul>
                </div>
                <div className="informacaof">
                
                <h2>Contactos</h2>

                <ul className="flex flex-col items-center gap-2.5 *:flex *:gap-1.5">
                    <li><FaPhoneAlt className='w-6 h-6'/> 92x xxx xxx</li>
                    <li><MdOutlineMail className='w-6 h-6'/> kubico@gmail.com</li>
                    <li></li>
                </ul>
                </div>
                <div className="informacaof">
                    <h2>Comentário</h2>
                    <div className=" text-black  flex flex-col gap-2.5 *:outline-none *:p-1 "> 
                        <input type="email" name="email" id="i_email" placeholder="Email"
                        className="bg-white "/>
                        
                        <textarea name="comente" id="icomente" placeholder=" Deixe o seu comentário..."  className="bg-white sm:w-50 overflow-hidden h-10 resize-none" ></textarea>
                        <button className="w-20 bg-yellow-400 hover:bg-yellow-300 rounded-lg text-gray-500">
                            Comentar
                        </button>
                    </div>

                    
                </div>
            </div>

            <em className=" ">&copy; 2025 Kubico • Todos os direitos reservados
            </em>
        </footer>
    )
}

export default Footer