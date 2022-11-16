import { Actions } from "./actions.enum";

export const todoReducer = (initialState : any = {}, action: any = {}) => {
    switch (action.type) {
        case Actions.ADD:
            return [...initialState, action.payload];

        default:
            return initialState;
    }

}