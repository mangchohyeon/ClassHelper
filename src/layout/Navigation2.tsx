import styles from './Layout.module.css';
import HStack from '@components/HStack';
import { Link } from '@components/Link';
import Text from '@components/Text';

interface Navigation2Props {
    OnMenuList : boolean[];
    MenuLists : string[][];
}

export default function Naviagation2(props : Navigation2Props) {
    return (
        <HStack
        className={styles.Navigation2}>
          {
            props.MenuLists.map((Menu, index) => (
              <div
              className={styles.Navigation2Menu}
              style={
                props.OnMenuList[index] 
                ? {color : 'black'} 
                : {color : "#bfbfbf"}}
              >
                <Link
                className={styles.Navigation2Link}
                to={Menu[0]}>
                  <Text
                  className={styles.Navigation2LinkText}>
                    {Menu[1]}
                  </Text>
                </Link>
              </div>
            ))
          }
        </HStack>
    )
}