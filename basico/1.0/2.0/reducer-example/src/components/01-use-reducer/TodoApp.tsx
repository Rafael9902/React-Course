import { useReducer } from "react";
import { Actions } from "./actions.enum";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";
import { todoReducer } from "./todoReducer";

export const TodoApp = () => {
  const initialState: object[] = [
    {
      id: new Date().getTime(),
      description: "gather soul gem",
      done: false,
    },
    {
      id: new Date().getTime() * 3,
      description: "gather power gem",
      done: false,
    },
  ];

  const [todos, dispatchTodo] = useReducer(todoReducer, initialState);

  const handleNewTodo = (todo: any) => {
    const action = {
      type: Actions.ADD,
      payload: todo
    }
    
    dispatchTodo(action);
  }

  return (
    <>
      <h1>
        Todo App (10) <br /> <small>to do: 2</small>{" "}
      </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList todos={todos}/>
        </div>

        <div className="col-5">
          <h4>Add TODO</h4>
          <hr />
          <TodoAdd onNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  );
};
