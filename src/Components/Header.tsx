import logoSvg from '../assets/Logo.svg'
import styles from './Header.module.css'
import { NewTodo } from './NewTodo'

export function Header() {
    return (
        <header className={styles.container}>
            <img src={logoSvg} alt="Logo todo" />
        </header>
    )
}