// ? :
const pontuacaoUsuario = 1000;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuario VIP' : 'Usuario Normal';

const corUsuario = 'Pink';
const corPadrao = corUsuario || 'Black';

console.log(nivelUsuario, corPadrao);
