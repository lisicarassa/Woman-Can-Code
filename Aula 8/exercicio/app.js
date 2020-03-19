const mostrar = document.querySelector("#mostra-resposta")
const deletar = document.querySelector("#deletar-resposta")
const adicionar = document.querySelector("#adicionar-resposta")
const texto = document.querySelector("#sua-resposta")
adicionar.addEventListener("click", () => {
    localStorage.setItem("resposta", texto.value)
    texto.value = ''
    mostrar.innerHTML= localStorage.getItem("resposta")
})
deletar.addEventListener("click", () => {
    mostrar.innerHTML = ''
    localStorage.clear()
})
window.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("resposta")){
        mostrar.innerHTML= localStorage.getItem("resposta")
    }
})