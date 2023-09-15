import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

describe("Tests", () => {
    test("Render components", () => {
        render(<App />);

        const todoNew = screen.getByTestId("todoNew");
        const todoList = screen.getByTestId("todoList");
        const todoFooter = screen.getByTestId("todoFooter");

        expect(todoNew).toBeInTheDocument();
        expect(todoList).toBeInTheDocument();
        expect(todoFooter).toBeInTheDocument();
    });

    test("Add and delete todo item", () => {
        render(<App />);

        const input = screen.getByPlaceholderText(/Some task\.\.\./i);
        const addButton = screen.getByTestId("addbtn");

        fireEvent.input(input, {
            target: {
                value: "test",
            },
        });
        fireEvent.click(addButton);

        let todoItem = screen.getByTestId("todoitem");
        expect(todoItem).toBeInTheDocument();

        let deleteButton = screen.getByTestId("deleteTodoitem");
        fireEvent.click(deleteButton);
        expect(todoItem).not.toBeInTheDocument();
    });

    test("Todo toggle work", () => {
        render(<App />);

        const input = screen.getByPlaceholderText(/Some task\.\.\./i);
        const addButton = screen.getByTestId("addbtn");

        fireEvent.input(input, {
            target: {
                value: "test",
            },
        });
        fireEvent.click(addButton);

        let todoItem = screen.getByTestId("todoitem");
        expect(todoItem).toBeInTheDocument();

        let checkbox = screen.getByTestId("checkbox");
        let checkboxToggle = screen.getByTestId("checkboxToggle");

        fireEvent.click(checkboxToggle);
        expect(checkbox).toBeChecked();

        fireEvent.click(checkboxToggle);
        expect(checkbox).not.toBeChecked();
    });
});
