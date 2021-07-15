class Pessoa {
  constructor(nome, sobrenome){
    this.nome = nome
    this.sobrenome = sobrenome
  }

  falar() {
    console.log(`${this.nome} está falando.`)
  }

  comer() {
    console.log(`${this.nome} está comendo.`)
  }

  beber() {
    console.log(`${this.nome} está bebendo.`)
  }
}

/*
Ao usar classe, os metodos ficam no prototype da classe e não nas instancias, deixando mais otimizado. 

*/ 

const p1 = new Pessoa('Arthur', 'Morgan')
const p2 = new Pessoa('John', 'Marston')
const p3 = new Pessoa('Hosea', 'Matthews')
const p4 = new Pessoa('Sadie', 'Adler')

console.log(p1)

// Função construtora

function Pessoa2 (nome, sobrenome) {
  this.nome = nome
  this.sobrenome = sobrenome
}

Pessoa2.prototype.falar = function () {
    console.log(`${this.nome} está falando.`)
}

const p5 = new Pessoa2('Dutch', 'van der Linde')

console.log(p5)