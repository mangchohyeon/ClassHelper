import styles from './KeyboardConvert.module.css';

const KeyboardConvert = () => {
    type Mode = "ko2en" | "en2ko";

    return (
        <main className={styles.Main}>
            <header className={styles.Header}>
                키보드 변환
            </header>

            <section className={styles.ResultSection}>
                
            </section>
        </main>
    )
}