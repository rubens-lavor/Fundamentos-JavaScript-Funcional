//a function map espera receber 3 parametros valor, indice, array
// map tem um laço interno

const nums = [1,2,3,4,5]
//const dobro = (n, i, a) => n*2 + i + a.length
const dobro = n => n*2
console.log(nums.map(dobro));

const nomes = ['Ana', 'Bia', 'Gui', 'Lia', 'Rafa']
const primeiraLetra = texto => texto[0]
const letras = nomes.map(primeiraLetra)
console.log(nomes, letras)

const carrinho = [
    {nome:'caneta', qtde: 10, preco: 7.90},
    {nome:'impressora', qtde: 0, preco: 650.00},
    {nome:'caderno', qtde: 4, preco: 27.90},
    {nome:'lapis', qtde: 3, preco: 5.78},
    {nome:'tesoura', qtde: 1, preco: 5.99},
]

const getNome = item => item.nome
const getTotal = item => item.preco * item.qtde

console.log(carrinho.map(getNome))
console.log(carrinho.map(getTotal))