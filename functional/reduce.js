const numbers = [1,2,3,4,5,6]

const sum = (total, elem) => total + elem
const total = numbers.reduce(sum,10)

console.log(total);