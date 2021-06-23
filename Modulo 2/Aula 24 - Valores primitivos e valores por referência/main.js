/*
Primitivos (imutáveis) - String, Number, Boolean, Undefined, Null, (Bigint, Symbol)

Referência (Mutável) - Array, Object, Function
*/

// Exemplo de imutaveis

let nome = "Luiz";
nome = "João"; // Nome agora é 'João'
console.log(nome);

// Exemplos de Mutaveis

const a = [1, 2, 3];
const b = a;

console.log(a, b); // a = b

a.push(4);
console.log(a, b); // a = 4, b = 4

b.pop();
console.log(a, b); // a - 4, b - 4

////////////////////

const c = {
  nome: "Luiz",
  sobrenome: "Marcos",
};

const d = c;
console.log(c, d); // c = Nome: 'Luiz', d = Nome:'Luiz'

d.nome = "João";
console.log(c, d); // c = Nome: 'João', d = Nome:'João'

//////////////////

// Resolvendo o referenciamento

// Objeto
const e = {
  nome: "Luiz",
  sobrenome: "Marcos",
};

const f = { ...e };
e.nome = "João";

console.log(e, f); // e = nome: 'João', f = nome: 'Luiz'

// Array
let g = [1, 2, 3];
let h = [...g];

console.log(g, h); // G = H

h.push(4);
console.log(g, h); // H = 1, 2, 3, 4 | G = 1, 2, 3

g.pop(); // H = 1, 2, 3, 4 | G = 1, 2
console.log(g, h);
