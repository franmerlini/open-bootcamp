/*
Crea un archivo JS que contenga las siguientes líneas
- Una variable que contenga tu altura en centímetros (entero)
- Una variable que contenga tu altura en metros (número de coma flotante)
- Una variable que contenga tu peso en kilogramos (número de coma flotante)
- Una variable que contenga tu altura en metros redondeada hacia arriba
- Una variable que contenga tu peso en kilogramos redondeado hacia abajo
- Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript
*/

let altura = 1.75;
let peso = 70;
let alturaMetros = altura * 100;
let pesoKilogramos = peso / 1000;
let alturaMetrosRedondeada = Math.ceil(alturaMetros);
let pesoKilogramosRedondeado = Math.floor(pesoKilogramos);
let max = Number.MAX_VALUE + 1 === Number.MAX_VALUE;
