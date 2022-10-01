const numeros = [20,10,40,17];

let total = 0;
const suma = numeros.map((elemento)=>total+=elemento);

const sumaConReduce = numeros.reduce((acumulado,item)=>{
    acumulado+=10;
    return(acumulado+=item)
})
//acumulado=0
//En la primera iteracion, acumulado va a guardar el primer elemento del arreglo, sumando el elemento a 0.
//En la segunda iteracion, acumulado ya va a tener 20 en el. Entonces, le sumara a 20, el segundo elemento del arreglo (10). Obteniendo acumulado=30
//En la tercera, acumulado va a ser 30 y se le va a sumar 40.

console.log(total)
console.log(sumaConReduce)

const pokemones = Object.freeze([
    { id: 1, name: "Bulbasaur", types: ["poison", "grass"], power: 25 },
    { id: 5, name: "Charmeleon", types: ["fire"], power: 30 },
    { id: 9, name: "Blastoise", types: ["water"], power: 35 },
    { id: 12, name: "Butterfree", types: ["bug", "flying"], power: 10 },
    { id: 16, name: "Pidgey", types: ["normal", "flying"], power: 15 },
    { id: 23, name: "Ekans", types: ["poison"], power: 18 },
    { id: 24, name: "Arbok", types: ["poison"], power: 27 },
    { id: 25, name: "pikachu", types: ["electric"], power: 40 },
    { id: 37, name: "Vulpix", types: ["fire"], power: 30 },
    { id: 52, name: "Meowth", types: ["normal"], power: 54 },
    { id: 63, name: "Abra", types: ["psychic"], power: 32 },
    { id: 67, name: "Machamp", types: ["fighting"], power: 29 },
    { id: 72, name: "Tentacool", types: ["water", "poison"], power: 20 },
    { id: 74, name: "Geodude", types: ["rock", "ground"], power: 21 },
    { id: 87, name: "Dewgong", types: ["water", "ice"], power: 18 },
    { id: 98, name: "Krabby", types: ["water"], power: 15 },
    { id: 115, name: "Kangaskhan", types: ["normal"], power: 21 },
    { id: 122, name: "Mr. Mime", types: ["psychic"], power: 12 },
    { id: 133, name: "Eevee", types: ["normal"], power: 33 },
    { id: 144, name: "Articuno", types: ["ice", "flying"], power: 60 },
    { id: 145, name: "Zapdos", types: ["electric", "flying"], power: 70 },
    { id: 146, name: "Moltres", types: ["fire", "flying"], power: 65 },
    { id: 148, name: "Dragonair", types: ["dragon"], power: 55 },
  ]);

//Obtener un objeto en donde se guarde cuantos pokemones hay de cada tipo.

const cuantosCadaTipo= pokemones.reduce((acumulado,item)=>{
    console.log("ACUMULADO",acumulado)
    item.types.map((tipo)=>{
        console.log(tipo);
        acumulado[tipo] = (acumulado[tipo]||0)+1;
    })
    return acumulado;
},{})

console.log(cuantosCadaTipo);

//Obtener la suma total de poder por cada tipo

const poderCadaTipo=pokemones.reduce((acumulado,item)=>{
    item.types.map((tipo)=>{
        
        acumulado[tipo] = (acumulado[tipo]||0)+item.power;
    })
    return acumulado;
},{})

console.log(poderCadaTipo);

//Obtener un objeto en el que aparezca por cada tipo, un arreglo con los pokemones de ese tipo.

const cadaTipo = pokemones.reduce((acumulado,item)=>{
    item.types.map((tipo)=>{
        acumulado[tipo]?acumulado[tipo]=[...acumulado[tipo],item]:acumulado[tipo]=[item]
    })
    return acumulado;
},{})

console.log(cadaTipo);

//.sort
//Sort recibe un callback que compara los elementos del arreglo

let numbers = [0,6,10,22,3,45];

function compare(a,b){
    //Si el return de compare es menor a 0, el sort va a colocar al elemento a antes que el elemento b
    //Si el return de compare es mayor a 0, el sort va a colocar al elemento a despues que el elemento b
    //si el return es 0, no modifica posiciones
    //Ordene ascendentemente
    if(a<b) return -1
    if(a>b) return 1
    return 0
}

function compare2(a,b){
    return a-b
}

console.log(numbers.sort(compare2));

const animales = ["gato","perro","tortuga","elefante","jirafa"]

console.log(animales.sort(compare));
console.log("ABCD".charCodeAt(1))

const pokemonesOrdenados = pokemones.slice().sort((a,b)=>{
    if(a.name<b.name) return -1
    if(a.name>b.name) return 1
    return 0
})

console.table(pokemonesOrdenados);

//DESAFIO Crear una funcion que permita ordenar un arreglo, recibiendo 3 parametros: El arreglo, la propiedad por la que se desea ordenar, y el tipo de ordenamiento
//que se desea ("asc" o "desc")

function orderArray(arreglo,propiedad,tipo){
    
}

console.log(orderArray(pokemones,"name","asc"));

