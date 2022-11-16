import { useForm } from "../../custom-hooks/useForm";
import { Message } from "./Message";

export const FormWithCustomHook = () => {
  const { formState, onInputChange, onReset, username, password, email } = useForm({
    username: "",
    email: "",
    password: "",
  });

  //se ejecuta cada vez que cambia el estado de un componente(se vuelve a renderizar)
  //eso no es eficiente, son los efectos secundarios
  //se coloca como segundo parametro un arreglo vacio, si queremos que se ejecute solo al inicio del ciclo de vida del componente(mouunt)

  return (
    <>
      <h1>Form With Custom Hook</h1>

      <input
        type="text"
        placeholder="name"
        name="username"
        value={username}
        onChange={onInputChange}
      />
      <input
        type="email"
        placeholder="email"
        name="email"
        value={email}
        onChange={onInputChange}
      />
      <input
        type="password"
        placeholder="password"
        name="password"
        value={password}
        onChange={onInputChange}
      />

      <button onClick={ onReset }>Reset</button>

      {username === "rafael" && <Message />}
    </>
  );
};
