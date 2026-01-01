import CardsImoveis from "./cards/CardsImoveis"
import car from "../data/imoveis.json"
import SearchBar from "./search/SearchBar.jsx"
import {useState} from "react"
import SecaoImoveis from "./SecaoImoveis.jsx"
function Imoveis(){

    const [mostrarArrendar, setMostrarArrendar] = useState(false);
    const [mostrarAluguel, setMostrarAluguel] = useState(false);
    const [mostrarVenda, setMostrarVenda] = useState(false);

    return(
        
            <div id="cont_car" className=" max-w-7xl mx-auto px-4 row-start-2 row-end-3  p-2.5 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-gray-800 [&_h2]:py-5 [&_h2]:text-shadow-2xs">


            {/* Pesquisa */}
           
                <div className=" max-sm:bg-gray-300 rounded-lg mt-2.5">
                    <SearchBar  />
                </div>
        
            {/* Resultados */}
            <div className="flex justify-between items-center mt-4 mb-2">
                <p className="text-gray-600"> {car.arrendar.length + car.alugel.length + car.venda.length} Imóveis encontrados</p>

                <select className="input hidden md:block">
                    <option>Ordenar por</option>
                    <option>Menor preço</option>
                    <option>Mais recentes</option>
                </select>
            </div >

            <SecaoImoveis
                titulo="Imóvel para Arrendar"
                dados={car.arrendar}
            />



            <SecaoImoveis
                titulo="Imóvel em Aluguel"
                dados={car.alugel}
            />

            <SecaoImoveis
                titulo="Imóvel à Venda"
                dados={car.venda}
            />

                
            </div>
       
    )
}

export default Imoveis