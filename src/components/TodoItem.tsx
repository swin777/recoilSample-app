import { useRecoilState } from "recoil";
import { Todo } from "../models/todoModel";
import { todoListState } from "../states/TodoState";

export default function TodoItem(props: any) {
    const item:Todo = props.item;
    const [todoList, setTodoList] = useRecoilState(todoListState);
    const index = todoList.findIndex((listItem:any) => listItem === item);
  
    const editItemText = ({target: {value}}:any) => {
      const newList = replaceItemAtIndex(todoList, index, {
        ...item,
        text: value,
      });
  
      setTodoList(newList);
    };
  
    const toggleItemCompletion = () => {
      const newList = replaceItemAtIndex(todoList, index, {
        ...item,
        isComplete: !item.isComplete,
      });
  
      setTodoList(newList);
    };
  
    const deleteItem = () => {
      const newList = removeItemAtIndex(todoList, index);
  
      setTodoList(newList);
    };
  
    return (
      <div>
        <input type="text" value={item.text} onChange={editItemText} />
        <input
          type="checkbox"
          checked={item.isComplete}
          onChange={toggleItemCompletion}
        />
        <button onClick={deleteItem}>X</button>
      </div>
    );
  }
  
  function replaceItemAtIndex(arr:any, index:number, newValue:any) {
    return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
  }
  
  function removeItemAtIndex(arr:any, index:number) {
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
  }