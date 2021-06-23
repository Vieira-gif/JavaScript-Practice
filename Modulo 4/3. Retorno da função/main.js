//return
// retorna um valor
// Termina a função
/* const soma = (a, b) => {
 return a + b
}

console.log(soma(1, 2)) */
/* 
const criaPessoa = function (nome, sobrenome) {
  return { nome, sobrenome }
}

const p1 = criaPessoa('João', 'Vieira')
const p2 = { nome: 'Luiz', sobrenome: 'Otávio' } */

/* const falaFrese = function (comeco) {
  function falaResto (resto) {
    return comeco + ' ' + resto
  }

  return falaResto
}

const olaMundo = falaFrese('Olá')
console.log(olaMundo('mundo!'))
 */

function criaMultriplicador (multriplicador) {
  return function (n) {
    return n * multriplicador
  }
}

const duplica = criaMultriplicador(2)
const triplica = criaMultriplicador(3)
const quadriplica = criaMultriplicador(4)

console.log(duplica(2))
console.log(triplica(2))
console.log(quadriplica(2))
