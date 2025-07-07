import Styles from './CitiesWithFoodDelivery.module.css';
import Cities from './CitiesWithFoodDeliveryAPI';
import { useRef, useState } from 'react';

const CitiesWithFoodDelivery = () => {
  const [array, setArray] = useState(9);
  const useRefElement = useRef(null);
  const handleClick = () => {
    setArray(Cities.length - 1);
    useRefElement.current.style.display = 'none';
  };
  return (
    <div className={Styles.cityDelivery}>
      <h2>Cities with food delivery</h2>
      <div className={Styles.cities}>
        {Cities.slice(0, array).map((city, key) => {
          return (
            <div className={Styles.city} key={key}>
              Order Food Online in {city}
            </div>
          );
        })}
        <div className={Styles.showMore} ref={useRefElement}>
          <span onClick={handleClick}>Show More</span>
          <span>
            <svg
              width="15"
              height="16"
              viewBox="0 0 16 17"
              fill="none"
              aria-hidden="true"
              strokecolor="rgba(2, 6, 12, 0.92)"
              fillcolor="#FF5200"
            >
              <path
                d="M1.352 5.292a1 1 0 0 0-.106 1.41l5.261 6.12.029.033c.15.175.324.377.495.527.204.179.533.402.993.402s.789-.223.992-.402a5.4 5.4 0 0 0 .495-.527l.03-.034 5.213-6.064a1 1 0 1 0-1.517-1.303l-5.213 6.064-5.262-6.12a1 1 0 0 0-1.41-.106"
                fill="#FF5200"
                fillOpacity="0.92"
              ></path>
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CitiesWithFoodDelivery;
