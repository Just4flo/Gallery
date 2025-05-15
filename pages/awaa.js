import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Gallery.module.css';

export default function Antartika() {
    const [selectedImage, setSelectedImage] = useState(null);
    const router = useRouter();

    const images = [
        '/images/a1.jpg',
        '/images/a2.jpg',
        '/images/a3.jpg',
        '/images/a4.jpg',
        '/images/a5.jpg',
        '/images/a6.jpg',
    ];

    return (
        <div className={styles.container}>
            <h2 className={styles.heading}>Galeri Awaaa</h2>

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
