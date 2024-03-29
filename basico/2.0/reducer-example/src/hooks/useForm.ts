import { useState } from "react"

export const useForm = ( initialState: any = {} ) => {
    const [formState, setFormState] = useState(initialState);

    const onInputChange = ({ target }: any) => {
        const { name, value } = target;

        setFormState({
            ...formState,
            [name]: value
        })
    }

    const onResetForm = () => setFormState(initialState);

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm
    }
}