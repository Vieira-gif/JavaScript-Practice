const pessoa = {
  nome: 'João',
  sobrenome: 'Vieira',
  idade: 17,
  endereco: {
    rua: 'Francisco de Assis',
    numero: 455
  }
}

// Atribuição via desestruturação
const { endereco: { rua, numero } } = pessoa
console.log(rua, numero)
