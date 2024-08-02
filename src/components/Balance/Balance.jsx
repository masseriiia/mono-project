import { useContext } from 'react'
import styles from './Balance.module.css'
import { UserContext } from '../../context/user.context'
import { useLocalStorage } from '../../hooks/use-localstorage'

export function Balance() {
    const [items, setItems] = useLocalStorage('data')
    const lastTransactions = items.length > 0 ? items[items.length - 1] : null

    const itemsIncome = items.filter(item => item.type === 'income').map(item => item.income)
    const itemIncome = itemsIncome.length > 0 ? itemsIncome[itemsIncome.length - 1] : 0

    const itemsExpenses = items.filter(item => item.type === "expenses").map(item => item.expenses)

    const itemExpenses = itemsExpenses.length > 0 ? itemsExpenses[itemsExpenses.length - 1] : 0
   

    return (
        <div className={styles['balance']}>
            <div className={styles['total-balance']}>
                <h3  className={styles['total-title']}>
                    Total Balance
                    <img src="./chevron-down.svg" alt="" />  
                </h3>
                <p className={styles['total-price']}>$ {lastTransactions ? lastTransactions.balance : 0} </p>
            </div>
            <div className={styles['transactions']}>
                <div className={styles['income']}>
                    <div className={styles['transactions-title']}>
                        <div className={styles['transactions-arrow']}>
                           <img src="./arrow-down.svg" alt="" />  
                        </div>
                        <p className={styles['transactions-name']}>Income</p>
                    </div>
                    <p className={styles['transactions-price']}>$ {itemIncome}</p>
                </div>
                <div className={styles['ixpenses']}>
                    <div className={styles['transactions-title']}>
                        <div className={styles['transactions-arrow']}>
                            <img src="./arrow-top.svg" alt=""/>  
                        </div>
                        <p className={styles['transactions-name']}>Expenses</p> 
                    </div>
                    <p className={styles['transactions-price']}>$ {itemExpenses}</p>
                </div>
            </div>
        </div>
    )
}