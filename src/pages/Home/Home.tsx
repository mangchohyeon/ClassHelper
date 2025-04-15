import styles from './Home.module.css'
import { Text } from '@components/Text'

function Home() {
    return (
        <main className={styles.main}>
            <section
            className={styles.Heading}>
                ClassHelper란 선생님들 및 학생들의 
                간편한 활동을 위해 만든 사이트입니다.
                <Text 
                style={{
                    color : '52525B'
                }}>
                    ClassHelper를 통해 간편하고
                </Text>
            </section>
        </main>
    )
}

export default Home