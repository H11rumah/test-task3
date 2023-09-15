import React, { useState } from "react";

type TodoListItemProps = {
    setIsCompleted: (id: string, isCompleted: boolean) => void;
    deleteTodo: (id: string) => void;
    id: string;
    title: string;
    isCompleted: boolean;
};

const TodoListItem: React.FC<TodoListItemProps> = ({ setIsCompleted, deleteTodo, id, title, isCompleted }) => {
    let [isChecked, setIsChecked] = useState(isCompleted);

    return (
        <div data-testid="todoitem" className="todo_list_item">
            <div className="todo_list_item_checkbox">
                <input id={id} type="checkbox" checked={isChecked} data-testid="checkbox" />
                <label
                    htmlFor={id}
                    data-testid="checkboxToggle"
                    onClick={() => {
                        setIsChecked((prev) => !prev);

                        setIsCompleted(id, !isChecked);
                    }}
                ></label>
            </div>
            <span className={isCompleted ? "completed" : ""}>{title}</span>
            <button data-testid="deleteTodoitem" onClick={() => deleteTodo(id)}>
                <svg height="20px" viewBox="0 0 512 512" width="20px" xmlns="http://www.w3.org/2000/svg">
                    <path d="M437.5,386.6L306.9,256l130.6-130.6c14.1-14.1,14.1-36.8,0-50.9c-14.1-14.1-36.8-14.1-50.9,0L256,205.1L125.4,74.5  c-14.1-14.1-36.8-14.1-50.9,0c-14.1,14.1-14.1,36.8,0,50.9L205.1,256L74.5,386.6c-14.1,14.1-14.1,36.8,0,50.9  c14.1,14.1,36.8,14.1,50.9,0L256,306.9l130.6,130.6c14.1,14.1,36.8,14.1,50.9,0C451.5,423.4,451.5,400.6,437.5,386.6z" />
                </svg>
            </button>
        </div>
    );
};

export default TodoListItem;
