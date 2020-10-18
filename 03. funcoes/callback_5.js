//reduce

const carrinho = [
    { nome: 'caneta', qtde: 10, preco: 7.90 },
    { nome: 'impressora', qtde: 0, preco: 650.00 },
    { nome: 'caderno', qtde: 4, preco: 27.90 },
    { nome: 'lapis', qtde: 3, preco: 5.78 },
    { nome: 'tesoura', qtde: 1, preco: 5.99 },
]


const getTotal = item => item.qtde * item.preco

const totalGeral = carrinho.map(getTotal)

console.log(totalGeral);