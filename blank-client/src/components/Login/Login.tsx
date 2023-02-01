import styles from "./Login.module.css"
import { BiArrowFromLeft } from 'react-icons/bi'
import React from "react"

export const Login = () => {

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
    }
    
    return (
        <div className={styles.container}>
            <div className={styles.login}>
                <form>
                    <label className={styles.label} htmlFor="username">Username</label>
                    <input className={styles.input} id="username" name="username"></input>

                    <label className={styles.label} htmlFor="password">Password</label>
                    <input className={styles.input} type="password" id="password" name="password"></input>

                    <button className={styles.button} onClick={handleLogin}>Login <span className={styles.arrow}><BiArrowFromLeft size={28} /></span></button>
                </form>
            </div>
        </div>
    )
}