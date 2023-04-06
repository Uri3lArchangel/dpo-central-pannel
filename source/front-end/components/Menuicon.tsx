import React, { useState } from 'react';
import styles from '../../../styles/Home/MenuIcon.module.css';
import { open } from '../functions/Sidemenu';


const MenuIcon = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
    open()
  }

  return (
    <button id='menuIcon' onClick={handleClick} className={styles.menuIcon}>
      <svg viewBox="0 0 24 24" width='40px' height='40px' id='svgicon' className={`${styles.menuIconSvg} ${isOpen?styles.open:''}`}>
        <line x1="4" y1="6" x2="20" y2="6" />
        <line x1="4" y1="12" x2="20" y2="12" />
        <line x1="4" y1="18" x2="20" y2="18" />
     
      </svg>
    </button>
  );
};

export default MenuIcon;
