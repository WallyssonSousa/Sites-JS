const livros = require('./listaLivros');


const menorValor = (arrProdutos, posicaoInical) => {
    let maisBarato = posicaoInical;

    for (let atual = posicaoInical; atual < arrProdutos.length; atual++) {
        if (arrProdutos[atual].preco < arrProdutos[maisBarato].preco) {
            maisBarato = atual
        }
    }

    return maisBarato;

}

module.exports = menorValor;