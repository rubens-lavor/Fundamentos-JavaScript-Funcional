const numbers = [1, 2, 3, 4, 5, 6]

const greaterThanZero = elem => elem > 0
const greaterThanTen = elem => elem > 10
const even = elem => elem % 2 === 0

console.log(numbers.filter(greaterThanZero));
console.log(numbers.filter(greaterThanTen));
console.log(numbers.filter(even));

const students = [
    { name: " joão ", score: 6.4 },
    { name: " maria ", score: 8.0 },
    { name: " frederico ", score: 5.5 },
    { name: " eleonor ", score: 9.8 },
]


const greatStudent = student => student.score >=9

console.log(students.filter(greatStudent) + "\n");

console.log(students);

