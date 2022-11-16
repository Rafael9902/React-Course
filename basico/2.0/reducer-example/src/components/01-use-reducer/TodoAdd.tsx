import React, { FormEvent, FormEventHandler } from "react";
import { useForm } from "../../hooks/useForm";
import { Todo } from "./todo.interface";

export const TodoAdd = ({ onNewTodo }: any) => {
  const { description, onInputChange, onResetForm } = useForm({
    description: "",
  });

  const onFormSubmit = (event: FormEvent) => {
    event.preventDefault();

    const newTodo: Todo = {
      id: new Date().getTime(),
      description,
      done: false,
    };

    return onNewTodo(newTodo);
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        name="description"
        value={description}
        placeholder="To Do"
        className="form-control"
        onChange={onInputChange}
      />

      <button type="submit" className="btn btn-outline-primary mt-1">
        Add
      </button>
    </form>
  );
};
