//a function map espera receber 3 parametros valor, indice, array
// map tem um laço interno

const nums = [1,2,3,4,5]
//const dobro = (n, i, a) => n*2 + i + a.length
const dobro = n => n*2
console.log(nums.map(dobro));