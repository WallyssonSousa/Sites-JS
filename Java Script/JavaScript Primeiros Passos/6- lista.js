console.log(`Trabalhando com listas`);

// const salvador = `Salvador`
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`; 

let listaDeDestinos = new Array(
    `Salvador`, //0
    `São Paulo`, //1
    `Rio de Janeiro`, //2
    `Curitiba`, //3
    `Porto Alegre`,//4 
    `Amazonas`, //5
    `Belo Horizonte` //6
);

listaDeDestinos.push(`Bahia`); // adicionando intem na lista
console.log("Destinos possíveis: ");
//console.log(salvador, saoPaulo , rioDeJaneiro);
console.log(listaDeDestinos);


listaDeDestinos.splice(1,1); //2 é a posição que quer tirar da lista, e 1 que é só a quantidade que quer ser deletado.
//sempre que vai ser trabalhado com lista, a contagem começa do 0, e não do 1 
console.log(listaDeDestinos); 
console.log(listaDeDestinos[6], listaDeDestinos[5]); 