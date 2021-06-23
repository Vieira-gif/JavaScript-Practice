/* // const tresHoras = 60 * 60 * 3 * 1000
// const umDia = 60 * 60 * 24 * 1000
// const data = new Date(0 + tresHoras + umDia)

// const data = new Date() //a, m, d, h, mn, s, ms

const data = new Date('2004-04-22 12:30:52')
console.log('Dia', data.getDate())
console.log('Mês', data.getMonth()) // mês começa no 0
console.log('Ano', data.getFullYear())
console.log('Hora', data.getHours())
console.log('Min', data.getMinutes())
console.log('Seg', data.getSeconds())
console.log('ms', data.getMilliseconds())
console.log('Dia semana', data.getDay())
// 0 - Domingo, 6 - Sabado

console.log(data.toString()
*/
const zeroAEsquerda = (num) => num >= 10 ? num : `0${num}`

const formataData = (data) => {
  const dia = zeroAEsquerda(data.getDate())
  const mes = zeroAEsquerda(data.getMonth() + 1)
  const ano = zeroAEsquerda(data.getFullYear())
  const hora = zeroAEsquerda(data.getHours())
  const min = zeroAEsquerda(data.getMinutes())
  const seg = zeroAEsquerda(data.getSeconds())

  return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}

const data = new Date()
const dataBrasil = formataData(data)
console.log(dataBrasil)
