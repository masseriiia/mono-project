import { useEffect, useState } from 'react'
import { Button } from '../Button/Button'
import { Input } from '../Input/Input'
import styles from './AddForm.module.css'
import { useLocalStorage } from '../../hooks/use-localstorage'

const initialState = {
    balanceInfo: {
        balance: 0,
        income: 0,
        expenses: 0,
    },
    transactions: []
}

export function AddForm() {

    const [items, setItems, getItems] = useLocalStorage('data')
    const [formState, setFormState] = useState(initialState.transactions)
    const [transactionType, setTransactionType] = useState('expenses')

    const getLocalItems = getItems() || []
    const getLocalItem = getLocalItems.length > 0 ? getLocalItems[getLocalItems.length - 1] : initialState
    console.log(getLocalItem)

    const handleAddTransaction = (type) => {
        setTransactionType(type)
    }

    console.log(transactionType)

    const onChange = (e, field) => {
        setFormState(item => ({
            ...item,
            transactions: {
                ...item.transactions,
                [field]: e.target.value,
                type: transactionType,
                id: Date.now(), 
                
            },
        }))

    }
    console.log(formState)

    const onSubmit = (e) => {
        e.preventDefault()
        if(formState.transactions.name !== '' && formState.transactions.date !== '' && formState.transactions.amount !== '' && transactionType === 'expenses') {
            setItems([...items, {...formState, balanceInfo: {
                balance: getLocalItem.balanceInfo.balance - parseFloat(formState.transactions.amount),
                income: getLocalItem.balanceInfo.income,
                expenses: getLocalItem.balanceInfo.expenses + parseFloat(formState.transactions.amount),
            }}])
            setFormState(item => ({
                transactions:{
                    name: '',
                    amount: '',
                    date: '',
                    id: null,
                    type: ''
                }
            }))

        } else if(formState.transactions.name !== '' && formState.transactions.date !== '' && formState.transactions.amount !== '' && transactionType === 'income') {
            setItems([...items, {...formState, 
                balanceInfo: {
                    balance: getLocalItem.balanceInfo.balance + parseFloat(formState.transactions.amount),
                    income: getLocalItem.balanceInfo.income + parseFloat(formState.transactions.amount),
                    expenses: getLocalItem.balanceInfo.expenses
                },
                transactions: {
                    ...formState.transactions,
                    type: transactionType
                }
                    }])
            setFormState(item => ({
                transactions:{
                    name: '',
                    amount: '',
                    date: '',
                    id: null,
                    type: ''
                }
            }))
        }
    }
    console.log(formState)

    return (
        <form className={styles['form']} onSubmit={onSubmit}>
            <div className={styles['form-buttons']}>
                <button className={`${styles['form-input']} ${transactionType === 'expenses' ? styles['isActive'] : ''}`} type='button' id="expenses" onClick={() => handleAddTransaction('expenses')}>Expenses</button>
                <button className={`${styles['form-input']} ${transactionType === 'income' ? styles['isActive'] : ''}`} type='button' id="income" onClick={() => handleAddTransaction('income')}>Income</button>
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