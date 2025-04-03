import styles from './Home.module.css'
import TextSection from '@components/TextSection'
import HBlock from '@components/HBlock'


function Home() {
    return (
        <main className={styles.main}>
            <TextSection className={styles.Intro}
            style={{fontSize : "1.rem"}}>
                <HBlock 
                num={3} 
                className="IntroSubTitle"
                style={{fontSize:"2em"}}>ClassHelper란?</HBlock> <br />
                개인적으로 학생이 운영하고 있는 사이트입니다!
                자리 바꾸기, 팀 나누기 등 선생님들을 위한 페이지들을 개발하고 있습니다. <br />
                또한 영단어 학습등 클래스 카드와 비슷한 기능들을 개발하고 있습니다. <br />
                현재는 학교 도우미에서 자리 바꾸기 페이지만 개발해 놓은 상태입니다!
            </TextSection>
        </main>
    )
}

export default Home