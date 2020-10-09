/**
* retornar uma função a partir de uma função
*/


// curring
function finalPrice(tax) {
    return function(price) {
        return price * (1 + tax)
    }
}

const nycFinalPrice = finalPrice(0.875)

console.log(nycFinalPrice(25.1));
console.log(nycFinalPrice(10.0));
console.log(nycFinalPrice(50.1));

