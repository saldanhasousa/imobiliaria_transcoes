import React from 'react'
import { useState } from 'react'
const Cadastro = () => {
    const img_fundo = "https://www.utopia-projectos.com/wp-content/uploads/2023/06/casas.webp"

    // Conectar com api 

    const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [telefone, setTelefone] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const usuario = { nome, email, telefone, senha };

    try {
      const response = await fetch("http://localhost:8080/usuarios", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(usuario),
      });

      if (response.ok) {
        setMensagem("Usuário cadastrado com sucesso!");
        setNome("");
        setEmail("");
        setTelefone("");
        setSenha("");
      } else {
        const data = await response.json();
        setMensagem(`Erro: ${data.message || "Não foi possível cadastrar"}`);
      }
    } catch (error) {
      setMensagem(`Erro: ${error.message}`);
    }
  };


  return (
    <div className='relative w-screen h-screen bg-center bg-cover bg-no-repeat ' style={{backgroundImage: `url(${img_fundo})`, backgroundColor: '#fff'}}>
        <section>
            

            <div className="conatainer_form absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  w-60 bg-gray-400/30 backdrop-blur-xl text-center rounded-2xl shadow-[0_0_10px] shadow-black/30">
                <h1 className='my-5 font-bold text-2xl'>Cadastro</h1>

                <form onSubmit={handleSubmit} className='*:[&_input]:rounded-md *:[&_input]:border *:[&_input]:bg-white/50 *:[&_input]:outline-none *:[&_input]:border-gray-300 *:[&_input]:pl-2.5 flex items-center flex-col gap-3.5'>
                    <div>
                          <input type="text" placeholder='Nome completo'
                              value={nome}
                              onChange={(e) => setNome(e.target.value)}
                              required
                        />
                    </div>

                    <div>
                          <input type="email" placeholder='email'
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              required
                        />
                    </div>

                    <div>
                        <input type="number" placeholder='Telefone'
                        value={telefone}
                        onChange={(e) => setTelefone(e.target.value)}
                        />
                    </div>

                    <div>
                        <input type="password" placeholder='Password' 
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        required
                        
                        />
                    </div>

                    {/* <div>
                        <input type="password" placeholder='Confirme' />
                    </div> */}

                    <input type="submit"  className='mb-5 font-bold p-1  rounded-[5px] bg-gray-400/70 hover:bg-white/40 w-[50%] shadow-[0_0_10px] shadow-gray-600/70 cursor-pointer'/>
                </form>

                {mensagem && <p>{mensagem}</p>} 
            </div>
        </section>
    </div>
  )
}

export default Cadastro