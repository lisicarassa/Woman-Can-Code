// defini a classe card
class Card {
  // cria a propriedade lista que contem a tag com ID Lista do HTML
  constructor (id="lista"){
  }

  // monta o HTML do card com os dados do JSON
  mostraNoticia(dados) {
    // cria uma variavel que ira armazenar todo esse HTML
    let card = './news.json'
    // faz o loop no array dados que armazena as noticias
    dados.forEach(function (elemento) {
      console.log("elemento", elemento)
      // adiciona a variavel card todo o HTML com as informações
      // += serve para adicionar sem sobrescrever
      card += `
      <div class="card">
        <h2></h2>
        <p></p>
        <a href="" target="_blank">Link para a noticia</a>
      </div>
      `
    })
    
  }
}
