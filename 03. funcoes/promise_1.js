let a = 1
console.log(a);

let p = new Promise(function(cumprirPromessa) {
    cumprirPromessa(["ana","josé","edu"])
})

p
    .then(valor => valor[0])
    .then(primeiro => primeiro[0])
    .then(letra => letra.toUpperCase())
    .then(letraMaiuscula => console.log(letraMaiuscula))
