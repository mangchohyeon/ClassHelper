import styles from './Home.module.css';
import Text from '@components/Text';
import Highlight from '@components/Highlight';
import Svg from '@components/Svg';
import Card from '@components/Card';

function Home() {
    return (
        <div className={styles.Main}>
            <header
            className={styles.Heading}>
                <Text 
                className={styles.ClassHelperText}>
                    ClassHelper{"     \n"}
                </Text>
                <Highlight
                query={["편리하고 간편한 학습", "교육 혁신 플랫폼"]}
                className={styles.HighlightText}> 
                    편리하고 간편한 학습 & 교육 혁신 플랫폼
                </Highlight>
                <br />
                <Highlight
                query={[""]}
                className={styles.Heading2}>
                   학생과 선생님을 위한 맞춤형 서비스를 간편하게 사용하세요!
                </Highlight>
            </header>

            <main className={styles.main}>
                
            </main>
        </div>
    )
}

export default Home