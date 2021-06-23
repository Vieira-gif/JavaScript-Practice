const alunos = ['Luiz', 'Maria', 'João', 'Felipe']

// Fatiando array
console.log(alunos.slice(0, 2))

// Colcando no inicio
alunos.unshift('Luiza')

// Colocando no final
alunos.push('Felipa')

// Alterando
alunos[3] = 'Jão'

// Adicionando
alunos[alunos.length] = 'Bolnasaro'

// Deletando o ultimo
alunos.pop()

// Deletando, mas deixando vazio com os mesmos indices
delete alunos[0] 
delete alunos[5]


for(pessoa of alunos){
    console.log(pessoa)
}


console.log(typeof alunos)
console.log(alunos instanceof Array)