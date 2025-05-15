import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Gallery.module.css';

export default function Antartika() {
    const [selectedImage, setSelectedImage] = useState(null);
    const router = useRouter();

    const images = [
        '/images/an1.jpg',
        '/images/an2.jpg',
        '/images/an3.jpg',
        '/images/an4.jpg',
        '/images/an5.jpg',
        '/images/an6.jpg',
        '/images/an7.jpg',
    ];

    return (
        <div className={styles.container}>
            <h2 className={styles.heading}>Galeri Antartika</h2>

            <button className={styles.backButton} onClick={() => router.push('/dashboard')}>
                ⬅ Kembali ke Dashboard
            </button>

            <div className={styles.grid}>
                {images.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        className={styles.image}
                        onClick={() => setSelectedImage(img)}
                        alt={`Foto ${index + 1}`}
                    />
                ))}
            </div>

            {selectedImage && (
                <div className={styles.modal}>
                    <button className={styles.closeButton} onClick={() => setSelectedImage(null)}>✖</button>
                    <img src={selectedImage} className={styles.modalImage} alt="Preview" />
                </div>
            )}
        </div>
    );
}
