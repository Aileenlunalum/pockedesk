// funcion  constructora de  pockemon es
function Pockemon (nombre,color,puntos){
  this.nombre=nombre;
  this.color=color;
this.puntos=puntos;
this.vida=100;
his.pelear = function(pokemonObjeto){
  pokemonObjeto.vida = pokemonObjeto.vida - this.puntosAtaque
};
};
var pockemons=[]
function crearpockemon(){
  var nombrePockemon = document.getElementById("nombrepockemon" );
  var colorPockemon = document.getElementById("colorpockemon" );
  var puntosAtaqe= document.getElementById("puntosataq");

  var nuevoPockemon = new  Pockemon( nombrePockemon.value,
                                colorPockemon.value,
                                puntosAtaqe.value)
  mostrarPokemons();
  mostrarPokemons2();
  pockemons.push( nuevoPockemon);
  document.getElementById("nombrepockemon")="";
  document.getElementById("colorpockemon")="";
  document.getElementById("puntosataq")="";
}
function mostrarPokemons() {
 var nombrePokemon = document.getElementById("nombrePokemon");

   var lista = document.createElement("option");
   var pokemonesCreados = document.createTextNode(nombrePokemon.value);
   lista.appendChild(pokemonesCreados);
   var listaPokemons = document.getElementById("pokemones").appendChild(lista);

}

function mostrarPokemons2 () {
 var nombrePokemon = document.getElementById("nombrePokemon");
   var lista = document.createElement("option");
   var pokemonesCreados = document.createTextNode(nombrePokemon.value);
   lista.appendChild(pokemonesCreados);
   var listaPokemons = document.getElementById("pokemones2").appendChild(lista);
}
