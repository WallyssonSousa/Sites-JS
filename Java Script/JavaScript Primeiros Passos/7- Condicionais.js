console.log(`Trabalhando com Condicionais`);
let listaDeDestinos = new Array(
    `Salvador`, //0
    `São Paulo`, //1
    `Rio de Janeiro`, //2
    `Curitiba`, //3
    `Porto Alegre`,//4 
    `Amazonas`, //5
    `Belo Horizonte` //6
);

console.log("Destinos Possíveis:");
console.log(listaDeDestinos);

const idadeComprador = 18;
const estaAcompanhada = false;  
const temPassagemComprada = true;

// if (idadeComprador >= 18) {
//     console.log("Comprador maior de idade, venda realizada");
//     listaDeDestinos.splice(1, 1); //removendo um item
// } else if (estaAcompanhada == true) {
//     // A pessoa é menor de idade
//     console.log("Comprador está acompanhado, venda realizada");
//     listaDeDestinos.splice(1, 1); //removendo um item
// } else {
//     console.log("Comprador não é maior de idade, venda não realizada");
// }

if (idadeComprador >= 18 || estaAcompanhada == true) {
    console.log("Venda Realizada. Boa Viagem!!")
    listaDeDestinos.splice(1, 1); //removendo item
} else {
    console.log("Não é maior de idade. Venda não foi realizada.")
}


console.log("Embarcando: \n\n ")
if(idadeComprador >= 18 && temPassagemComprada){
    console.log("Boa Viagem!! ");
}else{
    console.log("Você não pode embarcar");
}

console.log(listaDeDestinos);

// se o que foi feito no IF não foi aprovado, será feito novamente no else if, se não for aprovado dnv, ai irá para o else


// console.log(idadeComprador >  18) //maior que 18
// console.log(idadeComprador <  18) //menor que 18
// console.log(idadeComprador >= 18) //maior ou igual a 18
// console.log(idadeComprador <= 18) //menor ou igual a 18
// console.log(idadeComprador == 18) //exatamente igual a 18 e dois ==, porque um = é atribuição
