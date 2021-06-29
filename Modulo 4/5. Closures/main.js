const retornaFuncao = (nome) => { 
  return () => {
    return nome
  }
}

const funcao = retornaFuncao('João')
const funcao2 = retornaFuncao('Vieira')
console.dir(funcao)
console.dir(funcao2)

console.log(funcao(), funcao2())