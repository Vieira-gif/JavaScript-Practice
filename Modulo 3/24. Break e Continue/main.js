const numeros =[1, 2, 3, 4, 5, 6, 7, 8, 9]

/* for (i in numeros) {
  let num = numeros[i]

  if (num === 2) {
    console.log(`Pulei o numero ${num}`)
    continue // Ele pula para proxima interação do laço
  }

  console.log(num)

  if (num === 7) {
    console.log(`Achei o numero ${num}`) 
    break 
  }
} */

let i = 0

do{
  let num = numeros[i]
  if (num === 2) {
    console.log(`Pulei o numero ${num}`)
    i++ // Em do e DoWhile a variavel de contgem deve sempre ser atualizada antes do continue, para que não haja um loop infinito
    continue // Ele pula para proxima interação do laço
  }

  console.log(num)

  if (num === 7) {
    console.log(`Achei o numero ${num}`) 
    break
  }
  i++
} while (i < numeros.length) 
