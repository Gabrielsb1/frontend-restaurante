import logo from "../img/logo1.png";
import styles from './Footer.module.css';


function Footer() {

    return (
        <footer className={styles.my_Rodape_Container}>
            <img className={styles.my_Logo} src={logo}></img>
            <div className={styles.my_Footer_Descricao}>
                <div className={styles.my_Footer_List}>
                    <p>Copyright © 2023 - Fast System UNDB</p>
                </div>
            </div>
        </footer>
    )

}

export default Footer;