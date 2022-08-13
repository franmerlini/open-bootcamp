/* 
Crea un archivo JS que contenga las siguientes líneas
- Una variable que contenga la lista de la compra (mínimo 5 elementos)
- Modifica la lista de la compra y añádele "Aceite de Girasol"
- Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
- Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
- Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
- Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
- Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
*/

let listaCompra = [
    "Leche",
    "Huevos",
    "Pan",
    "Aceite de Girasol",
    "Arroz",
    "Café",
];
listaCompra.push("Aceite de Girasol");
listaCompra.splice(listaCompra.indexOf("Aceite de Girasol"), 1);
let peliculas = [
    {
        titulo: "El Padrino",
        director: "Francis Ford Coppola",
        fecha: "1972",
    },
    {
        titulo: "Pulp Fiction",
        director: "Quentin Tarantino",
        fecha: "1994",
    },
    {
        titulo: "Kill Bill",
        director: "Quentin Tarantino",
        fecha: "2003",
    },
];
let peliculasPosteriores = peliculas.filter((pelicula) => {
    return pelicula.fecha > "01/01/2010";
});
let directores = peliculas.map((pelicula) => {
    return pelicula.director;
});
let titulos = peliculas.map((pelicula) => {
    return pelicula.titulo;
});
let directoresYTitulos = directores.concat(titulos);
let directoresYTitulos2 = directores.concat(...titulos);
