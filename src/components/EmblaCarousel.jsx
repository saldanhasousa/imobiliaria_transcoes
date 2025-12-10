import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

const EmblaCarousel = () => {

    const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()])
   return (
  
        <div className="embla" ref={emblaRef}>
          
          <div className="embla__container *:[&_div]:h-[60%] *:[&_div]:*:w-full *:[&_div]:*:h-full *:bg-gray-200 *:rounded-lg">

            <div className="embla__slide ">
                <div  className='cont_img'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR44D-vqC_gjDOPPAtfnJDp6Au8fTVxcDB-vMeeEn2kYdWakZBD15zciFx2Q54XHm67WrU&usqp=CAU" alt="" />
                </div>

                <p className='truncate'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                <p><strong>Localização:</strong></p>
                <p><strong>Preço:</strong></p>
            </div>

            <div className="embla__slide">
                <div className='cont_img'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR44D-vqC_gjDOPPAtfnJDp6Au8fTVxcDB-vMeeEn2kYdWakZBD15zciFx2Q54XHm67WrU&usqp=CAU" alt="" />
                </div>

                <p className='truncate'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                <p><strong>Localização:</strong></p>
                <p><strong>Preço:</strong></p>
            </div>

            <div className="embla__slide">
                <div className='cont_img'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPvWbJLoYnTnYTCXS1DWDovmzDFYqYKB8be0YNy9bRd9sneALEDET2qecRSsc_xbOCouw&usqp=CAU" alt="" />
                </div>

                <p className='truncate'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                <p><strong>Localização:</strong></p>
                <p><strong>Preço:</strong></p>
            </div>

            <div className="embla__slide">
                <div className='cont_img'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR44D-vqC_gjDOPPAtfnJDp6Au8fTVxcDB-vMeeEn2kYdWakZBD15zciFx2Q54XHm67WrU&usqp=CAU" alt="" />
                </div>

                <p className='truncate'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                <p><strong>Localização:</strong></p>
                <p><strong>Preço:</strong></p>
            </div>

            <div className="embla__slide">
                <div className='cont_img'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR44D-vqC_gjDOPPAtfnJDp6Au8fTVxcDB-vMeeEn2kYdWakZBD15zciFx2Q54XHm67WrU&usqp=CAU" alt="" />
                </div>

                <p className='truncate'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                <p><strong>Localização:</strong></p>
                <p><strong>Preço:</strong></p>
            </div>

            <div className="embla__slide overflow-hidden text-ellipsis whitespace-nowrap ">
                <div className='cont_img'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR44D-vqC_gjDOPPAtfnJDp6Au8fTVxcDB-vMeeEn2kYdWakZBD15zciFx2Q54XHm67WrU&usqp=CAU" alt="" />
                </div>

                <p className='truncate'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                <p><strong>Localização:</strong></p>
                <p><strong>Preço:</strong></p>
            </div>

            <div className="embla__slide">
                <div className='cont_img'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR44D-vqC_gjDOPPAtfnJDp6Au8fTVxcDB-vMeeEn2kYdWakZBD15zciFx2Q54XHm67WrU&usqp=CAU" alt="" />
                </div>

                <p className='truncate'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                <p><strong>Localização:</strong></p>
                <p><strong>Preço:</strong></p>
            </div>

          </div>
        </div>
  )
}

export default EmblaCarousel