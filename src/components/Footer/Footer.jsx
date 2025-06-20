import swiggyLogo from '../../../src/assets/SwiggyLogo.png';
import Styles from './Footer.module.css';

const Footer = () => {
  let currentYear = new Date().getFullYear();
  return (
    <div className={Styles.footer}>
      <div className={Styles.footerBranding}>
        <img src={swiggyLogo} alt="Swiggy Logo" />
        <strong>© {currentYear} Swiggy Limited</strong>
      </div>

      <div className={Styles.footerPage}>
        <span>About Us</span>
        <span>Swiggy Corporate</span>
        <span>Careers</span>
        <span>Team</span>
        <span>Help & Support</span>
        <span>Partner with us</span>
        <span>Ride with us</span>
        <span>Terms & Conditions</span>
      </div>
    </div>
  );
};

export default Footer;
