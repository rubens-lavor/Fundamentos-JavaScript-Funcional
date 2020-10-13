//somar (3)(4)(5)
function somar(a) {
    return function (b) {
        return function (c) {
            return a + b + c
        }
    }
}

const somarAB = somar(3)(4)
console.log(somarAB(13));
console.log(somar(10)(20)(30));

function multi(a, b) { return a * b }
function divisao(a, b) { return a / b }
function subtracao(a, b) { return a - b }


//calcular(3)(7)(fn)
function calcular(x) {
    return function (y) {
        return function (fn) {
            return fn(x, y)
        }
    }
}


const result = calcular(3)(7)(multi)
const result2 = calcular(30)(5)(divisao)

console.log(result);
console.log(result2);