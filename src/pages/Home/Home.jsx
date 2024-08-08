import { Link, NavLink } from "react-router-dom";
import { Balance } from "../../components/Balance/Balance";
import { Button } from "../../components/Button/Button";
import { Header } from "../../components/Header/Header";
import { History } from "../../components/History/Histoty";
import styles from './Home.module.css'


export function Home() {

    return (
        <div className={styles['home']}>
            <Header className={styles['header']}/>
            <div className={styles['sidebar']}>
                <div>
                    <div className={styles['greetings']}>Good afternoon,</div>
                    <div className={styles['users']}>Random User</div>
                </div>
                <Button className={styles['button-push']}>
                    <img src="./push.svg" alt="Push" />
                </Button>
            </div>
            <div className={styles['content']}>
                <Balance/>
                <History/>
                <NavLink to='/add'>
                    <Button className={styles['button-add']}>
                        <img src="./add.svg" alt="Button add" />
                    </Button>
                </NavLink >

            </div>
        </div>
    )
}