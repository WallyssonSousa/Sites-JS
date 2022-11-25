const Vitoria = {
    nome: 'Vitoria', 
    idade: 18,
    cpf: '999-999-999',
    email: 'vitoriaLinda@gmail.com',
    fones: ["11 99234-1145", "11 99354-9977"]  
}

Vitoria.dependentes = {
    nome: "Urro Jr", 
    parentesco: "filho", 
    dataNasc: "30/07/2033",
}

console.log(Vitoria)

Vitoria.dependentes.nome = "Urrinho Feitoza Sousa"; 

console.log(Vitoria)