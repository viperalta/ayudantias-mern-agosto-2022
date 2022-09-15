//Invertir un arreglo, usando for

const numeros = [2,54,65,77];

function invertirArreglo(arreglo){

    const arregloAuxiliar = [];

    for(let i=arreglo.length-1;i>=0;i--){
        arregloAuxiliar.push(arreglo[i]);
    }

    return arregloAuxiliar;

}

const arregloinverso = invertirArreglo(numeros);
console.log(arregloinverso)

//Devolver solo los numeros de un arreglo

const arr1 = [23,4,"hola", "coding",25];

function soloNumeros(arreglo){

    const aux = [];

    for(let i=0;i<arreglo.length;i++){

        console.log("el tipo de indice "+i+" es "+typeof arreglo[i])
        if(typeof arreglo[i] === "number"){
            aux.push(arreglo[i]);
        }
    }

    return aux;

}

console.log(soloNumeros(arr1));

//Devolver el promedio de los datos de un arreglo

const numeros2 = [2,54,65,77];

function obtenerPromedio(arreglo){
    let suma = 0;

    for(let i=0;i<arreglo.length;i++){
        suma+=arreglo[i];
    }

    return suma/arreglo.length

}

console.log(obtenerPromedio(numeros2));

//Devolver un arreglo con sus elementos multiplicados por un parametro

const arregloNumeros4 = [3,5,10];

function devolverMultiplicados(arreglo,numero){

    const aux = [];

    for(let i=0;i<arreglo.length;i++){
        aux.push(numero*arreglo[i])
    }

    return aux;


}

console.log(devolverMultiplicados(arregloNumeros4,4));

//OBJETOS

const persona1 = {
    nombre : "Jose Miguel",
    edad: 20,
    actividades:["estudiar","programar"]
}

console.log(persona1);

//persona1.edad = 30;
persona1["edad"] = 30;

console.log(persona1);

persona1.direccion="alameda 123";

console.log(persona1);

const persona2 = {
    nombre : "Miguel",
    edad: 10,
    actividades:["estudiar","programar","basket"]
}

const persona3 = {
    nombre : "Carlo",
    edad: 17,
    actividades:["estudiar","programar","futbol"]
}

const personas = [persona1,persona2,persona3];

console.log(personas);

//Funcion q me devuelva un arreglo con las personas mayores a x años

function mayores18(arreglo,x){
    const aux = [];

    for(let i=0; i<arreglo.length;i++){
        if(arreglo[i].edad>x){
            aux.push(arreglo[i]);
        }
    }
    return aux;

}

console.log(mayores18(personas,15));

function personasConInteresesSimilares (arreglo,persona){
    const aux=0;
}




