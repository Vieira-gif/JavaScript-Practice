exports.middlewareGlobal = (req, res, next) => {
  res.locals.umaVarLocal = 'Valor da variavel local'
  next()
}
