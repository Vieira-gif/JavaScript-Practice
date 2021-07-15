function Produto (nome, preco, estoque) {
  this.nome = nome
  this.preco = preco

  let estoquePrivado = estoque
  Object.defineProperty(this, 'estoque', {
    enumerable: true,
    // value: estoque,
    // writable: false,
    configurable: true,
    get: () => {
      return estoquePrivado
    },
    set: valor => {
      if (typeof valor !== 'number') {
        throw new TypeError('É necessario que seja um numero')
      }

      estoquePrivado = valor
    }
  })
}

function criaProduto (nome) {
  return {
    get nome () {
      return nome
    },

    set nome (valor) {
      nome = valor
    }
  }
}
/*
const p1 = new Produto('Camiseta', 29.99, 30)
p1.estoque = 10
console.log(p1.estoque) */

const p2 = criaProduto('Calça')
p2.nome = 'LELEL'
console.log(p2.nome)
