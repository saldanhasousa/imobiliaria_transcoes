import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import CardsImoveis from './cards/CardsImoveis.jsx'
import cont from '../data/imoveis.json'

const EmblaCarousel = () => {

    const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()])
   return (
  
        <div className="embla" ref={emblaRef}>
          
          <div className="embla__container ">


            {cont.alugel.map((imovel) => (
                <div className="embla__slide" key={imovel.id}>
                <CardsImoveis
                    titulo={imovel.titulo}
                    preco={imovel.preco}
                    local={imovel.local}
                    image={imovel.image}
                    estado={imovel.estado}
                    
                />
            </div>
            ))}

            {cont.arrendar.map((imovel) => (
                <div className="embla__slide" key={imovel.id}>
                <CardsImoveis
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