import styles from './Layout.module.css';
import HStack from '@components/HStack';
import { Link } from '@components/Link';
import Text from '@components/Text';

interface Navigation2Props {
    OnMenuList : boolean[];
}

export default function Naviagation2(props : Navigation2Props) {
    return (
        <HStack
        className={styles.Navigation2}>
          <div
          className={styles.Navigation2Menu}
          style={
            props.OnMenuList[0] 
            ? {color : 'black'} 
            : {color : "#52525b"}}
          >
            <Link
            className={styles.Navigation2Link}
            to="/EngWords">
              <Text
              className={styles.Navigation2LinkText}>
                영단어 학습하기
              </Text>
            </Link>
          </div>

          <div
          className={styles.Navigation2Menu}
          style={
            props.OnMenuList[1] 
            ? {color : 'black'} 
            : {color : "#52525b"}}>
            <Link
            className={styles.Navigation2Link}
            to="/teacher">
              <Text
              className={styles.Navigation2LinkText}>
                선생님 페이지
              </Text>
            </Link>
          </div>
        </HStack>
    )
}