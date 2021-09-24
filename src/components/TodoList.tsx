import { useRecoilValue } from "recoil";
import { Todo } from "../models/todoModel";
import { filteredTodoListState } from "../states/TodoState";
import TodoItem from "./TodoItem";
import TodoItemCreator from "./TodoItemCreator";
import { TodoListFilters } from "./TodoListFilters";
import { TodoListStats } from "./TodoListStats";

export default function TodoList() {
    const todoList = useRecoilValue(filteredTodoListState);
  
    return (
      <>
        <TodoListStats />
        <TodoListFilters />
        <div><br/></div>
        <TodoItemCreator />
        <div><br/></div>
        {todoList.map((todoItem:Todo) => (
          <TodoItem key={todoItem.id} item={todoItem} />
        ))}
      </>
    );
  }