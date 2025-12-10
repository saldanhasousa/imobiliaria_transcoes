import React from 'react'
import equipa from '../data/aprenda.json'
const Sobre = () => {
  return (
    <div className='row-start-2 row-end-3  bg-gray-800 text-white font-sans'>
        <h1 className='p-10 text-5xl font-bold'>Sobre Nós</h1>
        <section className='w-[800px] max-md:w-full m-auto text-justify [&_article]:rounded-xl [&_article]:text-black [&_article]:bg-gray-300'>
            <article className='p-2.5 border'>
                <h2 className='text-[2rem] pt-1.5 pb-1.5 font-bold'>Quem somos?</h2>

                <div className='sm:flex gap-2.5'>
                    
                    <img className='h-52 w-full' src="/image_equipe/equipe.jpeg" alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto incidunt ut quasi minus atque! Perspiciatis ea quas temporibus voluptatem eligendi illum, eius numquam deserunt aliquam omnis id saepe facere sed!
                    Rem, voluptates. Dolorem tempore ex, laudantium ab sed assumenda delectus amet necessitatibus animi! Sequi modi ut placeat, eum consequatur quidem soluta quas aspernatur. Soluta, vitae. Illo exercitationem ut ex reiciendis?</p>
                </div>

                <div>
                    <h2 className='font-bold'>Objectivo</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi, excepturi? Voluptatum quibusdam adipisci praesentium ratione, dicta velit cumque necessitatibus pariatur recusandae quasi quas eaque eius illo esse in repellendus. Laudantium.</p>
                </div> 

                <div>
                    <h2 className='font-bold'>Visão e Misão</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quis incidunt quam facilis quisquam rem. Commodi quasi saepe at consequuntur omnis dolorem doloribus, ipsum quisquam exercitationem, explicabo earum eaque magnam.</p>
                </div> 
            </article>


            <article className='border p-2.5 mt-5 mb-5 '>
                <h2 className='text-center pb-3.5 text-[2rem]  font-bold '>Nossa Equipe</h2>

                    <div className='grid gap-1  grid-cols-3 items-center justify-center'>
                        {equipa.elementos.map((elem) => (
                            <div className='flex flex-col items-center' key={elem.texto}>
                                {/* Img do dev */}
                                <img className='w-[150px] rounded-[50%]' src={elem.image} alt="" />
                                {/* Informação */}
                                <p className='italic text-[1.2em]'>{elem.texto}</p>
                            </div>
                        ))}

                    </div>
                
            </article>
            
        </section>
    </div>
  )
}

export default Sobre