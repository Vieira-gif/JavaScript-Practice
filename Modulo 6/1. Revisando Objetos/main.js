/*
const pessoa = {
  nome: 'João',
  sobrenome: 'Vieira',
}


const chave1 = 'nome'
console.log(pessoa[chave1])
console.log(pessoa.sobrenome)
*/


const pessoa1 = new Object()
pessoa1.nome = 'Leonardo'
pessoa1.sobrenome = 'Da Vinci'
pessoa1.idade = 67
// Arrow function nesse tipo de estrutura de objeto, faz com que a utilização do 'this' fique undifined
pessoa1.falarNome = function () {
  return `${this.nome} está falando seu nome`
}
pessoa1.getDataNascimento = function () {
  const dataAtual = new Date()
  return dataAtual.getFullYear() - this.idade
}


/*
const chave2 = 'nome'
console.log(pessoa1[chave2])
console.log(pessoa1.sobrenome)

delete pessoa1.nome
console.log(pessoa1)

console.log(pessoa1.getDataNascimento())

for (let chave in pessoa1) {
  console.log(chave)
}

for (let chave in pessoa1) {
  console.log(pessoa1[chave])
}
*/

// Factory function
function criaPessoa (nome, sobrenome, idade) {
  return {
    nome, 
    sobrenome, 
    idade,
    get nomeCompleto(){
      return `${this.nome} ${this.sobrenome}`
    }
  }
}

/*
const pessoa3 = criaPessoa('João', 'Vieira', 17)
console.log(pessoa3.nomeCompleto)
*/

// Constructor function
function Pessoa (nome, sobrenome, idade) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;

  Object.freeze(this) 
  // Os valores do objeto não poderam ser alterados, deletados ou criar metodos
}
 
const pessoa4 = new Pessoa('João', 'Vieira', 17)
Object.freeze(pessoa4)
pessoa4.nome = 'Xandéco'
delete pessoa4.nome

console.log(pessoa4)