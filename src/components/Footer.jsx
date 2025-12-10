function Footer(){
    return(
        <footer className=" row-end-4 row-start-3 bg-gray-400 flex justify-evenly gap-0.5 p-2 **:font-bold">
            <div className="informacaof">
                <h2>Redes</h2>
               <ul>
                <li>Facebook</li>
                <li>WhatsaPP</li>
                <li>Instagram</li>
               </ul>
            </div>

            <div className="informacaof">
            <h2>Contactos</h2>
            <ul>
                <li>(+244) 92x xxx xxx</li>
                <li>E-mail</li>
                <li></li>
            </ul>
            </div>

            <div className="informacaof">
                <h2>Links</h2>
                <ul>
                    <li>Home</li>
                    <li>Imoveis</li>
                    <li>Aprenda</li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer