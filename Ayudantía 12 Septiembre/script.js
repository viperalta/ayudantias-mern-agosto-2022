console.log("hola mundo");

const palabra = "hola mundo como estas";

//substring
console.log("SUBSTRING",palabra.substring(0,12))
console.log("Caracter en la posicion 2:",palabra[0]);

//longitud de una cadena (cuantos caracteres tiene una cadena)

//Obtener los ultimos 5 caracteres de una cadena
const subPalabra = palabra.substring(palabra.length-5,palabra.length)
console.log("utimas 5", subPalabra);

//includes. 
console.log("EXISTE hola en palabra?",palabra.includes("hola."))

//split
const direccion = "Santiago-Alameda 123-22234545-Vicente"
const splitedDireccion = direccion.split(" ")
console.log(splitedDireccion[1]);

//ARREGLOS
const numeros = [13,27,18]

//Agregar valor
numeros.push(2);

console.log(numeros);

//Retirar el ultimo valor de un arreglo
numeros.pop()

console.log(numeros);

//Retirar el primer valor de un arreglo
numeros.shift()
console.log(numeros);

const animales = ["perro","gato","tortuga","aguila"]

//indexOf
console.log("la cadena gato está en la posicion "+animales.indexOf("gato") + " del arregllo");

//splice
animales.splice(1,1); //segundo parametro indica cuantos elementas eliminará a partir del primer parametro.
console.log(animales);

//devolver longitud de una cadena

const cadena = "hola"

function devolverLongitud(parametro){
    return parametro.length;
}

const longitudCadena = devolverLongitud(cadena);
console.log(longitudCadena);

//Funcion que entregue la cadena mas larga

const animales2 = ["perro","gato","tortuga","aguila"]

console.log(animales2[3])

for (let i = 0 ; i<10 ; i+=3){
    console.log("El valor de i es: "+i);
}

function cadenaMasLarga (arreglo) {
    let masLarga= "";
    for (let i = 0; i<arreglo.length;i++){
        console.log("El valor del arreglo en la posición "+ i + " es "+ arreglo[i]);
        console.log("La longitud del elemento "+ i + " del arreglo es "+ arreglo[i].length)
        if(arreglo[i].length > masLarga.length){
            masLarga=arreglo[i];
        }
    }
    console.log("la cadena ma larga es "+masLarga)
    return masLarga;
}

//i=0,se almacena perro en masLarga
//i=1, la longitud de gato, es mayoe que la longitud de perro?
//i=2, la longitud de tortuga es mayor a la de perro. Entonces, almaceno tortuga en masLarga
//i=3, la longitud de aguila no es mayor a la de tortuga, por lo que masLarga permanece siendo tortuga

cadenaMasLarga(animales2);

const numeros2 = [-23,-3,-26,-45];

function devolverNumeroMasGrande(arreglo){
    let masGrande=arreglo[0];

    for(let i=0;i<arreglo.length;i++){
        if(arreglo[i]>masGrande){
            masGrande = arreglo[i];
        }
    }

    console.log("EL VALOR MAS GRANDE ES ", masGrande)
}

devolverNumeroMasGrande(numeros2);

const animales3 = ["perro","gato","tortuga","aguila","ballena"]

function palabrasDeXCaracteres (arreglo,numero){
    const arr = [];
    for (let i=0;i<arreglo.length;i++){
        if(arreglo[i].length===numero){
            arr.push(arreglo[i]);
        }
    }
    return arr;
}

const arregloConXCaracteres = palabrasDeXCaracteres(animales3,7);
console.log(arregloConXCaracteres);










