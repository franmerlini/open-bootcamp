/*
ENUNCIADO
Crea un nuevo archivo JS que contenga una lista con los siguientes elementos:
- Tu nombre (string)
- Tu edad (number)
- ¿Eres desarrollador? (boolean)
- Tu fecha de nacimiento (Date)
- Tu libro favorito (Objeto con propiedades: titulo, autor, fecha, url)
*/

let list = [
    "Francisco",
    22,
    true,
    new Date(1999, 10, 12),
    {
        titulo: "The Lord of the Rings",
        autor: "J.R.R. Tolkien",
        fecha: new Date(1954, 11, 25),
        url: "https://en.wikipedia.org/wiki/The_Lord_of_the_Rings",
    },
];
