let numero = 5;
let quantAsteriscos = "";

if (numero > 1) {
    for (let i = 0; i <= numero; i += 1) {
        console.log(quantAsteriscos);
        quantAsteriscos = "";
        for (let i = 1; i <= numero; i += 1) {
            quantAsteriscos += "*";
        }
    }
}
