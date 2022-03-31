import { FC } from 'react'
import styles from './pricing.module.css'
import { MainLayout } from "../../components/layouts/MainLayout"

export default function Pricing() {
    return(
        <>
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles['header-dots']}>
                    <div className={styles['header-dots-red']}></div>
                    <div className={styles['header-dots-yellow']}></div>
                    <div className={styles['header-dots-green']}></div>
                </div>
                <div className={styles['header-title']}>
                    <p><span className={styles['header-title-logo']}>JS</span> focus.js</p>
                </div>
            </div>
            <div className={styles['code-container']}>
                
            </div>
        </div>
        </>
    )
    
}

Pricing.getLayout = function getLayout(page: JSX.Element) {
    return (
        <MainLayout>
            
                { page }
            
        </MainLayout>
    )
}