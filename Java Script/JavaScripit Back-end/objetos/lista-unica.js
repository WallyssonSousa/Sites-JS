const clientes = [
    {
        nome: "Andre",
        cpf: "123123123",
        dependentes: [{
            nome: "Sara",
            parentesco: "Filha",
            dataNasc: "20/03/2011"
        },
        {
            nome: "Samia",
            parentesco: "filha",
            dataNasc: "04/01/2014"
        }],
    },
    {
        nome: "Juliana",
        cpf: "567567567",
        dependentes: [{
            nome: "Sophia",
            parentesco: "filha",
            dataNasc: "30/08/2020"
        }],
    }

];

const listaDependentes = [...clientes[0].dependentes,...clientes[1].dependentes];

console.log(listaDependentes);