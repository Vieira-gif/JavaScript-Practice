const resultado = document.querySelector('div#resultado')
const btn = document.querySelector('button#btn');

const pessoas = []

btn.onclick = function receberForm() {

    const nome = document.querySelector('input#nome').value;
    const sobrenome = document.querySelector('input#sobrenome').value;
    const peso = Number(document.querySelector('input#peso').value);
    const altura = Number(document.querySelector('input#altura').value);

    

    pessoas.push({
        nome,
        sobrenome,
        peso,
        altura,
    });

    console.log(pessoas)
    
    resultado.innerHTML += `<p>${nome} ${sobrenome} 
${peso}kg ${altura}m</p>` 

};

