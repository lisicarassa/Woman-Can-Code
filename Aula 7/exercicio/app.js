const tecnologias = document.querySelector("#tecnologias")
const limpar = document.querySelector("#limpar")
tecnologias.addEventListener("click", function (event){
    const target = event.target
    target.classList.add("clicado")
})
document.querySelector('#tecnologias li').addEventListener('click', function (event){
    event.target.classList.toggle("clicado")
    event.stopPropagation()
})
tecnologias.addEventListener("dblclick", function (event){
    const target = event.target
    if (target.classList.contains("clicado")) {
        target.classList.remove("clicado")
    }
})
limpar.addEventListener("click", function (){
    tecnologias.remove()
    document.body.appendChild(tecnologias)
})