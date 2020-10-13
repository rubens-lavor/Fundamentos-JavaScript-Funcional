// arrow function
const felizNatal = () => console.log("Feliz natal");

felizNatal()

const saudacao = nome => `Fala ${nome}, blz?`

console.log(saudacao("mano"));

const somar = (...numeros) => {
    let total = 0
    for (let n of numeros) {
        total += n
    }
    return total
}

console.log(somar(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
console.log(somar(1, 2, 3, 4, 5))


const potencia = base => exp => Math.pow(base, exp)
console.log(potencia(2)(8));


// this
Array.prototype.ultimo = function () {
    console.log(this[this.length - 1]);
}
const numeros = [1,2,3]
numeros.ultimo()
