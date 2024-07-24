import styles from './History.module.css'
import { HistoryItem } from './HistoryItem/HistoryItem'

export function History() {
    return (
        <div className={styles['history']}>
            <h3 className={styles['history-title']}>Transactions history</h3>
            <div className={styles['histories']}>
                <HistoryItem/>
                <HistoryItem/>
                <HistoryItem/>
                <HistoryItem/>
                <HistoryItem/>
                <HistoryItem/>
                <HistoryItem/>
                <HistoryItem/>
                <HistoryItem/>
                <HistoryItem/>
                <HistoryItem/>
                <HistoryItem/>
            </div>


        </div>
    )
}