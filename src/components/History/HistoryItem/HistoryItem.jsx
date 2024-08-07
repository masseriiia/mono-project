import { useLocalStorage } from '../../../hooks/use-localstorage'
import styles from './HistoryItem.module.css'

export function HistoryItem({item}) {

    return (
            <div className={styles['history-item']}>
                <div className={styles['history-image']}>
                    <img src="./paypal.png" width='26px' height='31px' alt="History" />
                </div>
                <div className={styles['history-info']}>
                    <div>
                        <p className={styles['history-name']}>{item.transactions.name}</p>
                        <p className={styles['history-date']}>{item.transactions.date}</p>
                    </div>
                    <p className={`${styles['history-price']} ${item.transactions.type === 'income' ? styles['price-income'] : styles['price-expense']}`}>
                        {
                            item.transactions.type === 'income' ? `+ $ ${item.transactions.amount}` : `- $ ${item.transactions.amount}`
                        }
                    </p>
                </div>
            </div>
    )
}