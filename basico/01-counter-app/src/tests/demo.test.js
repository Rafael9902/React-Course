describe('Demo Test', () => {
    test('must be equals', () => {
        //1. inicializacion = preparacion de lo que se va a hacer
        const message = 'Hello';
    
        //2. Estimulo
        const message2 = `Hello`;
    
        //3. Observar el comportamiento
        expect(message).toBe(message2);
    })
})
