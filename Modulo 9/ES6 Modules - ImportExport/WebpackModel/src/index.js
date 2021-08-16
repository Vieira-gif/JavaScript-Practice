import { idade, nome as nome2, sobrenome2, soma, numero12, Produto as Produtos } from './modulo1.js'

/*
//     Qualquer nome ira ser a função default
import funcaoDefault from './modulo1.js'
console.log(funcaoDefault(5, 1))
*/

/*
import * as MeuModulo, {nome, sobrenome, idade} from './modulo1.js'
console.log(MeuModulo.cpfExportado)
console.log(nome, sobrenome, idade)
*/

const nome = 'Luiz'
const sobrenome = 'Miranda'
const p1 = new Produtos('Camiseta', 'Verde')

console.log(nome2, sobrenome2, idade)
console.log(nome, sobrenome)
console.log(soma(1, 2))
console.log(numero12)
console.log(p1)
