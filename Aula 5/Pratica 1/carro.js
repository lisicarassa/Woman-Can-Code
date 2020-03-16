class Carro {
    constructor (marca, modelo, cor){
        this.marca = marca
        this.modelo = modelo
        this.cor = cor
    }
    acelerar(){
        return "acelerou"
    }
    freiar(){
        return "freiou"
    }
 }
const fiatuno = new Carro ("Fiat","Uno","preto");
const fordfiesta = new Carro ("Ford","Fiesta","verde")
const gol = new Carro ("Wolks","Gol","Azul")
console.log(fiatuno.marca,fiatuno.modelo,fiatuno.cor)
console.log(fiatuno.acelerar())
console.log(fiatuno.freiar())
console.log(fordfiesta.marca,fordfiesta.modelo,fordfiesta.cor)
console.log(fordfiesta.acelerar())
console.log(fordfiesta.freiar())
