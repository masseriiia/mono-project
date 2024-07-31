import { useState } from 'react'
import { useLocalStorage } from '../../hooks/use-localstorage'
import styles from './History.module.css'
import { HistoryItem } from './HistoryItem/HistoryItem'
import { initialState } from '../state'

export function History() {
    const [items, setItems] = useLocalStorage('data')
    
    return (
        <div className={styles['history']}>
            <h3 className={styles['history-title']}>Transactions history</h3>
            <div className={styles['histories']}>
                <HistoryItem/>
            </div>
        </div>
    )
}