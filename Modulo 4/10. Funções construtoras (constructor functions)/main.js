// Função construtora -> Objetos - new Pessoa
// Função fabrica -> Objetos - criaPessoa
// Construtora -> Pessoa
class Pessoa {
  constructor (nome, sobrenome) {
    // Atributos ou métodos privado
    const id = 13124123

    const metodoInterno = () => {
      console.log('ISSO NÃO APARECE NO CONSOLE')
    }

    // Atributos ou métodos públicos
    this.nome = nome
    this.sobrenome = sobrenome

    this.metodo = () => {
      console.log(`${this.nome}: Sou um método`)
    }
  }
}

const p1 = new Pessoa('João', 'Vieira')
const p2 = new Pessoa('Maria', 'Oliveira')

p1.metodo()
