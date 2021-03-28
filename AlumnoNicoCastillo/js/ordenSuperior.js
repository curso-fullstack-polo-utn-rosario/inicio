//Ejercicio 01 THE TEAM 
console.log("Ejercicio 01"); 
let teamName = "formación"; 
let people = ["Amalia", "Karla", "Silvana", "Manu", "John", "Mike"]; 
console.log(`El nombre del equipo es: ${teamName}`);
console.log(`Los integrantes del mismo son: ${people}`);
function imprimir (team, people) {
    cant = people.length;
    console.log(`Hay ${cant}, personas en el equipo ${team}`); 
}
imprimir(teamName, people); 
console.log(" ");
//-----------------------------------------------------------------
// Ejercicio 02 SQUARE OF PAIRS 
console.log("Ejercicio 02"); 
const primero = [2, 4, 6];
const segundo = [-3, 2, -8, 12, 5]; 
const tercero = [1, 2, 3, 4, 5];

//el enunciado pide los cuadrados de los positivos, creo la función y hago el map. 
const positivos = x => {
    if ( x > 0){
        return x = x*x;
    } else return x;
}
losCuadrados = primero.map (positivos);
console.log(`El cuadrado de los positivos de: ${primero} son: ${losCuadrados}`);
losCuadrados = segundo.map (positivos);
console.log(`El cuadrado de los positivos de: ${segundo} son: ${losCuadrados}`);
losCuadrados = tercero.map (positivos);
console.log(`El cuadrado de los positivos de: ${tercero} son: ${losCuadrados}`);

console.log("------------------------------------");
// En el titulo del ejercicio, hablaba de los pares, asi que también dejo esa función. 
const pares = x => {
    if (x % 2 == 0) {
        return x = x*x;
    } else return x;
};

todosLosPares = primero.map (pares);
console.log(`El cuadrado de los pares del: ${primero} son:  ${todosLosPares}`); 
todosLosPares = segundo.map (pares);
console.log(`El cuadrado de los pares del: ${segundo} son:  ${todosLosPares}`);
todosLosPares = tercero.map (pares);
console.log(`El cuadrado de los pares del: ${tercero} son:  ${todosLosPares}`);
console.log(" ");
//-----------------------------------------------------------------
// Ejercicio 03 Inventario 
console.log("Ejercicio 03");
const inventario = [ 
    {
        categoria: "Bebidas", 
        precioUni: 100
    }, 
    {
        categoria: "Bebidas", 
        precioUni: 20
    }, 
    {
        categoria: "Lacteos", 
        precioUni: 11
    } 
]; 

const filtroBebidas = x => { 
    console.log("Filtro por la Categoría...")
    if (x.categoria === "Bebidas"){ 
        let y = x.precioUni;
        return y ; 
    } 
}; 
function recuperoPrecios (x) { 
    console.log("Creo un arreglo con los precios de la categoría...")
    let y = x.precioUni;
    return y; 
};
const bebidas = inventario.filter (filtroBebidas); 
console.log(bebidas);
const todosUnit = bebidas.map (recuperoPrecios);
console.log(todosUnit);
let total = todosUnit.reduce ((x,y) => x += y);
console.log(`El total de la categría es: ${total}`);
console.log(" ");
//-----------------------------------------------------------------
// Ejercicio 04 CAPITALIZE 
console.log("Ejercicio 04");
let frase = `laboratoria mexico`;
console.log(`La frase antes de capitalizar la primera letra de cada palabra: ${frase}`);

let arrSeparadas = frase.split(" ");
let recorridas = arrSeparadas.map( unaPalabra => {
    return unaPalabra[0].toUpperCase() + unaPalabra.substring([1]);
}); 

frase = recorridas.join(" ");
console.log(`La frase después de capitalizar la primera letra de cada palabra: ${frase}`);