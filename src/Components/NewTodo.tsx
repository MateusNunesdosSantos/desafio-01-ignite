import styles from './NewTodo.module.css'
import { HiOutlinePlusCircle } from 'react-icons/hi'
import { useTodos } from '../hooks/useTodos'



export function NewTodo() {
    const { setNewTodo, newTodo, saveTodos } = useTodos()

    function handleCreateNewTodos() {
        saveTodos()
    }

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <input
                    type="text"
                    placeholder='Adicionar nova uma tarefa'
                    onChange={(e) => setNewTodo(e.target.value)}
                    value={newTodo}
                />
                <button onClick={handleCreateNewTodos}>
                    Criar
                    <HiOutlinePlusCircle size={20} />
                </button>
            </div>
        </div>
    )
}