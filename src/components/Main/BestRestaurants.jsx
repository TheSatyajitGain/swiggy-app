import { useState } from 'react';
import BestRestaurantsAPI from './BestRestaurantsAPI';
import Styles from './BestRestaurants.module.css';
import { offerIcon } from './Constants';

const ITEMS_PER_PAGE = 3;
const BestRestaurants = () => {
  const [page, setPage] = useState(0);

  const startIndex = page * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const visibleItems = BestRestaurantsAPI.slice(startIndex, endIndex);

  const handleForward = () => {
    if (endIndex < BestRestaurantsAPI.length) {
      setPage((prev) => prev + 1);
    }
  };

  const handleBackward = () => {
    if (page > 0) {
      setPage((prev) => prev - 1);
    }
  };

  return (
    <>
      <div className={Styles.icon}>
        <h2>Discover best restaurants on Dineout</h2>
        <ion-icon
          name="arrow-back-outline"
          onClick={handleBackward}
          style={{
            opacity: page === 0 ? 0.5 : 1,
          }}
        ></ion-icon>
        <ion-icon
          name="arrow-forward-outline"
          onClick={handleForward}
          style={{
            opacity: endIndex >= BestRestaurantsAPI.length ? 0.5 : 1,
          }}
        ></ion-icon>
      </div>

      <div className={Styles.BestRestaurants}>
        {visibleItems.map((restaurant, key) => (
          <div className={Styles.restaurants} key={key}>
            <div className={Styles.restaurantCard}>
              <img src={restaurant.ImgSrc} alt={restaurant.name} />
              <h3>{restaurant.name}</h3>
              <h4>
                <ion-icon name="star"></ion-icon>
                <span> {restaurant.rating}</span>
              </h4>
            </div>
            <div className={Styles.extraInfo}>
              <div className={Styles.first}>
                <span>{restaurant.food}</span> <span>{restaurant.rate}</span>
              </div>
              <div className={Styles.second}>
                <span>{restaurant.address}</span>
                <span>{restaurant.distance}</span>
              </div>
              <div className={Styles.offer}>
                <img src={offerIcon} alt="Offer Icon" />
                <span>
                  Flat {restaurant.offer.discount}% off on{' '}
                  {restaurant.offer.condition}
                </span>
              </div>
              <div className={Styles.bankOffer}>
                <span>Up to 10% off with bank offers</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default BestRestaurants;
