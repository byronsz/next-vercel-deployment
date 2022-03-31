import Head from 'next/head'
import { FC } from 'react';
import Navbar from "../Navbar";
import  styles from './MainLayout.module.css'

export const MainLayout:FC = ({ children }) => {
    return (
        <>
        <Head>
            <title>Contact - Simón</title>
            <meta name="Contact" content="Página de inicio generada por next" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar />
        <main className={styles.main}>
            {children}
        </main>
        </>
    )
}