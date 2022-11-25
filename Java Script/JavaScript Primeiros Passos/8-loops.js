console.log(`\n Trabalhando com Condicionais`);
let listaDeDestinos = new Array(
    `Salvador`, //0
    `São Paulo`, //1
    `Rio de Janeiro`, //2
    `Curitiba`, //3
    `Porto Alegre`,//4 
    `Amazonas`, //5
    `Belo Horizonte` //6
);


const idadeComprador = 18;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "Bahia";

console.log("\n Destinos Possíveis:");
console.log(listaDeDestinos);


const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;
while (contador < 7) {
    if (listaDeDestinos[contador] == destino) {
        console.log("Destino existe");
        destinoExiste = true;
        break;
    }
    contador += 1;
}

console.log("Destino existe: ", destinoExiste);

if(podeComprar && destinoExiste){
    console.log("Boa Viagem!!");
} else {
    console.log("Desculpe tivemos um erro!");
}

for ( let cont ;cont < 7; cont ++) {
    if (listaDeDestinos[contador] == destino) {
        console.log("Destino existe");
        destinoExiste = true;
        break;
    }
}