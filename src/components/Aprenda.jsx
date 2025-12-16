import React from 'react'
import apreder from '../data/aprenda.json'
const Aprenda = () => {
  return (
      <div className=' font-sans row-start-2 row-end-3 flex items-center'>

          <section className='w-full h-full bg-gray-800 text-white p-1.5 '>
              
              <article className='w-[800px] max-md:w-full m-auto flex flex-col gap-10 mb-5'>

                  <h1 className='p-2.5 text-[2em] font-bold '>Fundamentos do Sector Imobiliário</h1>
                  <iframe className='w-full h-[500px] ' src="https://www.youtube.com/embed/eppIiifJXZ4?si=h20BH6R9msBz5DY4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

              </article>
          </section>
      </div>
  )
}

export default Aprenda