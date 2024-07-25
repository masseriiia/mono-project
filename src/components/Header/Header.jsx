import { Button } from '../Button/Button'
import styles from './Header.module.css'

export function Header() {
    return (
        <div className={styles['header']}>
            <img className={styles['images']} src="./bg.png" alt="" />
        </div>
    )
}