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
import { Tooltip } from '@components/Tooltip';
import { IconButton } from '@mui/material';

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
      className={styles.Navigation}
      align={'center'}>
        <Tooltip
        content="홈화면으로 이동"
        openDelay={500}
        closeDelay={200}
        className={styles.LogoWrapper}>
          <Svg
          className={styles.Logo}
          src={Logo}
          alt="로고"
          onClick={AlertMessage}
          /> 
        </Tooltip>
             
        
        <Tooltip 
        content="소개 페이지로 이동"
        openDelay={500}
        closeDelay={200}
        className={styles.QuestionIconWrapper}>
          {/**QuestionIcon */}
          <QuestionCircleIcon 
          className={styles.QuestionIcon}
          alt="소개 페이지로 이동 아이콘"
          />
        </Tooltip>
        
        <Tooltip
        content="로그인 페이지로 이동"
        openDelay={500}
        closeDelay={200}>
          {/**LoginText */}
          <Text
          onClick={AlertMessage}
          className={styles.LoginText}>
            로그인
          </Text>
        </Tooltip>
      </HStack>

      <Outlet />
    </>
  );
};

export default Layout;