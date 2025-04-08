import { useState } from 'react';
import styles from './Navigation.module.css'
import { ComponentsProps } from '@/types/ComponentsProps';

interface Menu {
  MainMenu : React.ReactNode;
  SubMenu : React.ReactNode[];
}

interface NavigationProps extends ComponentsProps {
  Home : React.ReactNode;
  MenuLists : Menu[];
}

function Navigation(props : NavigationProps) {
  //마우스 hover인지 아닌지 판단해줄 state
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const classname = props.className != undefined 
  ? props.className
  : styles.Navigation;

  return (
    <nav 
    className={classname}
    id={props.id}
    style={props.style}>
      <div className={styles.HomeWrapper}>
        {props.Home}
      </div>

      {props.MenuLists.map((menu, index) => (
        <div 
          className={styles.MenuWrapper}
          key={index}
          onMouseEnter={() => setHoveredIndex(index)} //마우스 올려져있으면 설정
          onMouseLeave={() => setHoveredIndex(null)}  //마우스 안 올려져 있으면 null
        >
          <div className={styles.MainMenu} id={`MainMenu${index}`}>
            {menu.MainMenu}
          </div>
          <ul 
            className={styles.SubMenuLists} 
            id={`SubMenuLists${index}`}
            //마우스 올려져 있으면 display는 flex
            style={{ display: hoveredIndex === index ? 'flex' : 'none', 
              gap : '1rem',
              marginTop : "5%"
              
             }}
          >
            {menu.SubMenu.map((submenu, submenuIndex) => (
              <li 
                key={submenuIndex}
                className={styles.SubeMenu} 
                id={`SubMenu${submenuIndex}`}
              >
                {submenu}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  )
}

export { Menu, NavigationProps, Navigation};