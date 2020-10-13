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


//fn -> 3 * 7
//calcular(3)(7)(fn)
function calcular(x) {
    return function (y) {
        return function (fn) {
            return fn(x, y)
        }
    }
}


const result = calcular(1)(2)(divisao)

console.log(result);