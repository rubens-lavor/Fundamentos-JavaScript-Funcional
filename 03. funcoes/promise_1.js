//promise

const primeiroElemento = (array) => array[0]
const primeiraLetra = (str) => str[0]
const letraMaiuscula = letra => letra.toUpperCase()

new Promise(function(resolve) {
    resolve(["ana","josé","edu"])
})
    .then(primeiroElemento)
    .then(primeiraLetra)
    .then(letraMaiuscula)
    .then(console.log)
