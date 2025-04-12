import { Outlet } from 'react-router-dom';
import { NavigationRow } from '@components/NavigationRow';
import styles from './Layout.module.css';
import { Logo } from '@components/Logo';
import Swal from 'sweetalert2';
import { Navigate } from '@hooks/Navigate';
import { HStack } from '@components/HStack';
import { QuestionCircleIcon } from '@components/QuestionCircleIcon';

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
  const menu = <HStack
  className={styles.Menus}>
    <QuestionCircleIcon 
    className={styles.QuestionIcon}
    />
    <div 
    className={styles.LoginWrapper}
    onClick={AlertMessage}>
      로그인
    </div>
  </HStack>
  

  
  return (
    <>
      {/* Navigation 컴포넌트는 모든 페이지에서 공통적으로 사용됩니다. */}
      <NavigationRow
      className={styles.Navigation}
      Home={<Logo
        className={styles.Logo}
        onClick={() => Navigate("/")}
        />
      }
      Menu={menu}
      />
      {/* Outlet : 현재 라우트에 해당하는 자식 컴포넌트를 렌더링*/}
      <Outlet />
    </>
  );
};

export default Layout;