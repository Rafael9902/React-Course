import { types } from "../types/types"

export const login = (uid, name) => ({
    types: types.login,
    payload: {
        uid,
        name
    }
});