const numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90]

let total = 0

// forEach = for in, for of e for classico

const numeralDobrado = numeros.forEach((valor, indice, array) => { total += valor })

console.log(total)
