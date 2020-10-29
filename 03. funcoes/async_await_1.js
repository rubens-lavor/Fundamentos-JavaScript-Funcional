function espararPor(tempo = 2000){
    return new Promise(function(resolve) {
        setTimeout(() => {
            console.log("executando promise...");
            resolve()
        }, tempo);
    })
}