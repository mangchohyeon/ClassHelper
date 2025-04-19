import { Outlet } from 'react-router-dom';
import styles from './Layout.module.css';
import Logo from '@assets/Logo.svg';
import Swal from 'sweetalert2';
import { Navigate } from '@hooks/Navigate';
import  HStack from '@components/HStack';
import QuestionCircleIcon from '@components/QuestionCircleIcon';
import Svg from '@components/Svg';
import Text from '@components/Text';
import Tooltip from '@components/Tooltip';
import DictionaryIcon from '@assets/DictionaryIcon.svg';
import SchoolIcon from '@assets/SchoolIcon.svg';

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
      className={styles.NavigationMain}
      align={'center'}>
        {/**Navigation1 */}
        <HStack
        className={styles.Navigation1}>
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

        {/**Navigation2 */}
        <HStack
        className={styles.Navigation2}>
          {/**DictionaryIcon */}
          <Tooltip
            content={<Text
              className={styles.TooltipText}>
                영단어 학습
              </Text>
            }
            className={styles.MenuIconWrapper}
            id={styles.DictionaryIconWrapper}
            openDelay={500}
            closeDelay={200}> 
              <Svg
              className={styles.MenuIcon}
              src={DictionaryIcon}
              alt="사전 아이콘" />
          </Tooltip>
            
          {/**SchoolIcon */}
          <Tooltip
          content={<Text
            className={styles.TooltipText}>
              선생님 메뉴
            </Text>
          }
          className={styles.MenuIconWrapper}
          openDelay={500}
          closeDelay={200}> 
          <Svg
          className={styles.MenuIcon}
          src={SchoolIcon}
          alt="학교 아이콘" />
          </Tooltip>

          <Tooltip 
          content={<Text
            className={styles.TooltipText}>
              가이드
            </Text>}
          openDelay={500}
          closeDelay={200}
          className={styles.MenuIconWrapper}
          id={styles.QuestionIconWrapper}>
            {/*QuestionIcon */}
            <QuestionCircleIcon 
            className={styles.MenuIcon}
            alt="가이드 아이콘"
            />
          </Tooltip>
          
          <div
          className={styles.MenuTextWrppaer}>
            <Text
            onClick={AlertMessage}
            className={styles.MenuText}>
              로그인
            </Text>
          </div>
        </HStack>
      </HStack>

      <Outlet />
    </>
  );
};

export default Layout;