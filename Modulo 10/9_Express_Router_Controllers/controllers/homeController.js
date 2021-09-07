exports.paginaInicial = (req, res) => {
  res.send(`
  <form action="/" method="POST">
  Nome do Cliente: <input type="text" name="nome">
  <button>Envir</button>
  </form>
  <p>Olá Mundo</p>
  `)
}

exports.trataPost = (req, res) => {
  res.send('Sou uma nova rota Post')
}
