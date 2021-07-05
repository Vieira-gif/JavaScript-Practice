// Filter retorna um array, com quantidade de elementos menor ou iguais

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

const maiorQueDez = numeros.filter(valor => valor > 10)

const pessoas = [
  { nome: 'Luiz', idade: 23 },
  { nome: 'Maria', idade: 53 },
  { nome: 'Leonardo', idade: 17 },
  { nome: 'Rafael', idade: 18 },
  { nome: 'Donatelo', idade: 16 },
  { nome: 'Michelangelo', idade: 15 }
]

const pessoasComCincoLetras = pessoas.filter(valor => valor.nome.length >= 5)
const pessoasComCinquentaAnos = pessoas.filter(valor => valor.idade >= 50)
const pessoasComLetraANoFinalDoNome = pessoas.filter(valor => {
  return valor.nome.toLocaleLowerCase().endsWith('a')
})

console.log(pessoasComLetraANoFinalDoNome)
