import { Link } from 'react-router-dom';
import { OcImage1, OcImage2, OcImage3 } from './Constants';
import Styles from './OfferContainer.module.css';

const OfferContainer = () => {
  const container = [OcImage1, OcImage2, OcImage3];

  return (
    <div className={Styles.OfferContainer}>
      {container.map((imgSrc, key) => {
        return (
          <Link to="/restaurants">
            <div key={key} className={Styles.containerBox}>
              <img src={imgSrc} alt="" />
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default OfferContainer;
