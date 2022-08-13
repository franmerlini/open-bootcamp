/*
Crea los siguientes archivos JS:
- factorial-for.js -> Este archivo debe calcular el factorial de 10 utilizando un solo bucle for
- factorial-while.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while
- factorial-break.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break
 */

const factorialBreak = (num) => {
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
        if (i === num) {
            break;
        }
    }
    return result;
};

console.log(factorialBreak(10));
