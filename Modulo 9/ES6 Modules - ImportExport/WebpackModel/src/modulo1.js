const nome = 'João'
const sobrenome = 'Vieira'
const idade = 17
export const numero12 = 12

/* const cpfNaoExportado = 12312415
export const cpfExportado = 12312415611 */

function soma (a, b) {
  return a + b
}

/* // Uma default por script
export default function Dfault (x, y) {
  return x - y
}

export {nome as default, sobrenome, idade, Dfault} */

export class Produto {
  constructor (nome, cor) {
    this.nome = nome
    this.cor = cor
  }
}

export { nome, sobrenome as sobrenome2, idade, soma }
