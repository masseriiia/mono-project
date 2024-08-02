import { useState } from 'react'
import { Button } from '../Button/Button'
import { Input } from '../Input/Input'
import styles from './AddForm.module.css'
import { initialState } from '../state'
import { useLocalStorage } from '../../hooks/use-localstorage'

export function AddForm() {

    const [items, setItems] = useLocalStorage('data')
    const [formState, setFormState] = useState(initialState)
    const [transactionType, setTransactionType] = useState('')


    const handleAddTransaction = (e) => {
        if(e.target.id === 'expenses') {
            setTransactionType(() => 'expenses')

        } else if (e.target.id === 'income') {
            setTransactionType(() => 'income')
        }
    }

    const onChange = (e, field) => {
        setFormState(item => ({
            ...item,
            transactions: {
            ...item.transactions, 
            [field]: e.target.value
            }
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if(formState.transactions.name !== '' && formState.transactions.date !== '' && formState.transactions.amount !== '' && transactionType === 'expenses') {
            const newTransaction = {
                ...formState.transactions,
                amount: parseFloat(formState.transactions.amount),
                type: transactionType
            }
            const newBalance = formState.balance - newTransaction.amount
            const newExpenses = formState.expenses + newTransaction.amount
    
            setFormState(item => ({
                ...item,
                balance: newBalance,
                expenses: newExpenses
            }))
    
            setItems([...items, {...newTransaction, balance: newBalance, expenses: newExpenses}])
        } else if(formState.transactions.name !== '' && formState.transactions.date !== '' && formState.transactions.amount !== '' && transactionType === 'income') {
            const newTransaction = {
                ...formState.transactions,
                amount: parseFloat(formState.transactions.amount),
                type: transactionType
            }
            const newBalance = formState.balance + newTransaction.amount
            const newIncome = formState.income + newTransaction.amount
    
            setFormState(item => ({
                ...item,
                balance: newBalance,
                income: newIncome
            }))
    
            setItems([...items, {...newTransaction, balance: newBalance, income: newIncome}])
        }
    }

    return (
        <form className={styles['form']} onSubmit={onSubmit}>
            <div className={styles['form-buttons']}>
                <button className={`${styles['form-input']} ${transactionType === 'expenses' ? styles['isActive'] : ''}`} type='button' id="expenses" onClick={(e) => handleAddTransaction(e)}>Expenses</button>
                <button className={`${styles['form-input']} ${transactionType === 'income' ? styles['isActive'] : ''}`} type='button' id="income" onClick={(e) => handleAddTransaction(e)}>Income</button>
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