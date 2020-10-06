//função anonima
(function (a, b, c) {
    return a + b + c
})


//function expression
const sum = function (a,b) {
    return a+b
}

const result = sum(7,49)
console.log(result)

const anotherSum = sum
console.log(anotherSum(5,10))
