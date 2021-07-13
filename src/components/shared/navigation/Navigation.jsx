import React from 'react'
import style from'./navigation.module.css'
import { Link } from 'react-router-dom'
export default function Navigation() {
    const brandstyle ={
        color:'#fff',
        textDecoration:"none",
        fontWeight:"bold",
        fontSize: '22px',
        display: 'flex',
        alignItems: 'center',
        padding:"10px"
    }
    const logoText = {
        marginLeft: '10px',
    };
    return (
        <nav className={`${style.navbar} container`}>
           <Link style={brandstyle} to="/">
               <img src="/images/logo.png" alt="logo" />
               <span style={logoText}>CodingCafe</span>
           </Link>
        </nav>
    )
}
