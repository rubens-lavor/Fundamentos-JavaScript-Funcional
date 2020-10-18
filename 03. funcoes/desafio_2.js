//Desafio Map, Reduce e Filter

const carrinho = [
    { nome: 'caneta', qtde: 10, preco: 7.90, fragil: true },
    { nome: 'impressora', qtde: 1, preco: 650.50, fragil: true },
    { nome: 'caderno', qtde: 4, preco: 27.90, fragil: false },
    { nome: 'lapis', qtde: 3, preco: 5.78, fragil: false },
    { nome: 'tesoura', qtde: 1, preco: 5.99, fragil: true },
]

//1. fragil: true
//2. qtde: 4, preco: 27.10 -> total
//3. media totais

const getFragil = item => item.fragil
const getQtdePreco = item => {
    return ({
        qtde: item.qtde,
        preco: item.preco
    })
}

const fragil = carrinho.filter(getFragil)
const qtdePreco = carrinho.map(getQtdePreco)

const getPreco = (acc, item) => acc + item.preco

const media = carrinho.reduce(getPreco, 0) / carrinho.length

console.log("\nProdutos frágeis: ");
console.log(fragil);
console.log("\nQuantidade e Preço: ");
console.log(qtdePreco);
console.log("\nmedia 1: " + media + "\n");


//1. fragil: true
//2. qtde * preco -> total
//3. media totais

// .map(el, i, array)
// .filter(el, i, array)
// .reduce(acc, el, i, array)

const isFragil = item => item.fragil
const getTotal = item => item.qtde * item.preco
const getMedia2 = (acc, el) => {
    const novaQtde = acc.qtde + 1
    const novoTotal = acc.total + el

    /*
        console.log({
            qtde: novaQtde,
            total: novoTotal,
            media: novoTotal / novaQtde
        });
    */

    return {
        qtde: novaQtde,
        total: novoTotal,
        media: novoTotal / novaQtde
    }
}

const media2 = carrinho
    .filter(isFragil)
    .map(getTotal)
    .reduce(getMedia2, { qtde: 0, total: 0, media: 0 }).media


console.log("média 2: " + media2);