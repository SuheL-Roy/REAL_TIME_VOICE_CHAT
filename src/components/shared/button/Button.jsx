import React from 'react'
import styles from './button.module.css'
export default function Button({text,onclick}) {
    return (
        <button onClick={onclick} className={styles.button}>
            <span>{text}</span>
            <img className={styles.arrow} src="/images/arrow-forward.png" alt="logo" />
        </button>
    )
}
