const elements = [
  { tag: 'p', texto: 'Frase 1' },
  { tag: 'div', texto: 'Frase 2' },
  { tag: 'footer', texto: 'Frase 3' },
  { tag: 'section', texto: 'Frase 4' }
]

/*
  const rest = document.querySelector('div#rest')

  const setElementos = () => {
    for (let i = 0; i < elements.length; i++) {
      const novoElement = document.createElement(elements[i].tag)
      novoElement.innerText = elements[i].texto
      rest.appendChild(novoElement)
    }
  }
setElementos()
 */

const container = document.querySelector('.container')
const div = document.createElement('div')

for (let i = 0; i < elements.length; i++) {
  const { tag, texto } = elements[i]
  const tagCriada = document.createElement(tag)
  const textoCriado = document.createTextNode(texto)

  tagCriada.appendChild(textoCriado)
  div.appendChild(tagCriada)
}

container.appendChild(div)
