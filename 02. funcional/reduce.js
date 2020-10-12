const numbers = [1,2,3,4,5,6]

const sum = (total, elem) => total + elem
const total = numbers.reduce(sum,10)

console.log(total);

const avg = (acc, elem, i, array) => {
    if (i === array.length - 1){
        return (acc + elem) / array.length
    }else {
        return acc + elem
    }
}

const resul = numbers.reduce(avg)

console.log(resul);