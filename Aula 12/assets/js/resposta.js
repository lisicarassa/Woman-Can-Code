class Resposta {
  constructor() {
    this.answers = document.querySelector("#answers")
    this.url = "http://localhost:3000/respostas"
    this.text = document.querySelector("#message_body")
  }
  mostrarResposta = async () => {
    const requisicao = { method: 'get'}
    
    await fetch(this.url, requisicao)
    .then(resp => resp.json())
    .then(respostas => {
      let answersHTML = `
      <h3>1 resposta(s)</h3>
      <ul>`
      respostas.forEach(resposta => {
        
        answersHTML +=`
        <hr>
        <li>
        <table class="fw" id="message-${resposta.id}">
        <tbody>
        <tr>
        <td class="votecell" rowspan="2">
        <div class="vote">
        <div class="text-center">
        <a class="vote-up disabled" data-answer="${resposta.id}">
        <span class="glyphicon glyphicon-circle-arrow-up"></span>
        </a>
        </div>
        <div id="votos" class="score text-center">${resposta.votos}</div>
        <div class="text-center">
        <a class="vote-down disabled">
        <span class="glyphicon glyphicon-circle-arrow-down"></span>
        </a>
        </div>
        </div>
        </td>
        <td class="postcell">
        <div class="col-md-10">
        
        <p>${resposta.conteudo}</p>
        </div>
        <div class="col-md-2">
        <a href="#" class="btn btn-danger" title="deletar">
        <i class="glyphicon glyphicon-trash"></i></a>
        </div>
        <table class="user-info">
        <tbody>
        <tr>
        </tr>
        <tr>
        <td colspan="2">Respondido em <br>
        <time>${resposta.data}</time>
        </td>
        </tr>
        <tr>
        <td class="avatar"><img alt="testuser" height="30"
        src="http://gravatar.com/avatar/85e3339e2c78f081802575f4e8081792?default=identicon&amp;size=30"
        width="30"></td>
        <td><a href="">${resposta.usuario}</a></td>
        </tr>
        </tbody>
        </table>
        <p></p>
        </td>
        </tr>
        </tbody>
        </table>
        </li>
        `
        
      });
      
      answersHTML += `
      <hr>
      </ul>`
      
      this.answers.innerHTML = answersHTML; 
    })
  }

  postar = async () => {
    const requisicao = {
      headers: { "Content-Type": "application/json" },
      method: 'post',
      body: JSON.stringify({
        "conteudo": this.text.value,
        "votos": 0,
        "data": "22 de março de 2020",
        "usuario": localStorage.getItem("usuario"),
      })
    }
    await fetch (this.url, requisicao)
    this.mostrarResposta();
  }

  adicionarVoto = async (id) => {
    const currentAnswer = await fetch(`${this.url}/${id}`, {method: 'get'}).then(r => r.json());
    const requisicao = {
            headers: { "Content-Type": "application/json" },
            method: 'put',
            body: JSON.stringify({
              id: currentAnswer.id,
              conteudo: currentAnswer.conteudo,
              data: currentAnswer.data,
              usuario: currentAnswer.usuario,
              votos: currentAnswer.votos + 1
            })
          }
    await fetch (`${this.url}/${id}`, requisicao)
    this.mostrarResposta();
  }
  
}