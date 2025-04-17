import styles from './Login.module.css';
import { Text } from '@components/Text';

function Login() {
    return(
        <main
        className={styles.Main}>
            <header
            className={styles.Header}>
                <Text
                className={styles.HeaderText}>
                    로그인
                </Text>
            </header>
        </main>
    )
}