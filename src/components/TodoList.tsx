import React from "react";
import TodoListItem from "./TodoListItem";
import { TodoItem } from "./Todo";

type TodoListProps = {
    todos: TodoItem[];
    setTodos: React.Dispatch<React.SetStateAction<TodoItem[]>>;
    visibleCategory: string;
};

const TodoList: React.FC<TodoListProps> = ({ todos, setTodos, visibleCategory }) => {
    function setIsCompleted(id: string, isCompleted: boolean) {
        let todosCopy = [...todos];

        let elemId = todosCopy.findIndex((elem) => elem.id === id);

        todosCopy[elemId].isCompleted = isCompleted;

        setTodos(todosCopy);
    }

    function deleteTodo(id: string) {
        setTodos(() => todos.filter((elem) => elem.id !== id));
    }

    return (
        <div className="todo_list" data-testid="todoList">
            {visibleCategory === "All"
                ? todos.map((elem) => {
                      return (
                          <TodoListItem
                              {...elem}
                              setIsCompleted={setIsCompleted}
                              deleteTodo={deleteTodo}
                              key={elem.id}
                          />
                      );
                  })
                : visibleCategory === "Active"
                ? todos
                      .filter((elem) => !elem.isCompleted)
                      .map((elem) => {
                          return (
                              <TodoListItem
                                  {...elem}
                                  setIsCompleted={setIsCompleted}
                                  deleteTodo={deleteTodo}
                                  key={elem.id}
                              />
                          );
                      })
                : todos
                      .filter((elem) => elem.isCompleted)
                      .map((elem) => {
                          return (
                              <TodoListItem
                                  {...elem}
                                  setIsCompleted={setIsCompleted}
                                  deleteTodo={deleteTodo}
                                  key={elem.id}
                              />
                          );
                      })}
        </div>
    );
};

export default TodoList;
