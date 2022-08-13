/*
Crea los siguientes archivos JS:
- factorial-for.js -> Este archivo debe calcular el factorial de 10 utilizando un solo bucle for
- factorial-while.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while
- factorial-break.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break
 */

const factorialBreak = (num) => {
    let result = 1;
    let i = 1;
    while (i <= num) {
        result *= i;
        i++;
        if (i === num) {
            break;
        }
    }
    return result;
};

console.log(factorialBreak(10));
