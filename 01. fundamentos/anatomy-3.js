//Function expression
const increment1 = function (n) {
    return n + 1
}

const increment2 = (n) => {return n+1}

const increment3 = n => {return n+1}

const increment4 = n => n+1

console.log(increment1(2))
console.log(increment2(5))
console.log(increment3(7))
console.log(increment4(99))


const sum = (a, b) => a + b
console.log(sum(3,8))
