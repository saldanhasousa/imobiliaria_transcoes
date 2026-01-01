import React from 'react'
import {Link} from 'react-router-dom'
import { MdOutlineBedroomChild } from "react-icons/md";
import { FaBath } from "react-icons/fa";
const CardsImoveis = ({titulo, preco, local, image, estado, id}) => {
  return (
    

        <div className='bg-gray-400/5 rounded-t-xl rounded-b-lg  h-85 shadow hover:shadow-lg transition hover:scale-105 duration-300 '>

            <div id="contain_img" className=' w-full h-[55%] relative [&_img]:rounded-t-xl [&_img]:w-full [&_img]:h-full'>

                <div id='estado' className=' font-bold rounded-4xl text-gray-500 bg-amber-100 right-1.5 p-1 top-2 z-10 absolute '>
                    {estado}
                </div>

                <img src={image} className='' alt="" object-cover/>
         

            </div>

          <div className='font-light *:truncate p-1'>
              <h3 className='font-semibold'>
                  {titulo}
              </h3>

              <p className=''>
                  {local}
              </p>

              <p className=' text-sm text-gray-500'>
                  {preco}
              </p>

          </div>

         
          <div id="part" className='flex  justify-evenly border-t p-1 border-gray-400 gap-2.5'>
              
              <p className='flex'>
                  <MdOutlineBedroomChild className='w-6 h-6 text-gray-400' /> (2)
              </p>

              <p className='flex'>

                  <FaBath className='text-gray-400 w-6 h-6' />(4)
              </p>

          </div>
          <button className=' w-full bg-gray-700 rounded-lg py-1 text-gray-200 text-center'><Link className='cursor-pointer ' to={`/detalheImove/${id}`}>Detalhes</Link></button>

        </div>
    
  )
}

export default CardsImoveis