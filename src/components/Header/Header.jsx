import img from '../../assets/SwiggyLogo.png';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={img} alt="Swiggy Logo" />
      </div>

      <nav className={styles.navigation}>
        <ul>
          <li>Swiggy Corporate</li>
          <li>Partner with us</li>
        </ul>
        <div className={styles.navigationExtra}>
          <a href="" className={styles.app}>
            <strong>Get the App</strong>
          </a>
          <a href="" className={styles.signIn}>
            <strong>Sign in</strong>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
