
import styles from './ContentMessage.module.css'
import ClipboardSvg from '../assets/Clipboard.svg'

export function ContentMessage() {
    return (
        <div className={styles.divider}>
            <div className={styles.contentListTodo}>
                <div className={styles.contentMessage}>
                    <img src={ClipboardSvg} />
                    <b>Você ainda não tem tarefas cadastradas</b>
                    <p>Crie tarefas e organize seus itens a fazer</p>
                </div>
            </div>
        </div>
    )
}