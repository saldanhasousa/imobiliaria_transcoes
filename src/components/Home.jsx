import React from 'react'
import bgimg_section from '../assets/image/img_header/fundo_header.png'
import bg_img from '../assets/image/img_header/texto_transparent.png'
import EmblaCarousel from '../components/EmblaCarousel.jsx'
import cont from '../data/imoveis.json'
import CardsImoveis from './cards/CardsImoveis.jsx'
import AOS from 'aos';
import 'aos/dist/aos.css';

import  { Home as HomeIcon,  Building2, Castle  } from "lucide-react";


const Home = () => {
      AOS.init();
  return (
    
        <main className='mb-5 row-start-2 row-end-3 grid-cols-1 grid-rows-[500px_1fr_1fr] '>
          <section className="gap-5 h-125 bg-cover bg-center w-full text-center flex flex-col flex-nowrap justify-center" style={{ backgroundImage: `url(${bgimg_section})`}}>

            <div className='text-white font-bold *:text-nowrap meu-textResp'>
               <p>VAMOS ENCOTRAR O TEU </p>
                <p>KUBICO DOS SONHOS!</p>
               </div>

            <a href="#" className='text-white font-bold bg-amber-400 w-50  self-center p-0.5 rounded-4xl hover:bg-amber-300 animate-minha'>A tua casa em um click</a>
            

          </section>

          <section className=" p-2.5 h-200">
            <h2 className='bg-amber-400 w-20 my-4 p-1 rounded-[5px]' >Destaque</h2>

            <EmblaCarousel />

        <article>
          
          <h2 className="text-center">OFERECEMOS CASAS COM PADÕES DIFERENCIADOS</h2>
          
                  <div id="cont_svg " className='w-full items-center  flex  flex-col *:h-50 gap-2.5 *:w-50 sm:flex-row sm:justify-evenly '>

                    <div className="item_svg">
                      <HomeIcon className="element_svg text-gray-400" />
                      <p>BAIXO</p>
                    </div>

                    <div className="item_svg">
                      <Building2 className="element_svg text-blue-500" />
                      <p>MÉDIO</p>
                    </div>

                    <div className="item_svg">
                      <Castle className="element_svg  text-yellow-500" />
                      <p>ALTO</p>
                    </div>

                  </div>
        </article>


          </section>

          <section className="p-3.5 h-125 bg-cover bg-left relative bg_section3 sm:flex sm:justify-around gap-3.5 sm:bg-gray-100" >

            <img src={bg_img} alt="" />

            <div data-aos="fade-up" data-aos-duration="1000" id="text_section3" className='flex flex-col max-sm:absolute w-75  max-sm:top-20  max-sm:right-[10%] bg-white/40 py-3.5 text-center gap-5 rounded-4xl max-sm:w-[55%] max-sm:h-[70%] justify-center'>

              <p  className='text-[1.5rem]'>
                Se está a procura de um cubico para arrendar, este artigo é para si. Antes de assinar contrato deve ter alguns cuidados.
              </p>

              <button type="button" className='font-bold bg-amber-400 w-50  self-center p-0.5 rounded-lg hover:bg-amber-300'>
                Fale conossco
              </button>
            </div>

          </section>
        </main>
  )
}

export default Home