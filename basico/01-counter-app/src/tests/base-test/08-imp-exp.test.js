import { getHeroeById } from "../../base-test/08-imp-exp";
import heroes from "../../data/heroes";

describe('08-imp', () => {
    test('must return an hero', () => {
        const id = 1;
        const hero = getHeroeById(id);

        const heroeData = heroes.find((id) => heroes.id == id);

        console.log(hero);
    })
})