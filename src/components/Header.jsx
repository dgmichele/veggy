import styles from './Header.module.css';
import logo from '../asset/img/logo.webp';

const Header = () => {
  const handleLogoClick = () => {
    window.location.href = "/"; 
  };

  return (
    <header>
        <div className={styles.headerContainer}>
            <div className={styles.headerInner}>
                <button onClick={handleLogoClick} className={styles.logo}>
                    <img className={styles.imgLogo} src={logo} alt="logo"/>
                </button>
                <a className={styles.headerButton} href="https://dgmichele.github.io/Il-mio-portfolio/" rel="noopener" target="_blank">
                    Portfolio
                </a>
            </div>
        </div>
    </header>
  );
};

export default Header;
