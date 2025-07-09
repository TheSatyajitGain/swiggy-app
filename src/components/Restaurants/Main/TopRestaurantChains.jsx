import { useState } from 'react';
import Styles from './TopRestaurantChains.module.css';
import { constant } from '../Constants/constants';

const ITEMS_PER_PAGE = 4;

const TopRestaurantChains = ({ data }) => {
  const [page, setPage] = useState(0);
  if (data === undefined) {
    return null;
  }
  const topRestaurants =
    data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;

  const header = data.data.cards[1].card.card.header.title;

  const startIndex = page * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const visibleItems = topRestaurants.slice(startIndex, endIndex);

  const handleForward = () => {
    if (endIndex < topRestaurants.length) {
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
        <h2>{header}</h2>
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
            opacity: endIndex >= topRestaurants.length ? 0.5 : 1,
          }}
        ></ion-icon>
      </div>

      <div className={Styles.topRestaurants}>
        {visibleItems.map((restaurant, key) => (
          <div className={Styles.restaurants} key={key}>
            <div className={Styles.restaurantCard}>
              <img src={constant + restaurant.info.cloudinaryImageId} />
              <h1>
                {restaurant?.info?.aggregatedDiscountInfoV3?.header != undefined
                  ? restaurant?.info?.aggregatedDiscountInfoV3?.header
                  : ' '}{' '}
                {restaurant?.info?.aggregatedDiscountInfoV3?.subHeader !=
                undefined
                  ? restaurant?.info?.aggregatedDiscountInfoV3?.subHeader
                  : ' '}
              </h1>
            </div>

            <div className={Styles.extraInfo}>
              <h3>{restaurant.info.name}</h3>
              <h3 className={Styles.rating}>
                <span>
                  <ion-icon name="star"></ion-icon>
                  <span className={Styles.ratingText}>
                    {restaurant.info.avgRating}
                  </span>
                </span>
                <span className={Styles.time}>
                  {restaurant.info.sla.slaString}
                </span>
              </h3>
              <span>{restaurant.info.cuisines.slice(0, 3).join(' , ')}</span>
              <span>{restaurant.info.areaName}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TopRestaurantChains;
