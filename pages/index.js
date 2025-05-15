import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
    const [showText, setShowText] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setShowText(true), 500); // delay munculnya animasi
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={styles.container}>
            <h1 className={`${styles.welcome} ${showText ? styles.fadeIn : ''}`}>
                Selamat Datang Awaaa!
            </h1>
            <Link href="/dashboard" className={styles.button}>
                Masuk ke Dashboard
            </Link>
        </div>
    );
}
