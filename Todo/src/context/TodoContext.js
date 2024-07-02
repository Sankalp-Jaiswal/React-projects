import { useContext, createContext } from "react";

const TodoContext = createContext({
    todos: [
        {
            id:1,
            todo:"hello",
            completed:false
        }
    ],
    addTodo: (todo) => { },
    removeTodo: (id) => { },
    updateTodo: (id,todo) => { },
    toggleComplete: (id) => {}
})

export const useTodo =()=> (useContext(TodoContext))

export const TodoProvider = TodoContext.Provider