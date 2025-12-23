import React, { useState } from 'react'
import ImovelForm from '../src/components/imovel/ImovelForm'
import { cadastrarImovel } from '../src/services/imovelService'

const ImovelCadastro = () => {
    const [form, setForm] = React.useState({
        titulo: "",
        descricao: "",
        preco: "",
        tipoContrato: "",
        estadoContrato: "",
        estadoImovel: "",
        imail: "",
    
        localizacao: {
          provincia: "",
          municipio: "",
          bairro: "",
          servicosSociais: ""
        },
    
        imagem1: null,
        imagem2: null,
        imagem3: null
      });

  const handleSubmit = async (e) => {
    e.preventDefault()

    const formData = new FormData()

    formData.append("titulo", form.titulo)
    formData.append("descricao", form.descricao)
    formData.append("preco", form.preco)
    formData.append("tipoContrato", form.tipoContrato)
    formData.append("estadoContrato", form.estadoContrato)
    formData.append("estadoImovel", form.estadoImovel)
    formData.append("imail",  form.imail.trim())

    // LOCALIZAÇÃO (tem que seguir o nome do DTO)
    formData.append("localizacao.provincia", form.localizacao.provincia)
    formData.append("localizacao.municipio", form.localizacao.municipio)
    formData.append("localizacao.bairro", form.localizacao.bairro)
    formData.append("localizacao.servicosSociais", form.localizacao.servicosSociais)

    // IMAGENS
    formData.append("imagem1", form.imagem1)
    formData.append("imagem2", form.imagem2)
    formData.append("imagem3", form.imagem3)

    try {
      console.log("Email enviado:", form.imail);
      const res = await fetch("http://localhost:8080/imovel", {
        method: "POST",
        body: formData
      })

      if (!res.ok) {
        throw new Error("Erro ao cadastrar imóvel")
      }

      alert("Imóvel cadastrado com sucesso")
    } catch (error) {
      console.error(error)
      alert("Erro ao cadastrar imóvel")
    }
    };

  return (
   
        <ImovelForm form={form} setForm={setForm} onSubmit={handleSubmit}/>
    
  )
}

export default ImovelCadastro