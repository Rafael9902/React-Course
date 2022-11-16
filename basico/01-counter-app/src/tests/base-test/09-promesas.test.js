import { getHeroeByIdAsync } from "../../base-test/09-promesas";
import heroes from "../../data/heroes";

describe('Promesas', () => {
    test('must return an async heroe', (done) => {
        const id = 1;

        getHeroeByIdAsync(id).then(heroe => {
            expect(heroe).toBe(heroes[0]);
            done();
        })
    });

    test('Must return an error if heroe not exists', (done) => {
        const id = 10;

        getHeroeByIdAsync(id).catch(error => {
            expect(error).toBe('No se pudo encontrar el héroe');
            done();
        });
    });
})