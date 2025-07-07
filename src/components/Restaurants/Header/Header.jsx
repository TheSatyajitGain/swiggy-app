import img from '../../../assets/SwiggyLogoForProduct.jpg';
import Styles from './Header.module.css';
import api from '../ApiData/api';

const Header = ({ data }) => {
  const swiggyAPI = async () => {
    try {
      const response = await api();
      data(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <header className={Styles.header}>
        <img src={img} alt="Swiggy Logo" className={Styles.logo} />
        <div className={Styles.location} onClick={swiggyAPI}>
          <ion-icon name="location-outline"></ion-icon>
          <p> Netajee Pally, Barasat, Kolkata</p>
        </div>

        <nav className={Styles.navigation}>
          <div className={Styles.navitem}>
            <span>
              <ion-icon name="briefcase-outline"></ion-icon>
            </span>
            <span>Swiggy Corporate</span>
          </div>

          <div className={Styles.navitem}>
            <span>
              <ion-icon name="cash-outline"></ion-icon>
            </span>
            <span>Offer</span>
          </div>

          <div className={Styles.navitem}>
            <span>
              <ion-icon name="help-buoy-outline"></ion-icon>
            </span>
            <span>Help</span>
          </div>

          <div className={Styles.navitem}>
            <span>
              <ion-icon name="person-add-outline"></ion-icon>
            </span>
            <span>Sign In</span>
          </div>

          <div className={Styles.navitem}>
            <span>
              <ion-icon name="cart-outline"></ion-icon>
            </span>
            <span>Cart</span>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
