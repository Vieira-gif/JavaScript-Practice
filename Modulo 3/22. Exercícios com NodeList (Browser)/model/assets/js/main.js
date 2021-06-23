const paragrafos = document.querySelector('.paragrafos')
const ps = paragrafos.querySelectorAll('p')

const estiloBody = getComputedStyle(document.body)
const backgroundColorBody = estiloBody.backgroundColor

for (const p of ps) {
  p.style.backgroundColor = backgroundColorBody
  p.style.color = '#FFFFFF'
}
