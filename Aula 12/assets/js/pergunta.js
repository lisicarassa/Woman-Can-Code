class Pergunta {
    
    constructor () { 
        this.titulo = document.querySelector("#titulo")
        this.conteudo = document.querySelector("#pergunta-conteudo")
        this.tags = document.querySelector("#tags")
        this.votos = document.querySelector("#pergunta-votos")
        this.data = document.querySelector("#pergunta-data")
        this.usuario = document.querySelector("#pergunta-usuario")
        this.url = "http://localhost:3000/pergunta"
    }
    
    mostrarPergunta = async () => {
        const requisicao = { method: 'get'}
        
        await fetch(this.url, requisicao)
        .then(resposta => resposta.json())
        .then(dados => {
            this.titulo.textContent = dados.titulo
            this.conteudo.textContent = dados.conteudo
            this.tags.textContent = dados.tags
            this.votos.textContent = dados.votos
            this.data.textContent = dados.data
            this.usuario.textContent = dados.usuario
            
        })
    }
    
    adicionarVoto = async () => {
        
        let votos = parseInt(this.votos.textContent)
        
        votos += 1;
        
        const requisicao = {
            headers: { "Content-Type": "application/json" },
            method: 'put',
            body: JSON.stringify({
                titulo: this.titulo.textContent,
                conteudo: this.conteudo.textContent,
                tags: this.tags.textContent,
                votos: votos.toString(),
                data: this.data.textContent,
                usuario: this.usuario.textContent,
            })
        }
        
        await fetch(this.url, requisicao)
        .then(resposta => resposta.json())
        .then(dados => {
            this.titulo.textContent = dados.titulo
            this.conteudo.textContent = dados.conteudo
            this.tags.textContent = dados.tags
            this.votos.textContent = dados.votos
            this.data.textContent = dados.data
            this.usuario.textContent = dados.usuario
        })
    }
    
    removerVoto = async () => {
        
        let votos = parseInt(this.votos.textContent)
        
        votos -= 1;
        
        const requisicao = {
            headers: { "Content-Type": "application/json" },
            method: 'put',
            body: JSON.stringify({
                titulo: this.titulo.textContent,
                conteudo: this.conteudo.textContent,
                tags: this.tags.textContent,
                votos: votos.toString(),
                data: this.data.textContent,
                usuario: this.usuario.textContent,
            })
        }
        
        await fetch(this.url, requisicao)
        .then(resposta => resposta.json())
        .then(dados => {
            this.titulo.textContent = dados.titulo
            this.conteudo.textContent = dados.conteudo
            this.tags.textContent = dados.tags
            this.votos.textContent = dados.votos
            this.data.textContent = dados.data
            this.usuario.textContent = dados.usuario
        })
    }
}
