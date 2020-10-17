const carrinho = [
    { nome: 'caneta', qtde: 10, preco: 7.90 },
    { nome: 'impressora', qtde: 0, preco: 650.00 },
    { nome: 'caderno', qtde: 4, preco: 27.90 },
    { nome: 'lapis', qtde: 3, preco: 5.78 },
    { nome: 'tesoura', qtde: 1, preco: 5.99 },
]

const qtdeMaiorQueZero = item => item.qtde > 1
const getNome = item => item.nome
const qtdeGrande = item => item.qtde >= 1000


const itensValidos = carrinho.filter(qtdeMaiorQueZero)

const NomesitensValidos = carrinho
    .filter(qtdeMaiorQueZero)
    .map(getNome)
    ;
const grandeQtde = carrinho.filter(qtdeGrande)

console.log(grandeQtde);
console.log(itensValidos);
console.log(NomesitensValidos);


Array.prototype.meuFilter = function (fn) {
    const novoArray = []
    for (let i = 0; i < this.length; i++) {
        if (fn(this[i], i, this)) {
            novoArray.push(this[i])
        }
    }

    return novoArray
}

const itensValidos2 = carrinho
    .meuFilter(qtdeMaiorQueZero)
    .map(getNome)
    ;

console.log(itensValidos2);