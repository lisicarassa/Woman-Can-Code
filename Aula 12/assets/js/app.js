const usuario = new Usuario()
const pergunta = new Pergunta()
const resposta = new Resposta()

const btnPerguntaCima = document.querySelector("#btn-pergunta-cima")
const btnPerguntaBaixo = document.querySelector("#btn-pergunta-baixo")
const btnPostarResposta = document.querySelector("#btn-postar-resposta")
const answers = document.querySelector("#answers")

btnPerguntaCima.addEventListener("click", () => {
    pergunta.adicionarVoto()
})

btnPerguntaBaixo.addEventListener("click", () => {
    pergunta.removerVoto()
})
btnPostarResposta.addEventListener("click", async () => {
   await resposta.postar()
})
answers.addEventListener("click", (event) => {
    if (event.target.parentElement.classList.contains('vote-up')) {
        const idAnswer = event.target.parentElement.getAttribute("data-answer") 
        resposta.adicionarVoto(idAnswer)
    }
})

window.addEventListener("DOMContentLoaded", () => {
    usuario.mostrarUsuarioLogado()
    pergunta.mostrarPergunta()
    resposta.mostrarResposta()
})
