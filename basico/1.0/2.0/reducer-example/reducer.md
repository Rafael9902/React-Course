# Que es un reducer?

- Funcion comun y corriente
- Debe ser una funcion pura:
    - no debe tener efectos secundarios, osea debe resolver lo que se le pide sin llamar otras funciones, no debe tener)
    - No debe tener tareas asincronicas, se ejecutan de manera sincrona, haciendolos mas sencillos
- Debe retornar un nuevo estado(no muta el estado actual, retorna otro)
- usualmente recibe 2 parametros
    - valor inicial(initialState) y la accion a ejecutar
- No se debe llamar local o session storage dentro del reducer
- La idea con esto es tener en un solo lugar las acciones que modifican los estados de mi aplicacion


## Ciclo de vida
- inicia con estado inicial
- envia el state a una pagina o vista
- en caso de que se requiera mutar el state(lo que no se puede), la pagina o vista llama a una action(la cual no muta, sino que devuelve otro estado), esa action se envia al reducer
- el reducer tiene el mapa de las acciones que puede realizar, por lo tanto tiene la logica para realizar lo que se necesite
- La informacion vaya en una sola guia y lo haga de manera controlada(es la misma base del redux)