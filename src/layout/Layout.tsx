import { Outlet } from 'react-router-dom';
import styles from './Layout.module.css';
import Logo from '@assets/Logo.svg';
import Swal from 'sweetalert2';
import { Navigate } from '@hooks/Navigate';
import { HStack } from '@components/HStack';
import { QuestionCircleIcon } from '@components/QuestionCircleIcon';
import { Svg } from '@components/Svg';
import MenuIcon from '@assets/MenuIcon.svg';
import { Text } from '@components/Text';


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
      <HStack
      className={styles.Navigation}>
        {/**메뉴 아이콘 */}
        <Svg
        className={styles.MenuIcon}
        src={MenuIcon}
        alt="메뉴 아이콘" />
        
        {/**Logo */}
        <Svg
        className={styles.Logo}
        src={Logo}
        alt="로고"
        onClick={AlertMessage}
        />

        {/**QuestionIcon */}
        <QuestionCircleIcon 
        className={styles.QuestionIcon}
        alt="소개 페이지로 이동 아이콘"
        title="소개 페이지로 이동" />
        
        {/**LoginWrapper */}
        <Text
        onClick={() => Navigate("/Login")}
        className={styles.LoginText}>
          로그인
        </Text>
      </HStack>

      <Outlet />
    </>
  );
};

export default Layout;