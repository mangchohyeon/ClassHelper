import styles from './ClassHelper.module.css'
import HBlock from '@components/HBlock'

function ClassHelper() {
    return (
        <main className={styles.main}>
            <section className={styles.Intro}>
                <HBlock num={2}> 학교 도우미란?</HBlock>
                
            </section>
        </main>
    )
}

export default ClassHelper