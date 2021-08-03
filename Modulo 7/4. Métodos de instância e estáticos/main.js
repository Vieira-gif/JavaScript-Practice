class ControleRemoto {
  constructor (tv) {
    this.tv = tv
    this.volume = 0 
  }

  // Método de instancia
  aumentarVolume() {
    this.volume += 2 
  }

  // Método de instancia
  diminuirVolume() {
    this.volume -= 2
  }

  // Método estatico
  static trocaPilha() {
    console.log('Trocando pilha...')
  }

  // No static o this aponta para o objeto

  static soma(x, y) {
    return x + y
  }
}

const controle1 = new ControleRemoto('LG')

controle1.aumentarVolume()
controle1.aumentarVolume()
controle1.aumentarVolume()
console.log(controle1)

ControleRemoto.trocaPilha()
console.log(ControleRemoto.soma(1, 10))


