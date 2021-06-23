function mostraHora() {
  let data = new Date();

  return data.toLocaleString('pt-BR')
}

const timer = setInterval(() => {
  console.log(mostraHora())
}, 1000)

setTimeout(() => {
  clearInterval(timer)
}, 3000)

setTimeout(() => {
  console.log('Olá mundo!')
}, 5000)