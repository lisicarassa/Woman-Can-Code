const usuario = new Usuario()
const pergunta = new Pergunta()
const resposta = new Resposta()

const btnPerguntaCima = document.querySelector("#btn-pergunta-cima")
const btnPerguntaBaixo = document.querySelector("#btn-pergunta-baixo")
const btnPostarResposta = document.querySelector("#btn-postar-resposta")

btnPerguntaCima.addEventListener("click", () => {
    pergunta.adicionarVoto()
})

btnPerguntaBaixo.addEventListener("click", () => {
    pergunta.removerVoto()
})
btnPostarResposta.addEventListener("click", async () => {
   await resposta.postar()
   resposta.mostrarResposta()
})

window.addEventListener("DOMContentLoaded", () => {
    usuario.mostrarUsuarioLogado()
    pergunta.mostrarPergunta()
    resposta.mostrarResposta()
})
