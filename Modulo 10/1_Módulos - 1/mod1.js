/* const nome = 'João'
const sobrenome = 'Vieira'

const falaNome = () => `${nome} ${sobrenome}`

/* module.exports.nome = nome
module.exports.sobrenome = sobrenome
module.exports.falaNome = falaNome */

/* exports.nome = nome
exports.sobrenome = sobrenome
exports.falaNome = falaNome

this.qualquerCoisa = 'O que eu quiser exportar' */

/* class Pessoa {
  constructor (nome) {
    this.nome = nome
  }
} */

/* exports.Pessoa = Pessoa */

const nome = 'João'
const sobrenome = 'Vieira'
const idade = 17
const CPF = '999.999.999-99'

module.exports = {
  nome,
  sobrenome,
  idade,
  CPF
}
