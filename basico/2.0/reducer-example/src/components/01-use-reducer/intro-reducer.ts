export const initialState = [{
    id: 1,
    todo: 'Gather soul gem',
    done: false
}];

const todoReducer = ( state = initialState, action: any = {} ) => {
    if(action.type === '[TODO] add' ) {
        return [...state, action.payload]
    }
    return state;
}

let todos = todoReducer();

const newTodo = {
    id: 2,
    todo: 'Gather power gem',
    done: false
}

console.log(todos);


const addTodoAction = {
    type: '[TODO] add',
    payload: newTodo
}


todos = todoReducer(todos, addTodoAction)

console.log({ state: todos });

