import AOS from 'aos';
import 'aos/dist/aos.css';
import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import bgimg_section from './assets/image/img_header/fundo_header.png'

import bg_img from './assets/image/img_header/texto_transparent.png'




import 'swiper/css';
import EmblaCarousel from './components/EmblaCarousel.jsx'
import Imoveis from './components/Imoveis.jsx'
import DetalheImovel from '../page/DetalheImovel.jsx'

function App() {
    AOS.init();
  return (
   <div id='main' className='grid grid-cols-1 grid-rows-[50px_1fr_200px] min-h-screen relative @7xl:w-7xl @7xl:my-auto '>
     
        <Header/>

        <Outlet/>

        <Footer/>
   </div>
  )
}

export default App
