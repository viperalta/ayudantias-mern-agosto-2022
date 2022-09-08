/* 1. Aumentar un contador y mostrarlo en un elemento */

const contadorElement = document.querySelector(".contador");
let contador = 0;
contadorElement.innerText=contador;

function aumentarContador(){
    contador+=1;
    //contador = contador +1;
    contadorElement.innerText = contador;
}

/* 2. Lanzar una alerta con el valor de un input de texto */

const alertInput = document.getElementById("alert-input");

function lanzarAlertaInput(){
    console.log(alertInput)
    alert("Se ha lanzado una alerta con este valor del input: "+alertInput.value);
}

/* 3. Lanzar una alerta con el valor de un select que cambia */

const selectAlert = document.getElementById("select-alert")

function changeSelectAlert(){
    alert("Mis animales favoritos son las/los: "+selectAlert.value);
}

/* 4. Lanzar alerta despues de 10 segundos. BONUS: Crear cuenta regrersiva de 10 segundos. */

setTimeout(() => {alert("HAN PASADO 10 SEGUNDOS")}, 10001);

const timer = document.querySelector(".timer");
let seconds = 10;
timer.innerText=seconds;

setInterval(() => {
    if(seconds>0){
        seconds--;
        timer.innerText = seconds;
    }
}, 1000);


/* 5. Cambiar un texto segun el cambio en un select */

//const selectValue = document.getElementById("select-value")
const selectText = document.getElementById("select-text");
selectText.innerText="La opción escogida en el select es: Coding";

function changeSelect(elselect){
    selectText.innerText="La opción escogida en el select es: "+elselect.value;
}

/* 6. Borrar un elemento en el que se le hace click */

function eliminarCaja(){
    const box = document.getElementById("box");
    box.remove();
}

/* 7. Mostrar info extra al hacer hover en un elemento */

const pElement = document.getElementById("p-element");

function showP(){
    pElement.classList.remove("invisible");
    pElement.classList.add("visible");
}

function hideP(){
    pElement.classList.add("invisible");
    pElement.classList.remove("visible");
}

/* 8. Cambiar src de image al hacer hover */

/* 9. Reproducir audio */

/* 10. Slider de imagenes */

