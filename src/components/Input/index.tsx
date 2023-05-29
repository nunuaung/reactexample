import React from "react";
import styles from './style.module.css'

type Props = {
    className?: string,
    placeholder?: string
    value?: string
    onChange: any
}

const Input:React.FC<Props> = ({ placeholder, value, onChange, className}) => {
    return (
        <div className={`${className}`}>
            <input className={styles.input} type="text" placeholder={placeholder} value={value} onChange={onChange} />
        </div>
        )
}

export default Input;