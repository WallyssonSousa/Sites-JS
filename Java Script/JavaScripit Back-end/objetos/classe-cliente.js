class Cliente{
    constructor(nome, email, cpf, saldo){
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.saldo = saldo
    }

    depositar(valor){
        this.saldo += valor
    }

    exibirSaldo(){
        console.log(this.saldo)
    }
}

const wallysson = new Cliente("Wallysson" , "ws07830519@gmail,com", "00440291231", 85); 

console.log(wallysson)

wallysson.depositar(100); 

console.log(wallysson);