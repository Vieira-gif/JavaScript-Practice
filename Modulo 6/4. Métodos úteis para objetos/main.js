// usando ' ... ' <- não passa o produto1 para o produto2 por referencia
const produto1 = { nome: 'Lapis', preco: 2.50 }
const produto2 = { ...produto1, material: 'Plastico' }

produto2.nome = 'Capacete'
produto2.preco = 15.62

/* console.log(produto1)
console.log(produto2)
 */

const produto3 = { nome: 'Lapis', preco: 2.50 }
const produto4 = Object.assign({}, produto3, { material: 'plastico' })

produto4.nome = 'Capacete'
produto4.preco = 15.62

/* console.log(produto3)
console.log(produto4) */

const produto5 = { nome: 'Lapis', preco: 2.50 }
Object.freeze(produto5)
delete produto5.preco

// console.log(produto5)

const produto6 = Object.assign({}, produto5, { material: 'plastico' })

// console.log(Object.keys(produto6))

const produto7 = { nome: 'Lorem ipsum', preco: 1.62 }
Object.defineProperty(produto7, 'nome', {
  writable: false,
  configurable: false
})

// console.log(Object.getOwnPropertyDescriptor(produto7, 'nome'))

produto7.nome = 'Heman'
delete produto7.preco
// console.log(produto7)

const produto8 = { nome: 'Skeletor', preco: 188.59 }
console.log(Object.entries(produto8))

for (const [chave, valor] of Object.entries(produto8)) {
  console.log(chave, valor)
}

