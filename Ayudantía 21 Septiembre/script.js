//Repetir n veces los valores de un arreglo

const arr = ["Daniela","Josemaria","Carlo"]

function repetirValores (arreglo, n){

    const aux = [];

    for(let i=0;i<arreglo.length;i++){
        for(let j=0;j<n;j++){
            aux.push(arreglo[i])
        }
    }

    return aux;

}

//n=3
//Para i = 0, j esta iterando desde 0 hasta n. En el caso del ejemplo, desde 0 hasta 3. 
//Para i = 1, j esta iterando desde 0 hasta n. En el caso del ejemplo, desde 0 hasta 3. 
//Para i = 2, j esta iterando desde 0 hasta n. En el caso del ejemplo, desde 0 hasta 3. 
//Y asi, hasta i = arreglo.length -1.

console.log(repetirValores(arr,3));

const repetirValoresFlecha = (arreglo,n) => {
    const aux = [];

    for(let i=0;i<arreglo.length;i++){
        for(let j=0;j<n;j++){
            aux.push(arreglo[i])
        }
    }

    return aux;

}

//DESESTRUCTURACION

const user = {
    firstName:"Vicente",
    lastName:"Peralta",
    email:"vperalta@codingdojo.cl",
    password:"clave1234",
    hobbys:["programar","basket","futbol"]
}

const user2 = {
    firstName:"Vicente",
    lastName:"Peralta",
    email:"vperalta@codingdojo.cl",
    hobbys:["programar","basket","futbol"]
}

let {firstName,lastName:apellido,hobbys} = user;

console.log(firstName);

user.hobbys.push("cantar");

console.log(user);

function analizarUsuario({firstName}){
    console.log("Hola"+firstName);
}

analizarUsuario(user);

const animales = ["perro","gato","tortuga","pajaro","jirafa"]

const [ , ,tercerAnimal, ,quintoAnimal]=animales;

console.log(tercerAnimal)

//SPREAD

const user3 = {...user,edad:35}
const copiaUser = {...user}

copiaUser.firstName="Nuevo nombre"

copiaUser.hobbys.push("nuevo hobby");


console.log("original",user);
console.log("copia",copiaUser);

//REST
const user4 = {
    firstName:"Vicente",
    lastName:"Peralta",
    email:"vperalta@codingdojo.cl",
    hobbys:["programar","basket","futbol"],
    sayHello:function(){
        console.log(this.firstName+" DICE HOLA")
        return "hola"
    }
}
const animales2 = ["perro","gato","tortuga","pajaro","jirafa"]

const {firstName:firstName4, ...otrasPropiedades}=user4;

console.log(otrasPropiedades);

const [ ,segundoAnimal, ...otrosAnimales] = animales2;

console.log(otrosAnimales);

const user5 = {edad:35,...user4}
//const user5 = {nuevoObjeto:{propiedad1:"hola"},...user4}

console.log(user5);
console.log(user4.sayHello());

