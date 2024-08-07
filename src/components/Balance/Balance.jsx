
import styles from './Balance.module.css'
import { useLocalStorage } from '../../hooks/use-localstorage'

export function Balance() {
    const [items, setItems, getItems] = useLocalStorage('data')
    const getLocalItems = getItems() || []
    const getLocalItem = getLocalItems ? getLocalItems[getLocalItems.length - 1] : []
    console.log(getLocalItem)

    const itemsIncome = getLocalItems.filter(item => item.transactions.type === 'income').map(item => item.balanceInfo.income)
    const itemsExpenses = getLocalItems.filter(item => item.transactions.type === "expenses").map(item => item.balanceInfo.expenses)

    return (
        <div className={styles['balance']}>
            <div className={styles['total-balance']}>
                <h3  className={styles['total-title']}>
                    Total Balance
                    <img src="./chevron-down.svg" alt="" />  
                </h3>
                <p className={styles['total-price']}>$ {getLocalItems.length > 0 ? getLocalItem.balanceInfo.balance : 0} </p>
            </div>
            <div className={styles['transactions']}>
                <div className={styles['income']}>
                    <div className={styles['transactions-title']}>
                        <div className={styles['transactions-arrow']}>
                           <img src="./arrow-down.svg" alt="" />  
                        </div>
                        <p className={styles['transactions-name']}>Income</p>
                    </div>
                    <p className={styles['transactions-price']}>$ {itemsIncome.length > 0 ? itemsIncome[itemsIncome.length - 1] : 0}</p>
                </div>
                <div className={styles['ixpenses']}>
                    <div className={styles['transactions-title']}>
                        <div className={styles['transactions-arrow']}>
                            <img src="./arrow-top.svg" alt=""/>  
                        </div>
                        <p className={styles['transactions-name']}>Expenses</p> 
                    </div>
                    <p className={styles['transactions-price']}>$ {itemsExpenses.length > 0 ? itemsExpenses[itemsExpenses.length - 1] : 0}</p>
                </div>
            </div>
        </div>
    )
}