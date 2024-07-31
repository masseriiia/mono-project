import { useState } from 'react'
import { Button } from '../Button/Button'
import { Input } from '../Input/Input'
import styles from './AddForm.module.css'
import { initialState } from '../state'
import { useLocalStorage } from '../../hooks/use-localstorage'

export function AddForm() {

    const [items, setItems] = useLocalStorage('data')

    const [formState, setFormState] = useState(initialState)

    const onChange = (e, field) => {
        setFormState(item => ({
            ...item, 
            transactions: {
            ...item.transactions, 
            [field]: e.target.value
            },
            balance: field === 'amount' ? Number(item.balance + item.transactions.amount) : item.balance
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()
        setItems([...items, formState])
    }
    
    return (
        <form className={styles['form']} onSubmit={onSubmit}>
            <div className={styles['form-buttons']}>
                <button className={styles['form-input']}>Expense</button>
                <button className={styles['form-input']}>Income</button>
            </div>
            <div className={styles['form-row']}>
                <label className={styles['form-name']} htmlFor="name">
                    NAME
                    <Input type="text" onChange={(e) => onChange(e, 'name')} value={formState.transactions?.name} id="name" placeholder='e.g IPhone 15 Pro'/>
                </label>
                <label className={styles['form-name']} htmlFor="amount">
                    AMOUNT                        
                    <Input type="text" onChange={(e) => onChange(e, 'amount')} value={formState.transactions?.amount} id="amount" placeholder='e.g 250'/>
                </label>
                <label className={styles['form-name']} htmlFor="date">
                    DATE
                    <Input type="date" onChange={(e) => onChange(e, 'date')} value={formState.transactions?.date} id="date" placeholder='e.g. Tue, 22 Feb 2022'/>
                </label>
            </div>
            <Button className={styles['form-add']} type="submit">
                    Add
            </Button>
        </form>
    )
}