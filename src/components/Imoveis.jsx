import CardsImoveis from "./cards/CardsImoveis"
import car from "../data/imoveis.json"

function Imoveis(){
    return(
        
            <div id="cont_car" className="flex gap-2.5  items-center justify-evenly flex-wrap row-start-2 row-end-3 mt-12 mb-12">
                {car.arrendar.map((info) => (
                    <CardsImoveis 
                        key={info.id}
                        titulo={info.titulo}
                        estado={info.estado}
                        preco={info.preco}
                        local={info.local}
                        image={info.image}
                    />
                ))}

                
                {car.alugel.map((info) => (
                    <CardsImoveis 
                        key={info.id}
                        titulo={info.titulo}
                        estado={info.estado}
                        preco={info.preco}
                        local={info.local}
                        image={info.image}
                    />
                ))}

                
                {car.venda.map((info) => (
                    <CardsImoveis 
                        key={info.id}
                        titulo={info.titulo}
                        estado={info.estado}
                        preco={info.preco}
                        local={info.local}
                        image={info.image}
                    />
                ))}

                
            </div>
       
    )
}

export default Imoveis