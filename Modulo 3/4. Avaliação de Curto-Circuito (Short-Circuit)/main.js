/*
&& -> false && true -> false "O valor mesmo"
|| -> 

========= FALSY =========
false
0
'' "" ``
null / undefined
NaN
*/ 
//===================================================
/* const falaOi = () => 'Oi';

const vaiSerTru = true;

console.log(vaiSerTru && falaOi()) // Vai executar sendo qualquer valor que não seja FALSY */
// ====================================================

// o OR (||) procura o primeiro valor true e retorna

/* console.log(0 || false || null || 'João Vieira' || true);

const corUsuario = null;
const corPadrao = corUsuario || 'preto';

console.log(corPadrao); */

const a = 0;
const b = null;
const c = 'false';
const d = false;
const e = NaN;
console.log(a || b || c || d || e);
