import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { Todo } from "../models/todoModel";
import { todoListState } from "../states/TodoState";

export default function TodoItemCreator() {
    const [inputValue, setInputValue] = useState('');
    const setTodoList = useSetRecoilState(todoListState);

    const addItem = () => {
        setTodoList((oldTodoList:Todo[]) => [
            ...oldTodoList,
            new Todo(getId(), inputValue, false),
        ]);
        setInputValue('');
    };

    const onChange = ({target: {value}}:any) => {
        setInputValue(value);
    };

    return (
        <div>
        <input type="text" value={inputValue} onChange={onChange} />
        <button onClick={addItem}>Add</button>
        </div>
    );
}

// 고유한 Id 생성을 위한 유틸리티
let id = 0;
function getId() {
    return id++;
}