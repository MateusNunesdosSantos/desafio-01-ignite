import { TodoContext } from "./TodoContext"
import { useContext, useState } from 'react'

interface props {
    children: JSX.Element | JSX.Element[]
}

interface Todo {
    id: number;
    content: string;
    isComplete: boolean;
}

export type TodoContentType = {
    todos: Todo[]
    saveTodos: () => void
    newTodo: string
    setNewTodo: (todo: string) => void
    handleRemoveTodo: (id: number) => void
    handleToggleTodoCompletion: (id: number) => void
    CompletedTodo: number
}


export const TodoProvider = ({ children }: props) => {
    const [todos, setTodos] = useState<Todo[]>([])
    const [newTodo, setNewTodo] = useState('')



    function saveTodos() {
        if (!newTodo) return

        const newTodoContent = {
            id: Math.random(),
            content: newTodo,
            isComplete: false
        }

        setTodos(oldState => [...oldState, newTodoContent])
        setNewTodo('')
    }

    function handleRemoveTodo(id: number) {
        const filterTodo = todos.filter(todo => todo.id !== id)

        setTodos(filterTodo)
    }

    function handleToggleTodoCompletion(id: number) {
        const newToggleTodo = todos.map(todo => todo.id === id ? {
            ...todo,
            isComplete: !todo.isComplete
        } : todo)

        setTodos(newToggleTodo)
    }

    const filterCompletedTodo = todos.filter(todo => todo.isComplete === true)
    console.log(filterCompletedTodo)
    const CompletedTodo = filterCompletedTodo.length
    console.log(CompletedTodo)




    return (
        <TodoContext.Provider
            value={{ todos, saveTodos, newTodo, setNewTodo, handleRemoveTodo, handleToggleTodoCompletion, CompletedTodo }}>
            {children}
        </TodoContext.Provider>
    )
}


