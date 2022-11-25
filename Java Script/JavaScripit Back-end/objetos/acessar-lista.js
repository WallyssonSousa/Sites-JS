const Vitoria = {
    nome: 'Vitoria', 
    idade: 18,
    cpf: '999-999-999',
    email: 'vitoriaLinda@gmail.com',  
}

const chaves = ["nome", "idade", "cpf", "email"]; 

console.log(Vitoria[chaves[0]]); 

chaves.forEach(info=>console.log(Vitoria[info]));
