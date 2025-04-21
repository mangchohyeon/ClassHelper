import styles from './Teacher.module.css';
import HBlock from '@components/HBlock';
import TeacherNavy from './TeacherNavy';
import Card from '@components/Card';
import Text from '@components/Text';
import Svg from '@components/Svg';
import ChangeClassIcon from '@assets/ChangeClassIcon.svg';
import { Link } from '@components/Link';

export default function Teacher() {
    return (
        <main className={styles.Main}>
            <TeacherNavy 
            OnMenuList={[false, false]}/>

            <header
            className={styles.Header}>
                <div
                className={styles.HeaderTitle}>
                    선생님 메뉴란?
                </div>
                선생님들이 사용할 수 있도록 만든 페이지입니다.
            </header>

            <section
            className={styles.SubmenuIntroduceSection}>
                <Text
                className={styles.SubmenuIntroduceSectionTitle}>
                    선생님 페이지 메뉴
                </Text>

                {/**자리바꾸기 카드 */}
                <Card
                className={styles.SubmenuCard}
                Img={<Svg
                    className={styles.SubmenuCardImg}
                    src={ChangeClassIcon}
                    />}

                Title={<Text
                    className={styles.SubmenuCardTitle}>
                        자리 바꾸기
                    </Text>}

                Description={<section
                    className={styles.SubmenuCardDescriptionSection}>
                        자리 바꾸기에서는 Excel파일로 된 학생 명단을 업로드하고, <br />
                        자리 배치를 선택하면 <br />
                        학생들의 자리를 간편하게 바꿀수 있습니다!<br />
                        <Text>Excel파일에는 첫번째 세로줄에 학생명단이 있어야 합니다.</Text>
                    </section>}

                Footer={<Link to="/teacher/changeclass">
                    <Text>자리 바꾸기 바로가기</Text>
                </Link>}
                />
            
            {/**팀 나누기 카드 */}
            <Card
            className={styles.SubmenuCard}
            Img={<Svg
                className={styles.SubmenuCardImg}
                src={ChangeClassIcon}
                />}

            Title={<Text
                className={styles.SubmenuCardTitle}>
                    팀 나누기
                </Text>}

            Description={<section
                className={styles.SubmenuCardDescriptionSection}>
                    팀 나누기에서는 학생 번호를 선택하고 <br />
                    원하는 팀의 수를 입력하면 <br />
                    학생들의 팀을 간편하게 나눌 수 있습니다!<br />
                </section>}

            Footer={<Link to="/teacher/changeclass">
                <Text>팀 나누기 바로가기</Text>
            </Link>}
            />
            </section>
        </main>
    )
}
