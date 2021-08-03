class DispositovoEletronico {
  constructor(nome) {
    this.nome = nome
    this.ligado = false
  }

  ligar() {
    if (this.ligado){
      console.log(`${this.nome} já ligado`)
      return
    }

    this.ligado = true
  }

  desligar() {
    if (!this.ligado){
      console.log(`${this.nome} já desligado`)
      return
    }

    this.ligado = false
  }
}

//const d1 = new DispositovoEletronico('Smarthphone')

class Smarthphone extends DispositovoEletronico {
  constructor(nome, cor, modelo) {
    super(nome) // super() é chamar o construtor da classe pai | ex: super(cliente, endereço, numero, pedido e etc...)
    this.cor = cor
    this.modelo = modelo
  }
}

const s1 = new Smarthphone('Samsung', 'Preto', 'Galaxy S10')
//s1.ligar()
//console.log(s1)

class Tablet extends DispositovoEletronico {
  constructor(nome, wifi){
    super(nome)
    this.wifi = wifi
  }

  // Como foi alterado o metodo ligar, ele não teoricamente 'ligaria' o tablet
  ligar(){
    console.log('Você alterou o metodo ligar')
  }
  
}

const t1 = new Tablet('iPad', true)
t1.ligar()
console.log(t1)