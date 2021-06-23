/*
If pode ser usado sozinho
Sempre que utilizo a palavra else, preciso de um if antes
Eu posso ter vários else if's na checagem
Só posso ter um else na checagem
Podemos usar condições sem else if, utilizando apenas if e else
*/

const horas = 10

if (horas >= 0 && horas <= 12) {
  console.log('Bom dia!')
} else if (horas >= 12 && horas <= 17) {
  console.log('Boa tarde')
} else if (horas >= 18 && horas <= 23) {
  console.log('Boa noite!')
} else {
  console.log('Bom dia!')
};
