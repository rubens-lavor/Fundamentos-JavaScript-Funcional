//função anonima
(function (a, b, c) {
    let x
    console.log(`Result: ${a + b + c}`)
    console.log(x)
})(1, 2, 3);

(function (a, b, c) {
    let x = 100
    console.log(`Result: ${a + b + c}`)
    console.log(x)
})(1, 2, 3);


(() => { 
    console.log("arrow #01")
})();

(() => { 
    console.log("arrow #02")
})();