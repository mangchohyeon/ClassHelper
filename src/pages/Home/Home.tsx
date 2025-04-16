import styles from './Home.module.css'
import { Text } from '@components/Text'
import { Highlight } from '@components/Highlight'

function Home() {
    return (
        <div className={styles.Main}>
            <header
            className={styles.Heading}>
                <Highlight
                query={["편리하고 간편한 학습", "교육 혁신 플랫폼"]}
                className={styles.Heading1}>
                    ClassHelper 
                    편리하고 간편한 학습 & 교육 혁신 플랫폼
                </Highlight>
                <br />
                <Highlight
                query={[""]}
                className={styles.Heading2}>
                    자리 바꾸기, 영단어 학습 등의 서비스를 사용하세요.
                </Highlight>
            </header>

            <main className={styles.main}>
                
            </main>
        </div>
    )
}

export default Home