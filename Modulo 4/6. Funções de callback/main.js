const aleatorio = function(min = 1000, max= 3000) {
  const numero = Math.random() * (max - min) + min
  return Math.floor(numero)  
}

const f1 = function(callback) {
  setTimeout( () => {
    console.log('f1')
    if (callback) callback()
  }, aleatorio())
  
}

const f2 = function(callback) {
  setTimeout( () => {
    console.log('f2')
    if (callback) callback()
  }, aleatorio())
  
}

const f3 = function(callback) {
  setTimeout( () => {
    console.log('f3')
    if (callback) callback() 
  }, aleatorio())
  
}

f1(f1Callback)

function f1Callback() { f2(f2Callback) }
const f2Callback = () => { f3(f3Callback) }
const f3Callback = () => { console.log('Olá mundo!') }
