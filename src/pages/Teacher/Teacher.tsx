import styles from './Teacher.module.css';
import HBlock from '@components/HBlock';
import TeacherNavy from './TeacherNavy';
import { HCard } from '@components/Card';
import Text from '@components/Text';
import Svg from '@components/Svg';
import ChangeClassIcon from '@assets/ChangeClassIcon.svg';
import { Link } from '@components/Link';
import DivideTeamIcon from '@assets/DivideTeamIcon.svg';
import HighlightText from '@components/MyHighlightText';
import ButtonLink from '@components/ButtonLink';
import RequireStar from '@/components/RequireStar';

export default function Teacher() {
    return (
        <main className={styles.Main}>
            <TeacherNavy 
            OnMenuList={[false, false]}/>

            <header
            className={styles.Header}>
                <HighlightText className={styles.Title1}>선생님 메뉴란?</HighlightText> <br />
                선생님들이 필요로 하시는 기능을 모아 페이지입니다!
            </header>

            <section
            className={styles.SubmenuIntroduceSection}>
                <HighlightText className={styles.Title1}> 주요 기능 </HighlightText>

                {/**자리바꾸기 카드 */}
                <HCard
                className={styles.SubmenuCard}
                Img={<div
                    className={styles.SubmenuCardImgWrapper}>
                        <Svg
                        className={styles.SubmenuCardImg}
                        src={ChangeClassIcon}
                        />
                    </div>}

                BoxProps={{
                    className : styles.SubmenuCardContent
                }}

                Title={<Text
                    className={styles.SubmenuCardTitle}>
                        자리 바꾸기 
                    </Text>}

                Description={<section
                    className={styles.SubmenuCardDescriptionSection}>
                        자리 바꾸기에서는 Excel파일로 된 학생 명단을 업로드한 후에 <br />
                        자리 배치를 선택하면 학생들의 자리를 간편하게 바꿀수 있습니다!<br />
                        <Text
                        className={styles.SubmenuCardHelperText}>
                            <RequireStar />Excel파일에는 첫번째 세로줄에 학생명단이 있어야 합니다.
                        </Text>
                    </section>}

                    Footer={
                        <section
                        className={styles.ButtonLinkWrapper}>
                            <ButtonLink
                            className={styles.SubmenuCardButtonLink}>
                                <Link to="/teacher/changeclass">
                                <Text className={styles.SubmenuCardLink}>
                                    바로가기
                                </Text>
                                </Link>
                            </ButtonLink>
                        </section>
                    }

                    FooterProps={{
                        className : styles.SubmenuCardFooter
                    }}
                />
            
            {/**팀 나누기 카드 */}
            <HCard
                className={styles.SubmenuCard}
                Img={<div
                    className={styles.SubmenuCardImgWrapper}>
                        <Svg
                        className={styles.SubmenuCardImg}
                        src={DivideTeamIcon}
                        />
                    </div>}

                BoxProps={{
                    className : styles.SubmenuCardContent
                }}

                Title={<Text
                    className={styles.SubmenuCardTitle}>
                        팀 바꾸기 
                    </Text>}

                Description={<section
                    className={styles.SubmenuCardDescriptionSection}>
                        팀 나누기에서는 학생 번호를 선택하고 원하는 팀의 수를 입력하면 <br />
                        학생들의 팀을 간편하게 나눌 수 있습니다!<br />
                        <Text
                        className={styles.SubmenuCardHelperText}>
                            <RequireStar />팀은 학생 명단이 아닌 번호순으로 나누어 집니다.
                        </Text>
                    </section>}

                    Footer={
                        <section
                        className={styles.ButtonLinkWrapper}>
                            <ButtonLink
                            className={styles.SubmenuCardButtonLink}>
                                <Link to="/teacher/divideteam">
                                <Text className={styles.SubmenuCardLink}>
                                    바로가기
                                </Text>
                                </Link>
                            </ButtonLink>
                        </section>
                    }

                    FooterProps={{
                        className : styles.SubmenuCardFooter
                    }}
                />

            </section>
        </main>
    )
}
