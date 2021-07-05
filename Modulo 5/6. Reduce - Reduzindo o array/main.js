const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

/* .reduce( function(acumulador, valor, indice, array){

  }), valor inicial do acumulador)
*/

const totalDaSoma = numeros.reduce((acumulador, valor, indice, array) => {
  acumulador += valor
  return acumulador
}, 0)

//console.log(totalDaSoma)

const pessoas = [
  { nome: 'João', idade: 17 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Leticia', idade: 10 },
  { nome: 'Rosana', idade: 64 },
  { nome: 'Wallce', idade: 63 }
]

const pessoaMaisVelha = pessoas.reduce((acumulador, valor) => {
  if (acumulador.idade > valor.idade) return acumulador
  return valor
})
console.log(pessoaMaisVelha)
