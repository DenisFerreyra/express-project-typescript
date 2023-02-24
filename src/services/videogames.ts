import videogamesData from "../mock/videogames.json"; //originalmente no soporta archivos json, entonces hay que agregarlo a tsconfig (resolveJsonModule": true)
import { Videogame } from "./types";

const videogames: Videogame[] = videogamesData as Videogame[];
//Esto se hace porque cuando se importa videogamesData no lo acopla a la interfaz de Videogame, hay que indicarle que trate a videogamesData como Videogame[]
//Se debe a que para typescript, la propiedad Genre en este caso, es un "type", pero en el json lo interpreta como si fuese string, entonces choca.

export const getVideogames = async () => {
  return videogames;
}; 
//acá normalmente typescript va a inferir los tipos, pero se soluciona creando interfaces o typos
