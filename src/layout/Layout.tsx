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
import { VStack } from '@components/VStack';
import HomeIcon  from '@assets/HomeIcon.svg';
import DictinaryIcon from '@assets/DictionaryIcon.svg';
import SchoolIcon from '@assets/SchoolIcon.svg';
import SettingIcon from '@assets/SettingIcon.svg';
import { Drawer } from '@components/Drawer';
import { useState } from 'react';

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
  // Sidebar(DrawerBody)
  const Sidebar = <VStack
  className={styles.Sidebar}>
    <HStack
    className={styles.SidebarMenuWrapper}>
      <Svg
      className={styles.SidebarMenuIcon}
      src={HomeIcon}
      alt="홈 아이콘" />
      <Text
      className={styles.SidebarMenuText}>
        홈 화면
      </Text>
    </HStack>

    <HStack
    className={styles.SidebarMenuWrapper}>
      <Svg
      className={styles.SidebarMenuIcon} 
      src={DictinaryIcon}
      alt="영단어 학습 아이콘" />
      <Text
      className={styles.SidebarMenuText}>
        영단어 학습
      </Text>
    </HStack>

    <HStack
    className={styles.SidebarMenuWrapper}>
      <Svg
      className={styles.SidebarMenuIcon}
      src={SchoolIcon}
      alt="학교 아이콘"
      />
      <Text
      className={styles.SidebarMenuText}>
        선생님 메뉴
      </Text>
    </HStack>
  </VStack>

  return (
    <>
      <HStack
      className={styles.Navigation}
      align={'center'}>
        {/**Sidebar */}
        <Drawer
        placement="start"
        Size="sm"
        Title={
        <div
        className={styles.SidebarLogoWrapper}>
          <Svg
          className={styles.SidebarLogo}
          id={styles.SidebarLogo}
          src={Logo}
          alt="로고"
          onClick={AlertMessage}
          />
        </div>}
        
        Body={Sidebar}
        Footer={
          <HStack
          className={styles.SidebarMenuWrapper}>
            <Svg
            className={styles.SidebarMenuIcon}
            src={SettingIcon}
            alt="설정 아이콘" />
            <Text
            className={styles.SidebarMenuText}
            id={styles.SettingText}>
              설정
            </Text>
          </HStack>
        } 
        BtnChildren={
          <Svg
          className={styles.MenuIcon}
          src={MenuIcon}
          alt="메뉴 아이콘" />
        }
        className={styles.MenuBtn}
        />

        <Tooltip
        content={<Text
        className={styles.TooltipText}>
          홈 화면으로 이동
        </Text>}
        openDelay={500}
        closeDelay={200}
        >
          <HStack
          className={styles.LogoWrapper}>
            <Svg
            className={styles.Logo}
            src={Logo}
            alt="로고"
            onClick={() => Navigate("/")}
            /> 
            ClassHelper
          </HStack>
        </Tooltip>


        <Tooltip 
        content="소개 페이지"
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
        content="블로그 페이지"
        openDelay={500}
        closeDelay={200}
        className={styles.MenuWrapper}
        placement="bottom"
        id={styles.BlogWrapper}>
          {/**블로그 */}
          <div
          className={styles.MenuWrapper}
          style={{
            width : "auto",
            height : "auto",
          }}>
              <Text 
            className={styles.MenuText}>
              블로그
            </Text>
          </div>
        
        </Tooltip>
        
        <Tooltip
        content="로그인하기"
        openDelay={500}
        closeDelay={200}
        className={styles.MenuWrapper}>
          <div 
          style={{
            width : 'auto',
            height : 'auto'
          }}
          onClick={AlertMessage}>
            {/**LoginText */}
            <Text
            className={styles.MenuText}>
              로그인
            </Text>
          </div>
        </Tooltip>
      </HStack>

      <Outlet />
    </>
  );
};

export default Layout;