// Produto -> aumento, desconto
// Camiseta = cor, Caneca = material

function Produto (nome, preco) {
  this.nome = nome,
  this.preco = preco
}

Produto.prototype.aumento = function (quantia) {
  this.preco += quantia
}
Produto.prototype.desconto = function (quantia) {
  this.preco -= quantia
}

function Camiseta (nome, preco, cor) {
  // Passando esse construtor, o nome e preço das instancias, para a construtora 'Produto'
  Produto.call(this, nome, preco)
  this.cor = cor
}

Camiseta.prototype = Object.create(Produto.prototype)
Camiseta.prototype.constructor = Camiseta

Camiseta.prototype.aumento = function (percentual) {
  this.preco = this.preco + (this.preco * (percentual / 100))
}

function Caneca (nome, preco, material, estoque) {
  Produto.call(nome, preco)
  this.material = material
  Object.defineProperty(this, 'estoque', {
    enumerable: true,
    configurable: false,
    get: function () { return estoque },
    set: function (valor) {
      if (typeof valor !== 'number') return
      estoque = valor
    }
  })
}

// O prototype de caneca é de Produto.prototype
Caneca.prototype = Object.create(Produto.prototype)
// a construtora é Caneca
Caneca.prototype.constructor = Caneca

const regata = new Camiseta('Oakley', 69.99, 'Preta')
const produto = new Produto('Gen', 111)
const canecaP = new Caneca('CanecaDarthVader', 16.99, 'Porcelana', 5)

console.log(regata)
console.log(produto)
console.log(canecaP)
