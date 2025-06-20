import { OcImage1, OcImage2, OcImage3 } from './Constants';
import Styles from './OfferContainer.module.css';

const OfferContainer = () => {
  const container = [OcImage1, OcImage2, OcImage3];

  return (
    <div className={Styles.OfferContainer}>
      {container.map((imgSrc, key) => {
        return (
          <div key={key} className={Styles.containerBox}>
            <img src={imgSrc} alt="" />
          </div>
        );
      })}
    </div>
  );
};

export default OfferContainer;
