const numbers = [1, 2, 3, 4, 5, 6]


const numbersV2 = numbers.map(elem => elem * 2)

console.log(numbers, numbersV2);

const students = [
    { name: " joão ", score: 6.4 },
    { name: " maria ", score: 8.0 },
    { name: " frederico ", score: 5.5 },
    { name: " eleonor ", score: 9.8 },
]


const getScore = elem => elem.score

const result =
    students
        .map(getScore)
        .map(Math.ceil)


console.log(students, result);


