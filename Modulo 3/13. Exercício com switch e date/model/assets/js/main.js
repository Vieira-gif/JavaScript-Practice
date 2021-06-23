const text = document.querySelector('h1#rest')
const data = new Date()
const diaSemana = data.getDay()

const getDiaSemana = (dia) => {
  const diasSemana = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sabádo']

  return diasSemana[dia]

  /* switch (dia) {
    case 0:
      return 'Domingo'

    case 1:
      return 'Segunda-Feira'

    case 2:
      return 'Terça-Feira'

    case 3:
      return 'Quarta-Feira'

    case 4:
      return 'Quinta-Feira'

    case 5:
      return 'Sexta-Feira'

    case 6:
      return 'Sabádo'
  } */
}

const getMes = (mes) => {
  const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']

  return meses[mes]

  /* switch (mes) {
    case 0:
      return 'Janeiro'

    case 1:
      return 'Fevereiro'

    case 2:
      return 'Março'

    case 3:
      return 'Abril'

    case 4:
      return 'Maio'

    case 5:
      return 'Junho'

    case 6:
      return 'Julho'

    case 7:
      return 'Agosto'

    case 8:
      return 'Setembro'

    case 9:
      return 'Outubro'

    case 10:
      return 'Novembro'

    case 11:
      return 'Dezembro'
  } */
}

const setDiaSemanaDiaMesAnoHoraMinuto = () => `${getDiaSemana(diaSemana)}, ${data.getDate()} de ${getMes(data.getMonth())} de ${data.getFullYear()}<br>${data.getHours()}:${data.getMinutes()}`

const setValor = () => {
  text.innerHTML = setDiaSemanaDiaMesAnoHoraMinuto()
}

setValor()

/* const text = document.querySelector('h1#rest')
const data = new Date()
const opcoes = {
  dateStyle: 'full',
  timeStyle: 'short'
}

text.innerHTML = data.toLocaleDateString('pt-BR', opcoes) */
