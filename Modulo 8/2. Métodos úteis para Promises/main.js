function rand (min, max) {
  min *= 1000
  max *= 1000
  return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi (msg, tempo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof msg !== 'string') {
        reject('Cai no erro')
        return
      } 

      resolve(msg.toUpperCase() + ' - Passei na promise')
    }, tempo)
  })
}

// Promise.all | Promise.race | Promise.resolve | Promise.reject

const promises = [
  // 'Primeiro valor',
  esperaAi(1000, rand(1, 5)),
  esperaAi('Promise 1', rand(1, 5)),
  esperaAi('Promise 2', rand(1, 5)),
  esperaAi('Promise 3', rand(1, 5)),
  // 'Outro valor'
]


// .all tenta resolver todas as promises e entrega todas

/* 
Promise.all(promises)
  .then(valor => {
    console.log(valor)
  })
  .catch(e => {
    console.log(e)
  }) 
*/

// .race entrega o primeiro valor a ser resolvido, sendo promesa ou não

/*
Promise.race(promises)
.then(valor => {
  console.log(valor)
})
.catch(e => {
  console.log(e)
})
*/

// .resolve

/* 
function baixaPagina() {
  const emCache = true

  if (emCache) {
    return Promise.reject('Página em cache')
  } else {
    return esperaAi('Baixei a página', 3000)
  }
}

baixaPagina()
  .then(dadosPagina => {
    console.log(dadosPagina)
  })
  .catch(e => console.log(e))
*/


// .reject

function baixaPagina() {
  const emCache = true

  if (emCache) {
    return Promise.reject('Página em cache')
  } else {
    return esperaAi('Baixei a página', 3000)
  }
}

baixaPagina()
  .then(dadosPagina => {
    console.log(dadosPagina)
  })
  .catch(e => console.log('ERRO: ', e))