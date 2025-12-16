export async function cadastrarImovel(form) {
    const data = new FormData();
  
    Object.keys(form).forEach(key => {
      if (key === "localizacao") {
        data.append("localizacao", JSON.stringify(form.localizacao));
      } else {
        data.append(key, form[key]);
      }
    });
  
    return fetch("http://localhost:8080/imovel", {
      method: "POST",
      body: data
    });
  }
  