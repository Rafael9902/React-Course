import { retornaArreglo } from "../../base-test/07-deses-arr"

describe('07-deses-test', () => {
    test('must be return a string and a number', () => {
        const [letters, numbers] = retornaArreglo();

        expect(letters).toBe('ABC');
        expect(typeof letters).toBe('string');
        
        expect(numbers).toBe(123);
    })
})