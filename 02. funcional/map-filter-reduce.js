const students = [
    { name: " joão ", score: 6.4 },
    { name: " maria ", score: 8.0 },
    { name: " frederico ", score: 9.5 },
    { name: " eleonor ", score: 9.8 },
]

const greatStudent = student => student.score >=9
const getScore = elem => elem.score

const avg = (acc, elem, i, array) => {
    if (i === array.length - 1){
        return (acc + elem) / array.length
    }else {
        return acc + elem
    }
}

console.log(
    students.filter(greatStudent).map(getScore).reduce(avg)
);