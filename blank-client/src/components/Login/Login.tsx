import styles from "./Login.module.css"
import { BiArrowFromLeft } from 'react-icons/bi'
import React, { useState } from "react"

export const Login = () => {
    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [rememberMe, setRememberMe] = useState<boolean>(false)

    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.currentTarget.value)
    }

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value)
    }

    const handleRememberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRememberMe(e.currentTarget.checked)
    }

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();

    }
    
    return (
        <div className={styles.container}>
            <div className={styles.login}>
                <form>
                    <label className={styles.label} htmlFor="username">Username</label>
                    <input className={styles.input} id="username" name="username" onChange={handleUsernameChange}></input>

                    <label className={styles.label} htmlFor="password">Password</label>
                    <input className={styles.input} type="password" id="password" name="password" onChange={handlePasswordChange}></input>
                    
                    <div className={styles.remember}>
                        <input type="checkbox" id="remember" onChange={handleRememberChange}></input>
                        <label htmlFor="remember"> Remember me</label>
                    </div>

                    <button className={styles.button} onClick={handleLogin}>Login <span className={styles.arrow}><BiArrowFromLeft size={28} /></span></button>
                </form>
            </div>
        </div>
    )
}