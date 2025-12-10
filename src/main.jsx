import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom";

import './index.css'
import App from './App.jsx'
import Imoveis from './components/Imoveis.jsx';
import Cadastro from '../page/Cadastro.jsx';
import Home from './components/Home.jsx';
import Aprenda from './components/Aprenda.jsx';
import Sobre from './components/Sobre.jsx';
import Contactos from './components/Contactos.jsx';
import ListaUsuario from './components/ListaUsuario.jsx';


const router = createBrowserRouter([
  {path: "/", element: <App/>,
    children:[
      {path: "/", element: <Home />},
      {path: "/imoveis", element: <Imoveis/>},
      {path: "/aprenda", element: <Aprenda/>},
      {path: "/sobre", element: <Sobre/>},
      {path: "/contactos", element: <Contactos/>},

    ],
  },
  
  {path: "/cadastro", element: <Cadastro/>},
  {path: "/listUsuario", element: <ListaUsuario/>},
])

createRoot(document.getElementById('root')).render(
  <StrictMode>

      <RouterProvider router={router} />

  </StrictMode>
)
