function Calculadora () {
  this.display = document.querySelector('.display')

  this.inicia = () => { this.capturaCliques() }

  this.capturaCliques = () => {
    document.addEventListener('click', event => {
      const element = event.target

      if (element.classList.contains('btn-num')) this.addNumDisplay(element)
      if (element.classList.contains('btn-clear')) this.clear()
      if (element.classList.contains('btn-del')) this.delete()
      if (element.classList.contains('btn-eq')) this.realizaConta()
    })
  }

  this.realizaConta = () => {
    try {
      const conta = eval(this.display.value)

      if (!conta) {
        window.alert('Conta inválida')
        return
      }

      this.display.value = conta
    } catch (e) {
      window.alert('Conta inválida')
      return
    }
  }

  this.delete = () => { this.display.value = this.display.value.slice(0, -1) }

  this.clear = () => { this.display.value = '' }

  this.addNumDisplay = el => { this.display.value += el.innerText }
}

const calculadora = new Calculadora()
calculadora.inicia()
