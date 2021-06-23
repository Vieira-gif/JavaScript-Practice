const btn = document.querySelector('button#btn')
const result = document.querySelector('div#result')

btn.onclick = () => {
  let peso = document.querySelector('input#peso').value
  let altura = document.querySelector('input#altura').value

  if (peso.length === 0 && altura.length === 0) {
    result.innerHTML = '<p class="vermelho">[ERRO!] Peso e Altura, inválidos.</p>'
  } else if (peso.length === 0) {
    result.innerHTML = '<p class="vermelho">[ERRO!] Peso inválido.</p>'
  } else if (altura.length === 0) {
    result.innerHTML = '<p class="vermelho">[ERRO!] Altura inválida.</p>'
  } else {
    peso = Number(peso)
    altura = Number(altura)
    const imc = (peso / (altura ** 2)).toFixed(1)
    if (imc < 18.5) {
      result.innerHTML = `<p class="verde">Seu IMC é ${imc}, Está abaixo do peso</p>`
    } else if (imc < 24.9) {
      result.innerHTML = `<p class="verde">Seu IMC é ${imc}, Está no peso normal</p>`
    } else if (imc < 29.9) {
      result.innerHTML = `<p class="verde">Seu IMC é ${imc}, Está no sobrepeso</p>`
    } else if (imc < 34.9) {
      result.innerHTML = `<p class="verde">Seu IMC é ${imc}, Está no obsidade grau 1</p>`
    } else if (imc < 39.9) {
      result.innerHTML = `<p class="verde">Seu IMC é ${imc}, Está no obsidade grau 2</p>`
    } else {
      result.innerHTML = `<p class="verde">Seu IMC é ${imc}, Está no obsidade grau 3</p>`
    }
  }
}
