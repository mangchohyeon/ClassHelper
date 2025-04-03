import { useState } from 'react';
import styles from './Navigation.module.css'
import { NavigationProps } from 'types/MenuType';

function Navigation({Home, MenuLists} : NavigationProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <nav className={styles.Navigation}>
      <div className={styles.HomeWrapper}>
        {Home}
      </div>

      {MenuLists.map((menu, index) => (
        <div 
          className={styles.MenuWrapper}
          key={index}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div className={styles.MainMenu} id={`MainMenu${index}`}>
            {menu.MainMenu}
          </div>
          <ul 
            className={styles.SubMenuLists} 
            id={`SubMenuLists${index}`}
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

export default Navigation