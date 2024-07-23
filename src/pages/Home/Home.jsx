import { Button } from "../../components/Button/Button";
import { Header } from "../../components/Header/Header";
import styles from './Home.module.css'

export function Home() {
    return (
        <div className={styles['home']}>
            <Header/>
            <div className={styles['content']}>
                Home
                <Button className={styles['button-add']}>
                    <img src="./add.svg" alt="" />
                </Button>
            </div>
        </div>
    )
}