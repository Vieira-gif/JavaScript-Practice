exports.paginaInicial = (req, res, next) => {
  res.render('index', {
    titulo: 'Esse será o titulo da pagina',
    numeros: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  })
  next()
}

exports.trataPost = (req, res, next) => {
  res.send(req.body)
  return
}
