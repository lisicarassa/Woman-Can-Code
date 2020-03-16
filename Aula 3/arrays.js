// armazena o input de texto usando getElementById em uma const
const inputText = document.getElementById("tecnologias");

// Inicializa o array que irá armazenar esses dados
let arrayDeTecnologias = []

// cria a função adicionaTecnologia
function adicionaTecnologia() {
  // adiciona a tecnologia digitada no campo ao array, para pegar o valor foi utilizado inputText.value
  arrayDeTecnologias.push(inputText.value)
  // mostra o array final no console do navegador usando console.log
  console.log(arrayDeTecnologias)
}
function RemoverTecnologia(){
  arrayDeTecnologias.pop()
  console.log(arrayDeTecnologias)
}