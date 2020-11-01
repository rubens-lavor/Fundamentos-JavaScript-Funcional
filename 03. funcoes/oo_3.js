//função construtora
function Produto (nome, preco, desc = 0.15){
    this.nome = nome
    this.preco = preco
    this._desc = desc

    this.precoFinal = function() {
        return this.preco * (1-this._desc)
    }
}

Produto.prototype.log = function () {
    console.log(`Nome: ${this.nome} - Preço: R$ ${this.preco}`);
}

Object.defineProperty(Produto.prototype, 'desc',{
    get: function(){
        return this._desc
    }
})

Object.defineProperty(Produto.prototype, 'descString',{
    get: function(){
        return `${this._desc * 100}% de desconto`
    }
})

const p1 = new Produto('Caneta', 2.34)
p1.log()

console.log(p1.nome);
const p2 = new Produto('Geladeira', 12.30)
console.log(p2.preco);
console.log(p2.precoFinal());

console.log(p2.desc);
console.log(p2.descString);