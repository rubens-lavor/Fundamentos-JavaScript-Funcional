function sayHallo() {
    console.log("Hello")
}

sayHallo()

function sayHelloTo(nome) {
    console.log(`Hello ` + `${nome}`)
}

sayHelloTo("mundo")

function returnHi() {
    return "hi!"
}

const greeting = returnHi()

console.log(greeting)


function returnHiTo(nome) {
    return `Hi ${nome}`
}

console.log(returnHiTo("josé"))