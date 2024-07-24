import styles from './HistoryItem.module.css'

export function HistoryItem() {
    return (
            <div className={styles['history-item']}>
                <div className={styles['history-image']}>
                    <img src="./paypal.png" width='26px' height='31px' alt="" />
                </div>
                <div className={styles['history-info']}>
                    <div>
                        <p className={styles['history-name']}>Paypal</p>
                        <p className={styles['history-date']}>Jan 30, 2022</p>
                    </div>
                    <p className={styles['history-price']}>+ $ 1,406.00</p>
                </div>
            </div>
    )
}