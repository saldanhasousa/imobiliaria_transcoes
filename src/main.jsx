import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom";

import './index.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import App from './App.jsx'
import Imoveis from './components/Imoveis.jsx';
import Cadastro from '../page/Cadastro.jsx';
import Home from './components/Home.jsx';
import Aprenda from './components/Aprenda.jsx';
import Sobre from './components/Sobre.jsx';
import Contactos from './components/Contactos.jsx';
import ListaUsuario from './components/ListaUsuario.jsx';
import Administrador from './modules/administrador/Administrador.jsx';
import DetalheImovel from '../page/DetalheImovel.jsx';
import ImovelCadastro from '../page/ImovelCadastro.jsx';
import ListaImoveis from './components/ListaImovel.jsx';


AOS.init();

const router = createBrowserRouter([
  {path: "/", element: <App/>,
    children:[
      {path: "/", element: <Home />},
      {path: "/imoveis", element: <Imoveis/>},
      {path: "/detalheImove/:id", element: <DetalheImovel/>},
      {path: "/aprenda", element: <Aprenda/>},
      {path: "/sobre", element: <Sobre/>},
      {path: "/contactos", element: <Contactos/>},

    ],
  },
  
  {path: "/cadastro", element: <Cadastro/>},
  {path: "/detalheImovel", element: <DetalheImovel/>},
  {path: "/imovelCadastro", element: <ImovelCadastro/>},
  
  {path: "/administrador", element: <Administrador/>, 
    children:[
      {path: "listUsuario", element: <ListaUsuario/>},
      {path: "listImoveis", element: <ListaImoveis/>}
    ]
  },
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>

      <RouterProvider router={router} />

  </StrictMode>
)
