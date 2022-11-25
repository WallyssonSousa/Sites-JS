
//comparaçoes; 

console.log("*****Operador ternario*****"); 

const idadeMinima = 18; 
const idadeCliente = 19; 

if ( idadeCliente >= idadeMinima ){
    console.log("Whisky")
} else {
    console.log("Todynho")
}
            //Comparaçao //estrutura do if // : serve como else;  // true //false
console.log(idadeCliente >= idadeMinima ? "Whisky" : "Todynho"); 
console.log("*****Operador ternario*****"); 


//Template strings

const nome = "Vitoria Santos Barros Feitoza"; 
const idade = 2022-2004; 
const lugarDeNascimento = "Ceu, porque pra ser linda assim, apenas sendo um anjo";

//const apresentacao = "meu nome e " + nome + ", minha idade e " + idade + ", e nasci na cidade de " + cidadeDeNascimento; 

const apresentacao = `o nome da minha gatinha é ${nome}, ela tem ${idade} e nasceu no ${lugarDeNascimento} ` 

console.log(apresentacao)


//funçao


let x = ""; 
x = "oi"; 
console.log(x); 

function imprimeTexto(texto){
    console.log(texto)
}

imprimeTexto("oi");

function soma(){
    return 10+10; 
}

function imprimeTexto(texto){
    console.log(texto)
}

imprimeTexto(soma());

//Parametros 

function soma(numero1, numero2){
    return numero1 + numero2
}

console.log(soma(1 , 1))

//espressaoDeFunçao

const soma = function(palavra1, palavra2){
    return palavra1 + " + " + palavra2 + " = Casal Perfeito"
}

console.log(soma("Wallysson" ,"Vitoria")); 

//Arrow Function

const apresentaArrow = nome => `Meu nome e${nome}`;

const soma = (num1, num2) => num1+ num2; 

console.log(soma(2,2))

const somaNumerosPequenos = (num1, num2) => {
    if(num1 > 10 || num2 > 10){
        return "somente numero de 1 a 9"
    }else{
        return num1 + num2
    }
}

console.log(somaNumerosPequenos(15,2)); 
