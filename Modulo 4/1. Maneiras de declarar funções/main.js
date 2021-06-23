// declaração de função (Function hoisting)[Elevação de funções para o topo do código]

function falaOi() {
  console.log('Oi')
}

// First-class object (Objetos de primeira classe)
// Function expression
const souUmDado = function () {
  console.log('Sou um dado')
}

function executaFuncao (outrafuncao) {
  outrafuncao()
}

executaFuncao(souUmDado)

// Arrow function
const funcaoArrow = () => {
  console.log('Sou uma arrow function')
}

// Dentro de um objeto

const Objeto = {
  falar () {
    console.log('Estou falando...')
  }
}

Objeto.falar()
