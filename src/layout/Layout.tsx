import { Outlet } from 'react-router-dom';
import { Menu, Navigation} from '@components/Navigation/Navigation';
import HBlock from '@components/HBlock';
import styles from './Layout.module.css'
import DivLink  from '@components/DivLink';
import Swal from 'sweetalert2';

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

const menulist: Menu[] = [
  {
    MainMenu: <div
    id="EngWords"
    onClick={AlertMessage}
    style={{fontSize : "1.4em"}}>
      영단어 학습
      </div>,
    

    SubMenu: [
      <div
      id="Engwords/study"
      style={{fontSize : "1.3em"}}
      onClick={AlertMessage}>학습하기</div>,

      <div
      id="Engwords/game"
      style={{fontSize : "1.3em"}}
      onClick={AlertMessage}>영단어 게임</div>
    ]
  },
  {
    MainMenu: <DivLink to="/ClassHelper">
      <HBlock num={2}
      style={{fontSize : "1.4em"}}>
        학교 도우미
      </HBlock>
      </DivLink>,
    SubMenu: [
      <DivLink to="/ClassHelper/ChangeClass">
        <HBlock num={3}
        style={{fontSize : "1.3em"}}>
          자리 바꾸기
        </HBlock>
      </DivLink>,

      <div
      onClick={AlertMessage}
      style={{fontSize : "1.3em"}}>
        팀 나누기
      </div>
    ]
  },
  {
    MainMenu: <div 
      style={{fontSize : "1.4em"}}
      onClick={AlertMessage}>
        수학
      </div>,

    SubMenu: [
    <div
    style={{fontSize : "1.3em"}}
    onClick={AlertMessage}>
      피보나치 수열
    </div>,
      
    <div 
    onClick={AlertMessage}
    style={{fontSize : "1.3em"}}>
      파스칼의 삼각형
    </div>,
    ]
  },   
];

function Layout() {
  return (
    <>
      {/* Navigation 컴포넌트는 모든 페이지에서 공통적으로 사용됩니다. */}
      <Navigation
      className={styles.Navigation}
      Home={<DivLink to='/'>
        <HBlock num={1} className={styles.Home}>
          Class{'\n'}Helper
          </HBlock></DivLink>}
          MenuLists={menulist} 
          />
      {/* Outlet : 현재 라우트에 해당하는 자식 컴포넌트를 렌더링*/}
      <Outlet />
    </>
  );
};

export default Layout;