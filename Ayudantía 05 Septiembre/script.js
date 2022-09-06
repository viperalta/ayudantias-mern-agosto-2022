const numberOfBoxes = document.getElementById("numberOfBoxes");
const smartContainer = document.querySelector(".smart-container");

function agregarCajas(){
    console.log(numberOfBoxes);
    console.log(numberOfBoxes.value);
    console.log(typeof numberOfBoxes.value)
    const numero = parseInt(numberOfBoxes.value);
    console.log("tipo de numero",typeof numero);

    let innerH = "";

    for(let i=0; i<numero;i++){
        innerH+="<div class='box'></div>"
    }
    smartContainer.innerHTML=innerH;
}

const color = document.getElementById("boxColor");
const colorContainer = document.getElementById("color-container");

const numeros = [17,22,31];
console.log(numeros[3]);
numeros.push("hola")
console.log(numeros);

const colores = [];

function agregarCajaDeColor(){
    colores.push(color.value);
    let innerH = "";
    for (let i=0;i<colores.length;i++){
        innerH += `<div class="box" ${"style=background-color:"+colores[i]}></div>`
    }
    console.log("COLORES",colores);
    colorContainer.innerHTML=innerH;
}

//Metodo alternativo concatenando el ultimo color al innerHtml del contenedor
/* function agregarCajaDeColor(){
    colores.push(color.value);
    let innerH = `<div class="box" ${"style=background-color:"+colores[colores.length-1]}></div>`;
    console.log("COLORES",colores);
    colorContainer.innerHTML=colorContainer.innerHTML+ innerH;
} */

function appendCajaDeColor(){
    const newCaja = document.createElement("div");
    newCaja.classList.add("box");
    newCaja.style.backgroundColor=color.value;
    colorContainer.append(newCaja);
}