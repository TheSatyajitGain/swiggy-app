import { useState } from 'react';
import Styles from './RestaurantsWithOnlineFooddelivery.module.css';
import { constant } from '../Constants/constants';

const RestaurantsWithOnlineFooddelivery = ({ data }) => {
  if (data === undefined) {
    return (
      <>
        <h1>{null}</h1>
      </>
    );
  }

  const restaurantsWithOnlineFood =
    data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;

  const header = data.data.cards[2].card.card.title;

  return (
    <>
      <div className={Styles.restaurantsWithOnlineFood}>
        <h2>{header}</h2>

        {restaurantsWithOnlineFood.map((restaurant, key) => (
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

export default RestaurantsWithOnlineFooddelivery;
