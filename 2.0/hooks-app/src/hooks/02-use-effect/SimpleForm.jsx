import { useEffect, useState } from "react"

export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        username: '',
        email: ''
    });

    const { username, email } = formState;

    const onInputChange = ( { target } ) => {
        const { name, value } = target;

        setFormState({
            ...setFormState,
            [name]: value
        })
    }

    //se ejecuta cada vez que cambia el estado de un componente(se vuelve a renderizar)
    //eso no es eficiente, son los efectos secundarios
    //se coloca como segundo parametro un arreglo vacio, si queremos que se ejecute solo al inicio del ciclo de vida del componente(mouunt)

    useEffect(() => console.log('use'), [formState])

  return (
    <>
        <h1>Simple Form</h1>

        <input type='text' placeholder='name' name='username' value={username} onChange={ onInputChange }/>
        <input type='email' placeholder='email' name='email' value={email} onChange={ onInputChange }/>
    </>
  )
}
