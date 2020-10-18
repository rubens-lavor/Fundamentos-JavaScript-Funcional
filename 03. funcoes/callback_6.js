// implementando funçao reduce

Array.prototype.meuReduce = function (fn, inicial) {
    let acc = inicial
    for (let i = 0; i < this.length; i++) {
        if (!acc && i === 0) {
            acc = this[i]
            continue
        }

        acc = fn(acc, this[i], i, this)
    }
    return acc
}


const carrinho = [
    { nome: 'caneta', qtde: 10, preco: 7.90, fragil: true },
    { nome: 'impressora', qtde: 1, preco: 650.50, fragil: true },
    { nome: 'caderno', qtde: 4, preco: 27.90, fragil: false },
    { nome: 'lapis', qtde: 3, preco: 5.78, fragil: false },
    { nome: 'tesoura', qtde: 1, preco: 5.99, fragil: true },
]


const isFragil = item => item.fragil
const getTotal = item => item.qtde * item.preco
const getMedia2 = (acc, el) => {
    const novaQtde = acc.qtde + 1
    const novoTotal = acc.total + el

    return {
        qtde: novaQtde,
        total: novoTotal,
        media: novoTotal / novaQtde
    }
}

const media2 = carrinho
    .filter(isFragil)
    .map(getTotal)
    .meuReduce(getMedia2, { qtde: 0, total: 0, media: 0 }).media


console.log("média 2: " + media2);