const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send(`
  <form action="/" method="POST">
  Nome do Cliente: <input type="text" name="nome">
  <button>Envir</button>
  </form>
  <p>Olá Mundo</p>
  `)
})

app.post('/', (req, res) => {
  res.send('Recebi o formulário')
})

app.get('/contato', (req, res) => {
  res.send('Obrigado por entrar em contato conosco')
})

app.listen(3000, () => {
  console.log('Acessar localhost:3000')
  console.log('Servidor executando na porta 3000')
})
