export const todoReducer = (initialState = {}, action: any = {}) => {
    switch (action.type) {
        case 'ABC':
            throw new Error('ABC not implemented');
            
        default:
            return initialState;
    }

}