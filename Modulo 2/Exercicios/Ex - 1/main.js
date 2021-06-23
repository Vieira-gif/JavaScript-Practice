const num = Number(prompt('Dígite um número!').replace(',', '.'))


const numero = document.querySelector('span#numeral')
const rest = document.querySelector('div#rest')

numero.innerHTML = num

rest.innerHTML = `<p>Raiz quadrada: ${(num ** 0.5).toFixed(2)}</p>`

rest.innerHTML += `<p>${num} é inteiro: ${Number.isInteger(num)}</p>`

rest.innerHTML += `<p>É NaN: ${Number.isNaN(num)}</p>`

rest.innerHTML += `<p>Arredondado para cima: ${Math.ceil(num)}</p>`

rest.innerHTML += `<p>Arredondado para baixo: ${Math.floor(num)}</p>`

rest.innerHTML += `<p>Com duas casas decimais: ${num.toFixed(2)}</p>`


