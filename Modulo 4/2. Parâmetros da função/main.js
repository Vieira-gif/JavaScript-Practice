/* function funcao (a, b, c) {
  let total = 0
  for (const argumento of arguments) {
    total += argumento
  }

  console.log(total)
}

funcao(1, 2, 3, 4, 5, 6, 7, 8, 9, 10) */

/*
function funcao (a, b, c, d, e, f) {
  console.log(a, b, c, d, e, f)
}

funcao(1, 2, 3) */

/* function funcao (a, b = 2, c = 5) {
  console.log(a + b + c)
}

funcao(2, 20)
 */

/* function funcao ({ nome, sobrenome, idade }) {
  console.log(nome, sobrenome, idade)
}
const obj = { nome: 'João', sobrenome: 'Vieira', idade: 17 }
funcao(obj) */

/* function funcao ([valor1, valor2, valor3]) {
  console.log(valor1, valor2, valor3)
}
//const array = [ valor1, valor2, valor3 ]
funcao(['João', 'Henrique', 17])
 */

/* const conta = function (operador, acumulador, ...numeros) {
  for (const numero of numeros) {
    if (operador === '+') { acumulador += numero }
    if (operador === '-') { acumulador -= numero }
    if (operador === '*') { acumulador *= numero }
    if (operador === '/') { acumulador /= numero }
  }

  console.log(acumulador)
}
conta('/', 1, 20, 30, 40, 50)
 */

const conta = (...args) => {
  
}
