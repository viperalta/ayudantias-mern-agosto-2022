console.log("hola mundo")

//Para definir una variable que pueda cambiar en el tiempo ocupo:
let numeroa = 5
let numerob = 10
let suma = numeroa + numerob

console.log("suma de numero y numerob:",suma);

//Para definir una variable que debe mantenerse constante en el tiempo ocupo const.
const saludo = "hola";
const nombre = "vicente";

const hablar = saludo+" "+nombre;
console.log(hablar);

function mifuncion(parametro,parametro2){
    console.log("este console log esta adentro de la funcion");
    console.log("PARAMETRO ENTREGADO:",parametro)
    console.log("PARAMETRO 2 ENTREGADO:",parametro2)
}

mifuncion(numeroa,numerob);

console.log(numeroa);

numero = 6;

console.log(numeroa);

let clicks = 0;

const ampolleta = document.querySelector(".ampolleta");

function clickBoton(elemento){
    console.log(elemento);
    console.log("Se ha hecho un click en el boton");
    clicks++;
    console.log("se han hecho " + clicks + " clicks");

    console.log("Text de ampolleta:",ampolleta.innerText)

    if(ampolleta.innerText==="ON"){
        ampolleta.innerText="OFF"
        ampolleta.style.backgroundColor="black";
        ampolleta.style.color="white";
    } else{
        ampolleta.innerText="ON";
        ampolleta.style.backgroundColor="yellow";
        ampolleta.style.color="black";
    }
}


console.log(ampolleta);
const ampolletaId = document.getElementById("idampolleta");
const otraampolleta = document.getElementById("idampolleta2");

console.log("otra ampolleta",otraampolleta)

const usandoelid = document.querySelector("#idampolleta");
console.log(usandoelid);

const caja = document.getElementById("caja");

const intermedio = document.getElementById("intermedio");

function cambiarCaja(){
    caja.style.backgroundColor="red";
    console.log("esto es el innerText de la caja:",caja.innerText);
    caja.innerText+="EL NUEVO TEXTO";
    caja.innerHTML="<div class='intermedio' id='intermedio'> NUEVO TEXTO</div>"
    const intermedio = document.getElementById("intermedio");
    intermedio.style.display="flex";
    intermedio.style.justifyContent="center";
    intermedio.style.alignItems="center";
    intermedio.style.height="100%"
}

const nombreInput = document.getElementById("nombre")

function setearNombre(elementoInput){
    console.log("elementoInput",elementoInput.value);
    nombreInput.innerText=elementoInput.value;
}








