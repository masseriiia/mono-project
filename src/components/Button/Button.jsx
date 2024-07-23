import styles from './Button.module.css'

export function Button({children, ...props}) {
    return (
        <button {...props}>{children}</button>
    )
}