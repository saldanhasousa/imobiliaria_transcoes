import { useParams } from 'react-router-dom';
import car from "../src/data/imoveis.json"
import React from 'react'
import { HiArrowSmRight } from "react-icons/hi";
import { HiArrowSmLeft } from "react-icons/hi";

const DetalheImovel = () => {
    const {id} = useParams();
    
    const todosImoveis = [
        ...car.arrendar,
        ...car.alugel,
        ...car.venda
      ];

      const imovel = todosImoveis.find(i => i.id == id);
      if (!imovel) return <p>Imóvel não encontrado</p>;
  return (
      <main className=' bg-gray-300 py-9 row-start-2 row-end-3'>
          <section className='xl:m-auto xl:max-w-7xl w-full h-full flex flex-col '>

              <article className='flex gap-5 justify-center max-sm:flex-col *:max-sm:w-full *:bg-white *:rounded-sm *:shadow-black/50 *:shadow-[0_0_10px]'>

                  <div className='w-[60%] h-96 relative [&_button]:absolute [&_button]:z-10 [&_button]:top-[50%] [&_button]:bg-gray-200/30  [&_button]:font-bold' id="cont_img">

                      <img src={imovel.image} className='rounded-sm w-full h-full' alt={imovel.titulo} />

                      <button className='left-2.5 p-2.5'>
                          <HiArrowSmLeft />
                      </button>

                      <button className='right-2.5 p-2.5'>
                          <HiArrowSmRight />
                      </button>

                  </div>

                  <div className='w-[35%] flex flex-col gap-5' id="inf">
                      <div className='bg-gray-400 rounded-sm p-2.5 text-white font-bold text-[1.5em] sm:text-[2em]
                       text-center h-[30%] '>
                          {imovel.preco}
                      </div>

                      <div className='flex  flex-col gap-2.5 p-2.5'>
                          <div className='flex  flex-col gap-2.5'>
                              <p className='p-1 rounded bg-green-400 w-28 text-center'>{imovel.estado}</p>
                              <p>Localização:{imovel.local}</p>

                          </div>
                          <div className='flex justify-center gap-2.5 *:px-2 *:rounded-sm '>
                              <button className='bg-amber-200 hover:bg-amber-200/50'>
                                  Marcar visita
                              </button>
                              <button className='bg-gray-400 hover:bg-gray-500/50'>
                                  Contactar
                              </button>
                          </div>
                      </div>
                  </div>


              </article>


              <article className='sm:mx-2.5 p-2.5 flex justify-around max-sm:flex-col  gap-2.5 bg-white mt-5 rounded-sm shadow-black/50 shadow-[0_0_10px] '>
                  <div>
                      <h2 className='font-bold text-[2em]'>{imovel.titulo}</h2>
                      <p>Sala</p>
                      <p>Quartos</p>
                      <p>Cozinha</p>
                      <p>WC</p>
                  </div>

                  <div className='max-sm:w-full w-[50%]'>
                      <strong>Geolocalização</strong>

                      <div className='w-full  h-72 bg-gray-200'>
                          Map
                      </div>
                  </div>
              </article>
          </section>
      </main>
    
  )
}

export default DetalheImovel