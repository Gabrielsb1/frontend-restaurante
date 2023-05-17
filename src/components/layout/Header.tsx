import { Link } from "react-router-dom";
import logo from "../img/logo1.png";
import styles from './Header.module.css';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import sobre from './Sobre';



function Header() {
  const [show, setShow] = useState(false);

  const handleMenuToggle = () => {
    setShow(!show);
  }

  // define a classe css para o menu de acordo com o estado atual de 'show'
  const menuClass = `${styles.customContent} ${show ? styles.on : ''}`;

  return (
    <header>
      <div className={menuClass}>
        <div className={styles.logo}>
          <img src={logo}></img>
        </div>
        <ul className={styles.custom_List_Menu}>
          <li className={styles.my_Li}> <Link to={'/'} className={styles.my_A}>Home</Link> </li>
          <li className={styles.my_Li}><a className={styles.my_A} href="#session">Sobre nós</a></li>
          <li className={styles.my_Li}> <Link to={'/cardapio'} className={styles.my_A}>Cardápio</Link> </li>
          <li className={styles.my_Li}> <Link to={'/contato'} className={styles.my_A}>Contatos</Link> </li>
          <li className={styles.my_Li}><a className={styles.my_A} href="#"><FontAwesomeIcon icon={faInstagram} /></a></li>
          <li className={styles.my_Li}><a className={styles.my_A} href="#"><FontAwesomeIcon icon={faFacebookF} /></a></li>
          <li className={styles.my_Li}><a className={styles.my_A} href="#"><FontAwesomeIcon icon={faShoppingCart} /></a></li>
        </ul>
        <div className={styles.menu_Toggle} onClick={handleMenuToggle}>
          <div className={styles.one}></div>
          <div className={styles.two}></div>
          <div className={styles.three}></div>
        </div>
      </div>

      
    </header>
    
    
  );
}

export default Header;
