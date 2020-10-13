function exec(fn, a, b) {
    return fn(a, b)
}

const somarNoTerminal = (x, y) => console.log(x + y);
const subtrairNoTerminal = (w, z) => console.log(w - z);
const subtrair = (a,b) => a - b

exec(subtrairNoTerminal, 56, 38)
exec(somarNoTerminal, 182, 27)


const result = exec(subtrair,50,25)
console.log(result);

const cd = () => console.log("Exec...");
setInterval(cd, 1000)