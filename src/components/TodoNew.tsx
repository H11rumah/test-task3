import React, { useContext, useRef, useState } from "react";
import { TodoItem } from "./Todo";

type TodoNewProps = {
    setTodos: React.Dispatch<React.SetStateAction<TodoItem[]>>;
};

const TodoNew: React.FC<TodoNewProps> = ({ setTodos }) => {
    let [taskTitle, setTaskTitle] = useState("");
    let [inputError, setInputError] = useState(false);

    let inputRef = useRef<HTMLInputElement>(null);

    function addTodo() {
        if (!taskTitle && inputRef.current) {
            inputRef.current.focus();

            setInputError(true);

            return;
        }

        setTodos((prev) => [
            ...prev,
            {
                id: generateRandomId(),
                title: taskTitle,
                isCompleted: false,
            },
        ]);

        setTaskTitle("");

        if (inputRef.current) inputRef.current.focus();
    }

    function generateRandomId() {
        return Date.now().toString(36) + Math.random().toString(36).slice(2);
    }

    return (
        <div className="todo_new" data-testid="todoNew">
            <input
                className={inputError ? "error" : ""}
                type="search"
                ref={inputRef}
                placeholder="Some task..."
                value={taskTitle}
                onChange={(event) => {
                    setTaskTitle(event.target.value);
                    setInputError(false);
                }}
                onKeyDown={(event) => {
                    if (event.code === "Enter" || event.code === "NumpadEnter") addTodo();
                }}
            />
            <button data-testid="addbtn" onClick={() => addTodo()}>
                <svg viewBox="0 0 30 30" height="35" width="35" xmlns="http://www.w3.org/2000/svg">
                    <g data-name="Layer 2">
                        <path d="M16,29A13,13,0,1,1,29,16,13,13,0,0,1,16,29ZM16,5A11,11,0,1,0,27,16,11,11,0,0,0,16,5Z" />
                        <path d="M16,23a1,1,0,0,1-1-1V10a1,1,0,0,1,2,0V22A1,1,0,0,1,16,23Z" />
                        <path d="M22,17H10a1,1,0,0,1,0-2H22a1,1,0,0,1,0,2Z" />
                    </g>
                    <g>
                        <rect className="cls-1" />
                    </g>
                </svg>
            </button>
        </div>
    );
};

export default TodoNew;
