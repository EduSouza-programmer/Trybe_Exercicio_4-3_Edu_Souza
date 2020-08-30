let numero = 5;
let quantAsteriscos = [];
let asteriscoFormatado = "";

if (numero > 1) {
    for (let a = 1; a <= numero; a += 1) {
        quantAsteriscos.push("*");
        for (let b = a + 1; b <= numero; b += 1) {
            quantAsteriscos.push("\xa0");
        }
        asteriscoFormatado = quantAsteriscos.join("");
        console.log(asteriscoFormatado.split("").reverse().join(""));
        for (let i = quantAsteriscos.length; i > a; i--) {
            quantAsteriscos.pop();
        }
    }
}
