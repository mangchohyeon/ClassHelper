import styles from './ChangeClass.module.css'
import HBlock from 'components/HBlock'
import { QuestionIcon } from 'components/QuestionIcon'


function ChangeClass() {
    return (
        <main className={styles.Main}>
            <header className={styles.Header}>
                <HBlock num={1}
                style={{
                    fontSize : "1.5em",
                    width : "100%"
                }}
                className={styles.Title}>
                    &lt;자리바꾸기&gt;
                </HBlock>
            </header>

            <section className={styles.QuestionSection}>
                <QuestionIcon className={styles.QuestionIcon} />
            </section>

            <section className={styles.InputWrapper}>
                
            </section>
        </main>
    )
}

export default ChangeClass