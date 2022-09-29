const numeros = [2,4,10,25,33,55];

const booleano=false;

const mayoresA20 = numeros.filter((elemento)=>{
    return elemento>20 && elemento<50
})

//const mayoresA20 = numeros.filter((elemento)=>elemento>20)

console.log(mayoresA20);

const multiplicadoPor2 = numeros.map((elemento)=>elemento*2);

console.log(multiplicadoPor2);

const paresMultiplicadosPor2 = numeros.filter((elemento)=>elemento%2===0).map((elemento)=>elemento*2);
//const multiplicados = pares.map((elemento)=>elemento*2);

console.log(paresMultiplicadosPor2);

const pokemones = Object.freeze([
    { id: 1, name: "Bulbasaur", types: ["poison", "grass"], power:25 },
    { id: 5, name: "Charmeleon", types: ["fire"], power:30 },
    { id: 9, name: "Blastoise", types: ["water"], power:35 },
    { id: 12, name: "Butterfree", types: ["bug", "flying"], power:10 },
    { id: 16, name: "Pidgey", types: ["normal", "flying"], power:15 },
    { id: 23, name: "Ekans", types: ["poison"], power:18 },
    { id: 24, name: "Arbok", types: ["poison"], power:27 },
    { id: 25, name: "Pikachu", types: ["electric"], power:40 },
    { id: 37, name: "Vulpix", types: ["fire"], power:30 },
    { id: 52, name: "Meowth", types: ["normal"], power:54 },
    { id: 63, name: "Abra", types: ["psychic"], power:32 },
    { id: 67, name: "Machamp", types: ["fighting"], power:29 },
    { id: 72, name: "Tentacool", types: ["water", "poison"], power:20 },
    { id: 74, name: "Geodude", types: ["rock", "ground"], power:21 },
    { id: 87, name: "Dewgong", types: ["water", "ice"], power:18 },
    { id: 98, name: "Krabby", types: ["water"], power:15 },
    { id: 115, name: "Kangaskhan", types: ["normal"], power:21 },
    { id: 122, name: "Mr. Mime", types: ["psychic"], power:12 },
    { id: 133, name: "Eevee", types: ["normal"], power:33 },
    { id: 144, name: "Articuno", types: ["ice", "flying"], power:60 },
    { id: 145, name: "Zapdos", types: ["electric", "flying"], power:70 },
    { id: 146, name: "Moltres", types: ["fire", "flying"], power:65 },
    { id: 148, name: "Dragonair", types: ["dragon"], power:55 },
  ]);

  

  //Un funcion que devuelva todos los pokemones con poder mayor a n;

  const getPokemonesPoder = (n) => {
    return pokemones.filter((pokemon)=>pokemon.power>n)
  }

  console.table(getPokemonesPoder(30))

//Obtener un arreglo de objetos pokemon que son de tipo water o normal

const waterNormal = pokemones.filter((pokemon)=>pokemon.types.includes("water")||pokemon.types.includes("normal"));
console.table(waterNormal);

//Obtener los 5 primeros elementos del arreglo pokemones

const primeros5Elementos = pokemones.filter((pokemon,index)=>index<5)

console.log(primeros5Elementos);

//Un arreglo, con los nombre de todos los pokemones, guion su poder. Ejemplo: Pikachu - 40

const nombreGuion = pokemones.map((pokemon)=>pokemon.name+" - "+pokemon.power);
console.log(nombreGuion);

//Una funcion que devuelve todos los pokemones mas debiles que un pokemon entregado

const variablePokemon = { id: 25, name: "Pikachu", types: ["electric"], power:40 };
const variablePokemon2 = { id: 25, name: "Pikachu2", types: ["electric"], power:45 };

function getDebiles (pokemonRecibidoComoParametro){
    return pokemones.filter((pokemon)=>pokemon.power<pokemonRecibidoComoParametro.power)
}

console.table(getDebiles(variablePokemon2));
//getDebiles(pokemones[0]);

//Funcion que devuelva una matriz con objetos con nombre y poder de los pokemones cuyo poder es mayor al del pokemon entregado

function getPoderosos(poke){
    return pokemones.filter(pokemon=>pokemon.power>poke.power).map(pokemon=>(
        {
        name:pokemon.name,
        power:pokemon.power
        }))
}

const pikachu = { id: 25, name: "Pikachu", types: ["electric"], power:40 };

console.log(getPoderosos(pikachu));
//console.table(getPoderosos(pikachu));


//Una matriz con solo los nombres de Pokémon con una identificación mayor que 99

const mayor99 = pokemones.filter(p=>p.id>99).map(p=>({id:p.id,name:p.name}));
console.table(mayor99)

//una matriz que contiene solo el primer tipo y el nombre de todos los Pokémon cuyo segundo tipo es "volador"

const voladores = pokemones.filter(pokemon=>pokemon.types[1]==="flying").map(pokemon=>({name:pokemon.name,primerTipo:pokemon.types[0]}));

console.table(voladores);

//una matriz con solo los nombres del pokémon cuyo único tipo es fuego y su poder es mayor a 25

const arreglo = pokemones.filter(pokemon=> pokemon.types.length===1 && pokemon.types[0]==="fire" && pokemon.power>25 );
console.log(arreglo);