import styles from '../styles/Dashboard.module.css';
import Link from 'next/link';

export default function Dashboard() {
    return (
        <div className={styles.container}>
            <nav className={styles.navbar}>
                <Link href="/" className={styles.navLink}>⬅ Kembali</Link>
            </nav>

            <h1 className={styles.title}>Gallery Timeline</h1>

            <div className={styles.timeline}>
                <div className={styles.timelineItem}>
                    <Link href="/awaa" className={styles.card}>
                        <div className={styles.content}>
                            <img src="/images/a3.jpg" alt="awaaa" className={styles.image} />
                            <p className={styles.text}>Awaaa</p>
                        </div>
                    </Link>
                    <div className={styles.circle}></div>
                </div>

                <div className={styles.timelineItem}>
                    <Link href="/antartika" className={styles.card}>
                        <div className={styles.content}>
                            <img src="/images/an7.jpg" alt="antartika" className={styles.image} />
                            <p className={styles.text}>Antartika</p>
                        </div>
                    </Link>
                    <div className={styles.circle}></div>
                </div>

                <div className={styles.timelineItem}>
                    <Link href="/k-fhoto" className={styles.card}>
                        <div className={styles.content}>
                            <img src="/images/k2.jpg" alt="k-fhoto" className={styles.image} />
                            <p className={styles.text}>K-fhoto</p>
                        </div>
                    </Link>
                    <div className={styles.circle}></div>
                </div>
            </div>
        </div>
    );
}
