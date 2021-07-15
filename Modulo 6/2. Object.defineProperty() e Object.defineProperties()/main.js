function Produto (nome, preco, estoque) {

  Object.defineProperty(this, 'estoque', {
    enumerable: true, // mostra a chave? (no Object.keys e no for in)
    value: estoque, // valor da chave
    writable: false, // alteravel?
    configurable: true // reconfiguravel, deletavel? | se aqui for true, pode ser feito outra ultilização do defineProperty da mesma chave, ou seja, valida outra alteração da propiedade da mesma chave. Por exemplo abaixo, 
  })

  /* 
  Object.defineProperty(this, 'estoque', {
    enumerable: true, // mostra a chave?
    value: estoque, // valor da chave
    writable: false, // alteravel?
    configurable: false // reconfiguravel, deletavel?
  })
  */

  Object.defineProperties(this, {
    nome: {
      enumerable: true,
      value: nome,
      writable: false,
      configurable: false
    },
    preco: {
      enumerable: true,
      value: preco,
      writable: false,
      configurable: false
    },
  })
}

const p1 = new Produto('Camiseta', 29.99, 30)
/*
p1.estoque = 50000
delete p1.estoque
console.log(p1)
*/

console.log(p1)