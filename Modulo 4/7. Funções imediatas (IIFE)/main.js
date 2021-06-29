// IIFE -> Immediately Invoked Function Expression
((idade, peso, altura) => {
  const sobrenome = 'Vieira'

  const falaNome = () => {
    console.log(criaNome('João'))
  }
  const criaNome = (nome) => { return `${nome} ${sobrenome}` }

  falaNome()
  console.log(idade, peso, altura)
})(17, 79, 1.80)
