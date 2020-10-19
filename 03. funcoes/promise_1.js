//promise

function primeiroElemento(array){
    return array[0]
}

function primeiraLetra(str) {
    return str[0]
}

const letraMaiuscula = letra => letra.toUpperCase()


new Promise(function(cumprirPromessa) {
    cumprirPromessa(["ana","josé","edu"])
})
    .then(primeiroElemento)
    .then(primeiraLetra)
    .then(letraMaiuscula)
    .then(console.log)
