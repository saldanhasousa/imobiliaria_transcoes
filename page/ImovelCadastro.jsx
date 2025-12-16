import React, { useState } from 'react'
useState
import ImovelForm from '../src/components/imovel/ImovelForm'

const ImovelCadastro = () => {
    const [form, setForm] = useState({
        titulo: "",
        descricao: "",
        preco: "",
        tipoContrato: "",
        estadoContrato: "PENDENTE",
        estadoImovel: "",
        email: "",
    
        localizacao: {
          provincia: "",
          municipio: "",
          bairro: ""
        },
    
        imagem1: null,
        imagem2: null,
        imagem3: null
      });
  return (
   
        <ImovelCadastro form={form} setForm={setForm}/>
    
  )
}

export default ImovelCadastro