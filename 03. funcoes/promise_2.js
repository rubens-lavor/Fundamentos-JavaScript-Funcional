/*
setTimeout(() => {
    console.log("executando callback...");
    setTimeout(() => {
        console.log("executando callback...");
        setTimeout(() => {
            console.log("executando callback...");
        }, 2000)
    }, 2000)
}, 2000);
*/

function espararPor(tempo = 2000){
    return new Promise(function(resolve) {
        setTimeout(() => {
            console.log("executando promise...");
            resolve()
        }, tempo);
    })
}

espararPor()
    .then(() => espararPor())
    .then(espararPor)