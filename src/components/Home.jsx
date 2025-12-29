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
    
        <main className=' mb-5 row-start-2 row-end-3 '>
          <section className="gap-5 h-125 bg-cover bg-center w-full text-center flex flex-col flex-nowrap justify-center" style={{ backgroundImage: `url(${bgimg_section})`}}>

        <div className="relative max-w-4xl mx-auto text-center text-white px-4">
          <h1 className="text-[clamp(2rem,4vw,3rem)] font-bold mb-4">
            Vamos encontrar o teu kubico dos sonhos
          </h1>
          <p className="mb-6 text-lg">
            A tua casa em um click
          </p>

          <button className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold">
            Procurar imóveis
          </button>
        </div>

          </section>

          <section className=" p-2.5 flex flex-col gap-5 ">
            <article>
              <h2 className='bg-amber-400 w-20 my-4 p-1 rounded-[5px]' >Destaque</h2>
              <EmblaCarousel />
            </article>

        <article className='text-center xl:w-250 sm:mx-auto'>
          
          <h2 className="text-center font-bold text-2xl pb-5 text-gray-800">CASAS COM PADÕES DIFERENCIADOS</h2>
          
                  <div id="cont_svg " className='w-full items-center  flex  flex-col *:h-50 gap-2.5 *:w-50 sm:flex-row sm:justify-evenly '>

                    <div className="item_svg ">
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

          <section className=" p-3.5 bg-cover bg-left bg_section3 sm:flex sm:justify-around gap-3.5 " >

            <img src="https://plantasdecasas.com/wp-content/uploads/2014/10/Plantas-de-Casas-Luanda-Angola.jpg" alt="" />

            <div data-aos="fade-up" data-aos-duration="1000" id="text_section3" className='flex flex-col justify-start bg-white py-3.5 text-center gap-5 rounded-4xl max-sm:w-[55%] '>

              <h2 className='font-bold text-2xl'>Antes de arrendar, saiba o que verificar</h2>
              <p  className='font-semibold'>
                Evite problemas e faça um contrato seguro.
              </p>

              <button type="button" className='font-bold bg-amber-400 w-50  self-center p-0.5 rounded-lg hover:bg-amber-300'>
                Falar com especialista
              </button>
            </div>

          </section>
        </main>
  )
}

export default Home