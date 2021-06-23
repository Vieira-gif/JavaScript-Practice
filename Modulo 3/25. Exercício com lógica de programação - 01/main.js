// Escreva ma função que recebe 2 números e retorne o maior delas


// Função que gera os numeros aleatoriamente
const maior = (min=0, max=100) => {
  const lista = []

  for (let i = 0; i < 2; i++) {
    const r = Math.floor(Math.random() * (max - min) + min)
    lista.push(r)
  }

  console.log(lista)
  return `O maior número foi: ${Math.max(lista[0], lista[1])}`
}

const maiorV2 = (x, y) => x > y ? x : y 


// Escolha abaixo um dos dois jeitos para executar o script

//console.log(maiorV2(0, 100)) // coloque dois números separados por vírgula entre os parenteses

//console.log(maior()) // coloque dois números separados por vírgula entre os parenteses, ou não.