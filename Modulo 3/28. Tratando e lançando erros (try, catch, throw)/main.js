/* const soma = (x, y) => {
  if (typeof x !== 'number' || typeof y !== 'number') {
    throw('X e Y precisam ser numberos')
  }

  return x + y
} */

function soma (x, y) {
  if (typeof x !== 'number' || typeof y !== 'number') {
    throw new Error('X e Y precisam ser numberos')
  }

  return x + y
}
try {
  console.log(soma('1', 3))
} catch (e) {
  // console.log(e)
  console.log('Alguma coisa mais amigavel para o usuario')
}
