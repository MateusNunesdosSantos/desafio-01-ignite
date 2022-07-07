import { ContentMessage } from './ContentMessage'
import styles from './ListTodo.module.css'
import { CgTrash } from 'react-icons/cg'
import { useTodos } from '../hooks/useTodos'
import { BsCheckCircleFill } from 'react-icons/bs'



export function ListTodo() {

    const { todos, handleRemoveTodo, handleToggleTodoCompletion, CompletedTodo } = useTodos()



    return (
        <div className={styles.container}>
            <div className={styles.headerTodo}>
                <div className={styles.containerCountTodo}>
                    <span className={styles.titleCountTodo}>Tarefas criadas</span>
                    <span className={styles.countTodo}>{todos.length}</span>
                </div>
                <div className={styles.containerCountTodo}>
                    <p>Concluídas</p>
                    <span className={styles.countCompleted}>{CompletedTodo} de {todos.length}</span>
                </div>
            </div>

            {
                todos.length > 0 ?
                    <ul className={styles.containerlist}>
                        {todos.map(todo => {
                            return (
                                <li key={todo.id}>
                                    <button
                                        className={styles.checkContainer}
                                        onClick={() => handleToggleTodoCompletion(todo.id)}
                                    >
                                        {todo.isComplete ? <BsCheckCircleFill color='#8284FA' /> : <div />}
                                    </button>
                                    <div className={styles.contentList}>
                                        <span className={todo.isComplete ? styles.completed : ''}>{todo.content}</span>
                                        <button onClick={() => handleRemoveTodo(todo.id)}>
                                            <CgTrash />
                                        </button>
                                    </div>
                                </li>
                            )
                        })}
                    </ul> :

                    <ContentMessage />

            }

        </div>
    )
}