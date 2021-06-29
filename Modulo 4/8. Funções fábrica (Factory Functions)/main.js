function criaPessoa (nome, sobrenome, altura, peso) {
  return {
    nome,
    sobrenome,
    altura,
    peso,

    // Getter
    get nomeCompleto () {
      return `${this.nome} ${this.sobrenome}`
    },

    // Setter
    set nomeCompleto (valor) {
      valor = valor.split(' ')
      this.nome = valor.shift()
      this.sobrenome = valor.join(' ')
      console.log(valor)
    },

    fala (assunto = 'falando sobre nada') {
      return `${this.nome} está ${assunto}`
    },

    // 'gets' não pode ter parametros
    // Getter
    get imc () {
      return (peso / (altura ** 2)).toFixed(2)
    }
  }
}

const p1 = criaPessoa('João', 'Vieira', 1.8, 79)
p1.nomeCompleto = 'Davi Henrique'
console.log(p1.nomeCompleto)
console.log(p1.nome)
console.log(p1.sobrenome)

console.log(p1.fala())
// const p2 = criaPessoa('Fulano', 'Beutrano', 1.60, 44)
