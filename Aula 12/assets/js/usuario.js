class Usuario {
    constructor(){
        this.nome = document.querySelector("#nome")
        this.url = "http://localhost:3000/usuario"
    }

mostrarUsuarioLogado = async () => {
    const requisicao = { method: 'get' }

    let nome;

    await fetch(this.url, requisicao)
    .then(resposta => resposta.json())
    .then(dados => nome = dados.nome)

    localStorage.setItem("usuario", nome)
    this.nome.textContent = localStorage.getItem("usuario") 
    }
}