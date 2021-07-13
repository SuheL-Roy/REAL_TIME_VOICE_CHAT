import React from 'react'
import styles from './card.module.css'
//import { Link } from 'react-router-dom'
export default function Card({title,icons,children}) {
    return (
        <div>
             <div className={styles.card}>
           <div className={styles.headingWraperr}>
                <img src={`/images/${icons}.png`} alt="logo" />
                <h1 className={styles.heading}>{title}</h1>
           </div>
           
           {children}
        </div>
        </div>
    )
}
