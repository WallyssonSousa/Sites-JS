const Vitoria = {
    nome: 'Vitoria Santos Barros Feitoza',
    idade: 18,
    cpf: '999-999-999',
    email: 'vitoriaLinda@gmail.com',
    fones: ['11 98199-9090', '11 99909-9191'],
    dataNasc: '30/07/2004',

    dependentes: [
        {
            nome: 'Urrinho Feitoza Sousa',
            parentesco: 'Filho',
            dataNasc: '30/07/2033'
        },

        {
            nome: 'Wallysson Sousa',
            parentesco: 'Marido/Mordomo',
            dataNasc: '17/04/2005',
        },

        {
            nome: 'Urrinha Feitoza Sousa',
            parentesco: 'filha',
            dataNasc: '17/04/2036',
        },
    ],

    saldo: 100,
    depositar:function(valor)
    {
        this.saldo += valor
    }
}

console.log(Vitoria.saldo); 
Vitoria.depositar(200); 
console.log(Vitoria.saldo)