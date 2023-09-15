import React from "react";
import { TodoItem } from "./Todo";

type TodoFooterProps = {
    todos: TodoItem[];
    setTodos: React.Dispatch<React.SetStateAction<TodoItem[]>>;
    visibleCategory: string;
    setVisibleCategory: React.Dispatch<React.SetStateAction<string>>;
};

const TodoFooter: React.FC<TodoFooterProps> = ({ todos, setTodos, visibleCategory, setVisibleCategory }) => {
    let leftCount = todos.filter((elem) => elem.isCompleted === false).length;

    function setCategory(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        let target = event.target as HTMLButtonElement;

        setVisibleCategory(target.value);
    }

    function clearCompleted() {
        setTodos(() => todos.filter((elem) => !elem.isCompleted));
    }

    return (
        <div className="todo_footer" data-testid="todoFooter">
            <span className="todo_footer_left">{leftCount} items left</span>
            <div className="todo_footer_categories">
                <button
                    className={
                        visibleCategory === "All"
                            ? "todo_footer_categories_category selected"
                            : "todo_footer_categories_category "
                    }
                    value="All"
                    onClick={(event) => setCategory(event)}
                >
                    All
                </button>
                <button
                    className={
                        visibleCategory === "Active"
                            ? "todo_footer_categories_category selected"
                            : "todo_footer_categories_category "
                    }
                    value="Active"
                    onClick={(event) => setCategory(event)}
                >
                    Active
                </button>
                <button
                    className={
                        visibleCategory === "Completed"
                            ? "todo_footer_categories_category selected"
                            : "todo_footer_categories_category "
                    }
                    value="Completed"
                    onClick={(event) => setCategory(event)}
                >
                    Completed
                </button>
            </div>
            <button className="todo_footer_clear" onClick={() => clearCompleted()}>
                Clear completed
            </button>
        </div>
    );
};

export default TodoFooter;
