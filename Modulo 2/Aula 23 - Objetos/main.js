/*const criaPessoa = (nome, sobrenome, idade) => {
    return {nome, sobrenome, idade};
};

const pessoa1 = criaPessoa('Luiz', 'Miranda', 25)*/

const pessoa2 = {
    nome: 'João',
    sobrenome: 'Vieira',
    idade: 17,

    falar(){
        console.log(`Olá mundo!
Minha idade atual é ${this.idade} anos`)
    },

    incrementar(){
        ++this.idade
    },
};

pessoa2.falar()
pessoa2.incrementar()
pessoa2.falar()

