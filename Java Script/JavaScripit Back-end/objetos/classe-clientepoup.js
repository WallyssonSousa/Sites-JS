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

class ClientePoupanca extends Cliente{
    constructor(nome, email, cpf, saldo, saldoPoupanca){
        super(nome, email, cpf, saldo)
        this.exibirSaldo = saldoPoupanca
    }

    depositarPoupanca(valor){
        this.saldoPoupanca += valor 
    }
}

const andre = new ClientePoupanca("Andre", "a@gmail.com", "22558877", 100, 200); 

function Exibir(){
    console.log(andre)
}

andre.depositar(100);
andre.depositarPoupanca(50); 

Exibir()
