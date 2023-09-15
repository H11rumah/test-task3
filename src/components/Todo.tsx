import React, { createContext, useState } from "react";
import TodoNew from "./TodoNew";
import TodoList from "./TodoList";
import TodoFooter from "./TodoFooter";

export type TodoItem = {
    id: string;
    title: string;
    isCompleted: boolean;
};

const Todo: React.FC = () => {
    let [todos, setTodos] = useState<TodoItem[]>([]);

    let [visibleCategory, setVisibleCategory] = useState("All");

    return (
        <div className="todo">
            <TodoNew setTodos={setTodos} />
            <TodoList todos={todos} setTodos={setTodos} visibleCategory={visibleCategory} />
            <TodoFooter
                todos={todos}
                setTodos={setTodos}
                visibleCategory={visibleCategory}
                setVisibleCategory={setVisibleCategory}
            />
        </div>
    );
};

export default Todo;
