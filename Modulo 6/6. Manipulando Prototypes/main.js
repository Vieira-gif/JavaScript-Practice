function Produto (nome, preco) {
  this.nome = nome
  this.preco = preco
}

Produto.prototype.desconto = function (percentual) {
  this.preco = this.preco - (this.preco * (percentual / 100))
}

Produto.prototype.acrescimo = function (percentual) {
  this.preco = this.preco + (this.preco * (percentual / 100))
}

const produto1 = new Produto('Camiseta', 50)
// produto1.desconto(100)
// produto1.acrescimo(100)

const produto2 = {
  nome: 'Caneca',
  preco: 15
}
Object.setPrototypeOf(produto2, Produto.prototype)
// produto2.desconto(100)
// produto2.acrescimo(100)

// console.log(produto2.preco)

const produto3 = Object.create(Produto.prototype, {
  preco: {
    writable: true,
    configurable: true,
    enumerable: true,
    value: 113
  }, 
  tamanho: {
    writable: true,
    configurable: true,
    enumerable: true,
    value: 42
  }, 

})

produto3.acrescimo(10)


/* produto3.preco = 133
produto3.acrescimo(10)  */

console.log(produto3)

