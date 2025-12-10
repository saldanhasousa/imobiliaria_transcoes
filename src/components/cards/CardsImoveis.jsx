import React from 'react'

const CardsImoveis = ({titulo, preco, local, image, estado}) => {
  return (
    

        <div className='bg-gray-400/5 rounded-xl w-52 h-80 shadow-[0_0_10px] shadow-black/30'>

            <div id="contain_img" className='[&_button]:border [&_button]:border-gray-200 [&_button]:text-white  [&_button]:w-8  [&_button]:absolute [&_button]:bottom-1 [&_button]:font-bold [&_button]:z-10 [&_button]:bg-white/50   [&_button]:rounded-[50%] w-full h-[58%] relative [&_img]:rounded-tl-xl [&_img]:rounded-tr-xl [&_img]:w-full [&_img]:h-full'>

                <div id='estado' className=' font-bold rounded-4xl text-gray-500 bg-amber-100 right-1.5 p-1 top-2 z-10 absolute '>
                    {estado}
                </div>

                <img src={image} className='' alt="" />
                {/* <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" /> */}

                <button className='right-10'>
                    &lt;
                </button>

                <button className='right-1.5'>
                    &gt;
                </button>
            </div>

            <div className='font-light h-[30%] *:truncate p-1'>
                <p className='italic text-black/50'>
                    <abbr title={titulo} className='no-underline'>{titulo}</abbr>
                </p>

                <p className=''> 
                    <abbr title={local} className='no-underline'>{local}</abbr> 
                </p>

                <p className='font-bold text-gray-500 text-[1.5em]'>
                    <abbr title={preco} className='no-underline'>{preco}</abbr>
                    </p>
            </div>

                

            <div className='text-center'>
                <button className='bg-yellow-300/40 hover:bg-amber-400/40 p-1 w-32 rounded-md font-bold text-gray-600 '>Detalhes</button>
            </div>
        </div>
    
  )
}

export default CardsImoveis