import styles from './Teacher.module.css';
import HBlock from '@components/HBlock';
import Naviagation2 from '@layout/Naviagion2';

export default function Teacher() {
    return (
        <main className={styles.main}>
            <Naviagation2 OnMenuList={[false, true]} />

            <header
            className={styles.Header}>
                <div
                className={styles.HeaderTitle}>
                    선생님 메뉴란?
                </div>

                선생님들이 사용할 수 있는 
            </header>
        </main>
    )
}
