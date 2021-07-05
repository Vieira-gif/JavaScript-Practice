// Retorna um array do mesmo tamanho com valores diferentes

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

const numerosDobrados = numeros.map( valor => valor*2 )

//console.log(numerosDobrados)

const pessoas = [
  { nome: 'João', idade: 17 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Leticia', idade: 19 },
  { nome: 'Rosana', idade: 32 },
  { nome: 'Wallace', idade: 47 }
]

const nomesPessoas = pessoas.map( obj => {
  const newObj = {...obj}
  return newObj.nome
})
console.log(nomesPessoas)

const idades = pessoas.map( obj => { 
  const newObj = {...obj}
 return newObj.idade
})
console.log(idades)


const addId = pessoas.map( (obj, indice) => {
  const newObj = {...obj }
  newObj.id = indice + 1 
  return newObj 
})
console.log(addId)
