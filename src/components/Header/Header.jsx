import img from '../../assets/SwiggyLogo.png';
import styles from './Header.module.css';
import { Link } from 'react-scroll';

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
          <Link
            to="appDownload"
            smooth={true}
            duration={3000}
            className={styles.app}
          >
            <strong>Get the App</strong>
          </Link>
          <a href="" className={styles.signIn}>
            <strong>Sign in</strong>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
