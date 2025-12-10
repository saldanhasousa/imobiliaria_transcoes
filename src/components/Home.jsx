import React from 'react'
import bgimg_section from '../assets/image/img_header/fundo_header.png'
import bg_img from '../assets/image/img_header/texto_transparent.png'
import EmblaCarousel from '../components/EmblaCarousel.jsx'

const Home = () => {
  return (
    
        <main className='mb-5 row-start-2 row-end-3 grid-cols-1 grid-rows-[500px_1fr_1fr] '>
          <section className="gap-5 bg-cover bg-center w-full h-[500px] text-center flex flex-col flex-nowrap justify-center" style={{ backgroundImage: `url(${bgimg_section})`}}>
            <div className='text-white font-bold text-[3em] *:text-nowrap max-sm:text-[2em]'>
               <p>VAMOS ENCOTRAR O TEU </p>
                <p>KUBICO DOS SONHOS!</p>
               </div>

            <a href="#" className='text-white font-bold bg-amber-400 w-[200px]  self-center p-0.5 rounded-4xl hover:bg-amber-300 animate-minha'>A tua casa em um click</a>
            

          </section>

          <section className=" p-2.5 max-sm:mb-7">
            <h2 className='bg-amber-400 w-20 my-4 p-1 rounded-[5px]' >Destaque</h2>

              <EmblaCarousel/>
              <EmblaCarousel/>
              
          </section>

          <section className="p-3.5 h-[500px] bg-cover bg-left relative bg_section3 sm:flex sm:justify-around gap-3.5 sm:bg-gray-100" >

            <img src={bg_img} alt="" />

            <div id="text_section3" className='flex flex-col max-sm:absolute w-[300px]  max-sm:top-20  max-sm:right-[10%] bg-white/40 py-3.5 text-center gap-5 rounded-4xl max-sm:w-[55%] max-sm:h-[70%] justify-center'>

              <p className='text-[1.5rem]'>
                Se está a procura de um cubico para arrendar, este artigo é para si. Antes de assinar contrato deve ter alguns cuidados.
              </p>

              <button type="button" className='font-bold bg-amber-400 w-[200px]  self-center p-0.5 rounded-lg hover:bg-amber-300'>
                Fale conossco
              </button>
            </div>

          </section>
        </main>
  )
}

export default Home