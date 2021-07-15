const falar = {
  falar() {
    console.log(`${this.nome} está falando`)
  },
}

const beber = {
  beber() {
    console.log(`${this.nome} está bebendo`)
  },
}

const comer = {
  comer() {
    console.log(`${this.nome} está comendo`)
  },
}

const pessoaPrototype = Object.assign( {}, falar, comer, beber )

function CriaPessoa (nome, sobrenome) {
  return Object.create(pessoaPrototype, {
    nome: {value: nome},
    sobrenome: {value: sobrenome},
  })

}

const p1 = CriaPessoa('João', 'Vieira')
const p2 = CriaPessoa('Leonardo', 'DaVinci')

console.log(p1.falar)
console.log(p2.comer)
console.log(p2.beber)

