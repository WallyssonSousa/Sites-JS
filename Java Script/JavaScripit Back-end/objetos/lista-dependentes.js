const Vitoria = {
    nome: 'Vitoria Santos Barros Feitoza',
    idade: 18,
    cpf: '999-999-999',
    email: 'vitoriaLinda@gmail.com',
    fones: ['11 98199-9090', '11 99909-9191'],
    dataNasc: '30/07/2004', 

    dependentes: [{
        nome: 'Urrinho Feitoza Sousa',
        parentesco: 'Filho',
        dataNasc: '30/07/2033',
    }]
}

Vitoria.dependentes.push({
    nome: 'Wallysson Sousa',
    parentesco: 'Marido/Mordomo',
    dataNasc: '17/04/2005',
})

Vitoria.dependentes.push({
    nome: 'Urrinha Feitoza Sousa', 
    parentesco: 'filha',
    dataNasc: '17/04/2036', 
})

console.log(Vitoria)

const filhoMaisNovo = Vitoria.dependentes.filter(dependente => dependente.dataNasc==="17/04/2036"); 

console.log(filhoMaisNovo[0].nome);