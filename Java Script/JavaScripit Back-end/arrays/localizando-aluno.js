const alunos = ['Joao', 'Juliana', 'Caio', 'Ana'];

const mediaDosAlunos = [10,7,9,6];

let listaDeNotasEAlunos = [alunos, mediaDosAlunos];

const exibeNomeNota = (nomeDoAluno) => {
    if(listaDeNotasEAlunos[0].includes(nomeDoAluno)){
        indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno)
        return listaDeNotasEAlunos[0][indice] + ', sua media e ' + listaDeNotasEAlunos[1][indice]
    } else {
        return "Aluno nao esta cadastrado"
    }
}

console.log(exibeNomeNota("Wallysson"))