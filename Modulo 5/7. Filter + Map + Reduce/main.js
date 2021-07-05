const numeros = [5, 50, 80, 1, 2, 4, 8, 7, 5, 7, 11, 15, 27, 22]

const numerosPares = numeros
.filter( valor => valor % 2 === 0)
.map( valor => valor * 2)
.reduce( (acumulador, valor) => { return acumulador += valor }, 0)

console.log(numerosPares)