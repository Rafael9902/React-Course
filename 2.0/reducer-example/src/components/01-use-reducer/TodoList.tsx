import { Todo } from "./todo.interface";
import { TodoItem } from "./TodoItem";

export const TodoList = ({ todos = [] }: any) => {
  console.log(todos);

  return (
    <ul className="list-group">
      {todos.map((todo: Todo) => (
        //TodoItem
        <TodoItem {...todo} key={todo.id}/>
      ))}
    </ul> 
  );
};
