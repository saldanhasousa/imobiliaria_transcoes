import React from 'react'
import { TIPO_CONTRATO, ESTADO_CONTRATO, ESTADO_IMOVEL } from '../../constants/enums'


const ImovelForm = ({form, setForm, onSubmit}) => {
    function handleChange(e){
        const {name, value} = e.target
        setForm({ ...form, [name]: value})
    }

    function handleLocalizacao(e){
        const { name, value } = e.target
        setForm(prev => ({
            ...prev, localizacao: {
                ...prev.localizacao, [name]: value
            }
        }))
    }

    function handleFile(e) {
        setForm({ ...form, [e.target.name]: e.target.files[0] });
      }
    
  return (
    <div id="container_form" className='w-screen h-screen pt-5'>
      
      <form onSubmit={onSubmit} className="w-[500px] m-auto p-5  gap-2.5 flex flex-col bg-blue-300 [&_input,textarea]:bg-white [&_input]:p-1.5   [&_select]:bg-white *:rounded-[5px]">

        <h1 className='font-bold text-[2em]'>Cadastrar Imóvel</h1>


        <input
        required
          name="imail"
          placeholder="Email do proprietário"
          value={form.imail}
          onChange={handleChange}
          className="input"
          type='email'
        />
        <input
        required
          name="titulo"
          placeholder="Título"
          value={form.titulo}
          onChange={handleChange}
          className="input"
        />
       
        <input
        required
          name="preco"
          type="number"
          value={form.preco}
          onChange={handleChange}
          className="input" placeholder='preço'
        />
        {/* ENUMS */}

        <div className='flex gap-2.5 justify-evenly'>
          <select name="tipoContrato" onChange={handleChange} className="input">
            <option value="">Tipo de contrato</option>
            {TIPO_CONTRATO.map(o => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
          <select
            name="estadoContrato"
            value={form.estadoContrato}
            onChange={handleChange}
            className="input"
          >
            <option value="">Estado do contrato</option>
            {ESTADO_CONTRATO.map(o => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
          <select name="estadoImovel" onChange={handleChange} className="input">
            <option value="">Estado do imóvel</option>
            {ESTADO_IMOVEL.map(o => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
        </div>
        {/* LOCALIZAÇÃO */}
        <input
        required
          name="provincia"
          placeholder="Província"
          value={form.localizacao.provincia}
          onChange={handleLocalizacao}
          className="input"
        />

<input
        required
          name="municipio"
          placeholder="Município"
          onChange={handleLocalizacao}
          className="input"
          value={form.localizacao.municipio}
        />
        <input
          name="bairro"
          placeholder="Bairro"
          onChange={handleLocalizacao}
          className="input"
          value={form.localizacao.bairro}
        />

        <input

          name="servicosSociais"
          placeholder="Serviços sociais (ex: água, luz, escola...)"
          value={form.localizacao.servicosSociais}
          onChange={handleLocalizacao}
          className="input"
        />
        

        {/* Descrição */}
              <textarea
          name="descricao"
          placeholder="Descrição"
          value={form.descricao}
          onChange={handleChange}
          className="input"
        />


        {/* IMAGENS */}
        <input required type="file" name="imagem1" onChange={handleFile} />
        <input required type="file" name="imagem2" onChange={handleFile} />
        <input required type="file" name="imagem3" onChange={handleFile} />
          
         


        <button type="submit" className="bg-blue-600 text-white p-2 rounded">
          Cadastrar Imóvel
        </button>
      </form>
    </div>
  )
}

export default ImovelForm