import { useLocalStorage } from '../../hooks/use-localstorage'
import styles from './History.module.css'
import { HistoryItem } from './HistoryItem/HistoryItem'

export function History() {
    const [items, setItems, getItems] = useLocalStorage('data')
    const getLocalItems = getItems() || []
    console.log(items)
    
    return (
        <div className={styles['history']}>
            <h3 className={styles['history-title']}>Transactions history</h3>
            <div className={styles['histories']}>
                { getLocalItems.length !== 0 && (
                    getLocalItems.map((item, index) => <HistoryItem index={index} item={item}/>))
                }
            </div>
        </div>
    )
}