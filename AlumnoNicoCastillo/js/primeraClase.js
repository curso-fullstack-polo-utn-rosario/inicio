/*Ejercicio 01 */

let boton = document.querySelector("#cambioTexto"); //selecciono el boton, para agregar un listener
boton.addEventListener("click", cambiarTxt); //escucho por un click en el boton, para llamar a la funcion 

function cambiarTxt(){ //la funcion cambiara el texto en la variable seleccionada 
    let elemento1 = document.querySelector("#holaMundo"); //tomo el elemento holaMundo en una variable
    elemento1.innerHTML = "Hello JavaScriptWorld!"; 
    console.log("Resolución del Ejercicio 01");
}

//Ejercicio 02 
let btnAumTam = document.querySelector("#cambioTamano");
btnAumTam.addEventListener("click", aumentarTam);

function aumentarTam(){
    document.getElementById("txtACambiar").style.fontSize="40px";
    console.log("Resolucion del Ejercicio 02");
}


//Ejercicio 03
let mostrar = document.querySelector("#btnMostrar"); //selecciono el botón de mostrar 
mostrar.addEventListener("click", fncMostrar); //agrego listener al botón 
let ocultar = document.querySelector("#btnOcultar"); //selecciono el botón de ocultar 
ocultar.addEventListener("click", fncOcultar); //agrego listener a ocultar 
function fncMostrar(){
    console.log ("muestro parrafo oculto");
    document.getElementById("pMostrar").style.visibility = "visible"; //cambio el estilo CSS para mostrar el parrafo oculto 
}
function fncOcultar(){
    console.log ("oculto un parrafo que estaba visible");
    document.getElementById("pOcultar").style.visibility = "hidden"; //cambio el estilo CSS para ocultar el parrafo visible 
}

//Ejercicio 04 
// Es mostrar una URL que ya está resuelto en HTML 

//Ejercicio 05 

let carga = document.getElementById("ingresar").addEventListener("click", cargaApellido);
function cargaApellido(){
    let ape = document.getElementById("apellido").value;
    console.log(ape);
    document.getElementById("ingresando").style.visibility = "visible";
    let apeMostrar = document.getElementById("ingresando").innerHTML = ape;

}


//Ejercicio 06 
let sobreEj06 = document.querySelector("#ejercicio06");
sobreEj06.addEventListener("mouseover", cambioFondo);
sobreEj06.addEventListener("mouseout", resetEj06);
function cambioFondo(){
    document.getElementById("ejercicio06").style.background = "#e1e0e4";
}
function resetEj06(){
    document.getElementById("ejercicio06").style.background = "#fefefe";
}
let btnOscuro = document.querySelector("#dark");
btnOscuro.addEventListener("click", goDark); 
function goDark () {
    console.log("cambio a modo oscuro");
    document.body.style.background = "#444645";
}
let btnAzul = document.querySelector("#goBlue"); 
btnAzul.addEventListener("click", goAzul); 
function goAzul(){
    console.log("pasamos a modo azul"); 
    document.body.style.background = "#96c2f1"; 
}
let btnResetear = document.querySelector("#resetear"); 
btnResetear.addEventListener("click", goClaro);
function goClaro(){
    console.log("pasamos a Modo Claro"); 
    document.body.style.background = "#fefefe"; 
}


// Ejercicio 07 
let txtMinus = document.getElementById("aMayus").innerText; 
let sobreEj07 = document.getElementById("ej07");
sobreEj07.addEventListener("mouseover", cambioMayus); 
sobreEj07.addEventListener("mouseout", cambioMinus);
function cambioMayus () {
    let txtMayus = txtMinus.toUpperCase(); 
    document.getElementById("aMayus").innerHTML = txtMayus;
}
function cambioMinus () {
    document.getElementById("aMayus").innerHTML = txtMinus;
}


//Ejercicio 08 
let aContar = document.getElementById("conteo");
contar();
function contar(){
    let cantA;
    cantA = aContar.getElementsByTagName('a').length;
    console.log (cantA);
}
