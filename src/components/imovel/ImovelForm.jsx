import React from 'react'
import { TIPO_CONTRATO, ESTADO_CONTRATO, ESTADO_IMOVEL } from '../../constants/enums'


const ImovelForm = ({form, setForm}) => {
    function handleChange(e){
        const {name, value} = e.target
        setForm({ ...form, [name]: value})
    }

    function handleLocalizacao(e){
        setForm({
            ...form, localizacao: {
                ...form.localizacao, [e.target.name]: e.target.value
            }
        })
    }

    function handleFile(e) {
        setForm({ ...form, [e.target.name]: e.target.files[0] });
      }
    
  return (
    <form className="max-w-3xl mx-auto space-y-4">

      <input
        name="titulo"
        placeholder="Título"
        value={form.titulo}
        onChange={handleChange}
        className="input"
      />

      <textarea
        name="descricao"
        placeholder="Descrição"
        value={form.descricao}
        onChange={handleChange}
        className="input"
      />

      <input
        name="preco"
        type="number"
        value={form.preco}
        onChange={handleChange}
        className="input"
      />

      {/* ENUMS */}
      <select name="tipoContrato" onChange={handleChange} className="input">
        <option value="">Tipo de contrato</option>
        {TIPO_CONTRATO.map(o => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </select>

      <select name="estadoImovel" onChange={handleChange} className="input">
        <option value="">Estado do imóvel</option>
        {ESTADO_IMOVEL.map(o => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </select>

      {/* LOCALIZAÇÃO */}
      <input
        name="provincia"
        placeholder="Província"
        onChange={handleLocalizacao}
        className="input"
      />

      <input
        name="municipio"
        placeholder="Município"
        onChange={handleLocalizacao}
        className="input"
      />

      <input
        name="bairro"
        placeholder="Bairro"
        onChange={handleLocalizacao}
        className="input"
      />

      {/* IMAGENS */}
      <input type="file" name="imagem1" onChange={handleFile} />
      <input type="file" name="imagem2" onChange={handleFile} />
      <input type="file" name="imagem3" onChange={handleFile} />

      <button className="bg-blue-600 text-white p-2 rounded">
        Cadastrar Imóvel
      </button>

    </form>
  )
}

export default ImovelForm