class Card{
    constructor(nombre,costo){
        this.nombre=nombre;
        this.costo=costo;
    }
}

class PokemonCard extends Card{
    constructor(nombre,costo, salud, poder, tipos){
        super(nombre,costo);
        this.salud=salud;
        this.poder=poder;
        this.tipos=tipos;
    }

    atacar(pokemonAtacado){
        pokemonAtacado.salud-=this.poder;
        //pokemon.salud = pokemon.salud - this.poder;
        //pokemonAtacado.salud<0?console.log("El pokemon "+pokemonAtacado.nombre+" se ha desmayado"):"";
        if(pokemonAtacado.salud<=0){
            console.log("El pokemon "+pokemonAtacado.nombre+" se ha desmayado");
        }
    }

    dormir(puntos){
        this.salud+=puntos;
    }
}

const charizard = new PokemonCard("Charizard",3,100,15,["fuego","volador"]);
const pikachu = new PokemonCard("Pikachu",3,80,50,["electrico"]);

console.log(charizard);
console.log(pikachu);

pikachu.atacar(charizard);

console.log(charizard);

pikachu.dormir(10);

console.log(pikachu);

class ElixirCard extends Card {
    constructor(nombre,costo,efecto,magnitud){
        super(nombre,costo);
        this.efecto=efecto;
        this.magnitud=magnitud;
    }

    aplicarElixir(pokemon){
        pokemon[this.efecto] += this.magnitud;
        /* if(this.efecto==="salud"){
            pokemon.salud+=this.magnitud;
        }else{
            pokemon.poder+=this.magnitud;
        } */
    }
}

const squirtle = new PokemonCard("Squirtle",3,80,50,["agua"]);
console.log(squirtle)

const pocimaRoja = new ElixirCard("Pocima roja",3,"salud",30);
const veneno = new ElixirCard("Pocima negra",3,"salud",-30);
const superPocima = new ElixirCard("Super pocima",3,"poder",20);

superPocima.aplicarElixir(squirtle);
console.log(squirtle);


class BombCard extends Card{
    constructor(nombre,costo,tipo,magnitud){
        super(nombre,costo);
        this.tipo=tipo;
        this.magnitud=magnitud;
    }

    lanzarBomba(pokemon){
        if(pokemon instanceof PokemonCard){
            for(let i=0;i<pokemon.tipos.length;i++){
                if(this.tipo===pokemon.tipos[i]){
                    pokemon.salud-=this.magnitud;
                }
            }
            /* if(pokemon.tipos.includes(this.tipo)){
                pokemon.salud-=this.magnitud;
            } */
        }else{
            console.log("No se puede jugar una carta de bomba a una carta "+pokemon.constructor.name);
        }
    }

    lanzarBombas(pokemones){
        for(let i=0;i<pokemones.length;i++){
            for(let j=0;j<pokemones[i].tipos.length;j++){
                if(this.tipo===pokemones[i].tipos[j]){
                    pokemones[i].salud-=this.magnitud;
                }
            }
        }
        //const pokemonesDeFuego = pokemones.filter((pokemon)=>pokemon.tipos.includes("fuego"));
        //console.log("POKEMONES DE FUEGO",pokemonesDeFuego);
        //pokemonesDeFuego.map((pokemon)=>pokemon.salud+=this.magnitud)
    }


}

console.log(charizard);
const bombaAgua = new BombCard("Bomba de agua",3,"fuego",50);
bombaAgua.lanzarBomba(charizard);
console.log(charizard);

bombaAgua.lanzarBomba(pocimaRoja);
console.log(charizard);
console.log(pikachu);
console.log(squirtle);
bombaAgua.lanzarBombas([charizard,pikachu,squirtle]);
console.log(charizard);
console.log(pikachu);
console.log(squirtle);




//Formas de acceder/modificar un atributo de un objeto
/* const persona = {
    nombre : "Vicente",
    apellido:"peralta"

}

console.log(persona.nombre);
console.log(persona["nombre"]); */

