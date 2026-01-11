import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import CardsImoveis from './cards/CardsImoveis.jsx'
import cont from '../data/imoveis.json'




const EmblaCarousel = () => {

    const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()])
   return (
  
        <div className="embla" ref={emblaRef}>
          
          <div className="embla__container *:*:w-70 *:*:sm:w-60 *:*:md:w-80 *:*:lg:w-96 ">


            {cont.alugel.map((imovel) => (
                <div className="embla__slide" key={imovel.id}>
                <CardsImoveis
                    id={imovel.id}
                    titulo={imovel.titulo}
                    preco={imovel.preco}
                    local={imovel.local}
                    image={imovel.image}
                    estado={imovel.estado}
                    
                />
            </div>
            ))}

            
            

          </div>
        </div>
  )
}

export default EmblaCarousel