import React from 'react'
import equipa from '../data/aprenda.json'
const Sobre = () => {
  return (
    <div className='row-start-2 row-end-3 text-white font-sans w-4xl m-auto max-sm:w-full'>
        <h1 className='p-2 text-5xl font-bold'>Sobre Nós</h1>
        <section className='w-full text-justify  [&_article]:text-black'>
            <article className='p-2.5 '>
                
                <div className='flex flex-col justify-center'>
                    <h2 className='text-[2rem] pt-1.5 font-bold'>Quem somos?</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto incidunt ut quasi minus atque! Perspiciatis ea quas temporibus voluptatem eligendi illum, eius numquam deserunt aliquam omnis id saepe facere sed!
                        Rem, voluptates. Dolorem tempore ex, laudantium ab sed assumenda delectus amet necessitatibus animi! Sequi modi ut placeat, eum consequatur quidem soluta quas aspernatur. Soluta, vitae. Illo exercitationem ut ex reiciendis?</p>
                    </div>
                    
              

                <div>
                    <h2 className='font-bold'>Objectivo</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
               
                    <h2 className='font-bold'>Visão e Misão</h2>
                    <p>Lorem ipsum dolor sit amet consectetur </p>
                </div> 
            </article>


            <article className=' p-2.5 mt-5 mb-5 '>
                <h2 className=' pb-3.5 text-[2rem]  font-bold '>Nossa Equipe</h2>

                    <div className='flex gap-5 max-sm:flex-col max-sm:items-center'>
                        {equipa.elementos.map((elem) => (
                            <div className='shadow-[0_0_10px] shadow-black/50 w-[200px] h-[300px] rounded-[5px]' key={elem.texto}>
                                {/* Img do dev */}
                                <img className='rounded-tl-[5px] rounded-tr-[5px] w-full h-[80%]' src={elem.image} alt={elem.nome} />
                                {/* Informação */}
                                <strong className='pl-2'>{elem.nome}</strong>
                                <p className='italic pl-2'>{elem.texto}</p>
                            </div>
                        ))}

                    </div>
                
            </article>
            
        </section>
    </div>
  )
}

export default Sobre