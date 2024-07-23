import { Button } from '../Button/Button'
import styles from './Header.module.css'

export function Header() {
    return (
        <div className={styles['header']}>
            <img className={styles['images']} src="./bg.png" alt="" />
            <div className={styles['sidebar']}>
                <div>
                    <div className={styles['greetings']}>Good afternoon,</div>
                    <div className={styles['users']}>Random User</div>
                </div>
                <Button className={styles['button-push']}>
                    <img src="./push.svg" alt="" />
                </Button>
            </div>
            
        </div>
    )
}