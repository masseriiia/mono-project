import styles from './Balance.module.css'

export function Balance() {
    return (
        <div className={styles['balance']}>
            <div className={styles['total-balance']}>
                <h3  className={styles['total-title']}>
                    Total Balance
                    <img src="./chevron-down.svg" alt="" />  
                </h3>
                <p className={styles['total-price']}>$ 2,548.00</p>
            </div>
            <div className={styles['transactions']}>
                <div className={styles['income']}>
                    <div className={styles['transactions-title']}>
                        <div className={styles['transactions-arrow']}>
                           <img src="./arrow-down.svg" alt="" />  
                        </div>
                        <p className={styles['transactions-name']}>Income</p>
                    </div>
                    <p className={styles['transactions-price']}>$ 1,840.00</p>
                </div>
                <div className={styles['ixpenses']}>
                    <div className={styles['transactions-title']}>
                        <div className={styles['transactions-arrow']}>
                            <img src="./arrow-top.svg" alt=""/>  
                        </div>
                        <p className={styles['transactions-name']}>Expenses</p> 
                    </div>
                    <p className={styles['transactions-price']}>$ 284.00</p>
                </div>
            </div>
        </div>
    )
}