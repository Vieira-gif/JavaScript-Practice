function criaCalculadora () {
  return {
    display: document.querySelector('.display'),

    inicia () {
      this.cliqueBotoes()
      // this.pressionaEnter()
    },

    cliqueBotoes () {
      // aqui usando arrow function o 'this' ainda é a calculadora
      document.addEventListener('click', e => {
        const el = e.target

        if (el.classList.contains('btn-num')) {
          this.btnParaDisplay(el.innerText)
        }

        if (el.classList.contains('btn-clear')) {
          this.clearDisplay()
        }

        if (el.classList.contains('btn-del')) {
          this.deleteChar()
        }

        if (el.classList.contains('btn-eq')) {
          this.realizaConta()
        }
      })
    },

    btnParaDisplay (valor) {
      this.display.value += valor
    },

    realizaConta () {
      let conta = this.display.value

      try {
        conta = eval(conta)

        if (!conta) {
          window.alert('Conta Inválida')
          return
        }

        this.display.value = String(conta)
      } catch (e) {
        window.alert('Conta Inválida')
        return
      }
    },

    /* pressionaEnter () {
      this.addEventListener('keyup', e => {
        if (e.keyCode === 13) {
          this.realizaConta()
        }
      })
    }, */

    clearDisplay () {
      this.display.value = ''
    },

    deleteChar () {
      this.display.value = this.display.value.slice(0, -1)
    }
  }
}

const calculadora = criaCalculadora()
calculadora.inicia()
