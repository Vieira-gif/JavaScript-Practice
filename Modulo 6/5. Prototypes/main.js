function Pessoa (nome, sobrenome) {
  this.nome = nome
  this.sobrenome = sobrenome
  // this.nomeCompleto = () => `ORIGINAL: ${this.nome} ${this.sobrenome}`
}

// Functions Arrow não funciona no prototype

Pessoa.prototype.nomeCompleto = function () {
  // Se esse metodo coexistir na função construtora, ele sera sobrescrito pela que está na função.
  return `${this.nome} ${this.sobrenome}`
}

const pessoa1 = new Pessoa('João', 'V.')
const pessoa2 = new Pessoa('Leonardo', 'D.')

console.log(pessoa1.nomeCompleto())
console.dir(pessoa2.nomeCompleto())
