const usuario = new Usuario()
const pergunta = new Pergunta()
// const resposta = new Resposta()

const btnPerguntaCima = document.querySelector("#btn-pergunta-cima")
const btnPerguntaBaixo = document.querySelector("#btn-pergunta-baixo")

btnPerguntaCima.addEventListener("click", () => {
    pergunta.adicionarVoto()
})

btnPerguntaBaixo.addEventListener("click", () => {
    pergunta.removerVoto()
})

window.addEventListener("DOMContentLoaded", () => {
    usuario.mostrarUsuarioLogado()
    pergunta.mostrarPergunta()
    // resposta.mostrarResposta()
})
