import React from "react";
import "./styles/App.scss";
import Todo from "./components/Todo";

const App: React.FC = () => {
    return (
        <div className="App">
            <h1>Todo App</h1>
            <Todo />
        </div>
    );
};

export default App;
