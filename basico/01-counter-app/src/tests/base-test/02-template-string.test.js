import { getSaludo } from "../../base-test/02-template-string";

describe('Templates String', () => {
    test('must be Hello Name', () => {
        const name = 'rafael';
        const greet = getSaludo(name);

        expect(greet).toBe(`Hola ${name}`);
    })

    test('Must be Hello name if not parameters send', () => {
        const greet = getSaludo();

        expect(greet).toEqual('Hola name');
    })
})