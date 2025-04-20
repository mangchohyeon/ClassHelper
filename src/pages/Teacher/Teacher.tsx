import styles from './Teacher.module.css'
import HBlock from '@components/HBlock'

export default function Teacher() {
    return (
        <main className={styles.main}>
            <section className={styles.Intro}>
                <HBlock num={2}> 학교 도우미란?</HBlock>
                
            </section>
        </main>
    )
}
