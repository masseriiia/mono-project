import { NavLink } from "react-router-dom";
import { AddForm } from "../../components/AddForm/AddForm";
import { Button } from "../../components/Button/Button";
import { Header } from "../../components/Header/Header";
import styles from './AddExpense.module.css'

export function AddExpense() {
    return (
        <div>
            <Header/>
            <div className={styles['sidebar']}>
                <NavLink to='/'>
                    <Button className={styles['button-push']}>
                        <img src="./chevron-left.svg" alt="Push" />
                    </Button>
                </NavLink>
                <h3 className={styles['expense-title']}>Add Expense</h3>
            </div>
            <AddForm/>
        </div>
    )
}