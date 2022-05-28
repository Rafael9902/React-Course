import { heroes } from "../data/heroes";

 export const getHeroesByName = (name = '') => {
    return name != '' ? heroes.filter(heroe => heroe.superhero.toLowerCase().includes(name.toLowerCase())) : [];
 }