const fs = require('fs').promises

module.exports = (caminho, dados) => {
  fs.writeFile(caminho, dados, { flag: 'w' })
}

/*
flag: w // Apaga todo o conteudo e escreve denovo
flag: a // Adiciona o conteudo toda vez que o script for executado
*/
