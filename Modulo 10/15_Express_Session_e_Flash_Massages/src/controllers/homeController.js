exports.paginaInicial = (req, res, next) => {
  // req.session.usario = { nome: 'Vieira', logado: true}
 // console.log(req.flash('error'), req.flash('success'), req.flash('info'))
  res.render('index')
  next()
}

exports.trataPost = (req, res, next) => {
  res.send(req.body)
  return
}
