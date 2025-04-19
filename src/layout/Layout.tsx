import { Outlet } from 'react-router-dom';
import styles from './Layout.module.css';
import Logo from '@assets/Logo.svg';
import Swal from 'sweetalert2';
import { Navigate } from '@hooks/Navigate';
import  HStack from '@components/HStack';
import Svg from '@components/Svg';
import Text from '@components/Text';
import VStack from '@components/VStack';
import { Link } from '@components/Link';

function AlertMessage() {
  Swal.fire({
      position: 'top',
      title: '죄송합니다.',
      text: '현재 열심히 개발 중인 페이지입니다.\n조금만 기다려 주시면 더 나은 서비스로 찾아뵙겠습니다!',
      icon: 'error',
      confirmButtonText: '확인',
      allowOutsideClick: false, // 외부 클릭 방지
      showClass: {
          popup: 'swal2-show'
      },
      customClass: {
          container: 'swal2-container-custom' // 커스텀 클래스 추가
      }
  })
}


function Layout() {
  
  return (
    <>
      <VStack
      className={styles.NavigationMain}>
        <HStack
        className={styles.Navigation1}
        align={'center'}>
          {/**Navigation1_1 */}
          <HStack
          className={styles.Navigation1_1}>
            <HStack
            className={styles.LogoWrapper}>
              <Svg
              className={styles.Logo}
              src={Logo}
              alt="로고"
              onClick={AlertMessage}
              /> 
              ClassHelper
            </HStack>

            <HStack
            className={styles.MainMenuWrapper}>
              
            </HStack>
          </HStack>

          {/**Navigation1_2 */}
          <HStack
          className={styles.Navigation1_2}>
            <div
            className={styles.MenuTextWrapper}>
              <Text
              className={styles.MenuText}>
                가이드
              </Text>
            </div>          
            
            <div
            className={styles.MenuTextWrppaer}
            id={styles.LoginWrapper}>
              <Text
              onClick={AlertMessage}
              className={styles.MenuText}>
                로그인
              </Text>
            </div>
          </HStack>
        </HStack>

        <HStack
        className={styles.Navigation2}>
          <div
          className={styles.Navigation2Menu}>
            <Link
            className={styles.Navigation2Link}
            to="EngWords">
              <Text
              className={styles.Navigation2LinkText}>
                영단어 학습하기
              </Text>
            </Link>
          </div>

          <div
          className={styles.Navigation2Menu}>
            <Link
            className={styles.Navigation2Link}
            to="EngWords">
              <Text
              className={styles.Navigation2LinkText}>
                선생님 페이지
              </Text>
            </Link>
          </div>
        </HStack>
      </VStack>

      <Outlet />
    </>
  );
};

export default Layout;