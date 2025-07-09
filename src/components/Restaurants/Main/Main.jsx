import { useContext, useState, useEffect } from 'react';
import { context } from '../../../../AppLayout/Restaurants';
import WhatsOnYourMind from './WhatsOnYourMind';
import TopRestaurantChains from './TopRestaurantChains';
import RestaurantsWithOnlineFooddelivery from './RestaurantsWithOnlineFooddelivery';
import ShimmerForRestaurants from './ShimmerForRestaurants';

const Main = () => {
  const API = useContext(context);
  const [data, setData] = useState(undefined);
  useEffect(() => {
    FetchAPI();
  }, []);

  const FetchAPI = async () => {
    const response = await fetch(API);
    const data = await response.json();
    setData(data);
  };

  return data === undefined ? (
    <ShimmerForRestaurants />
  ) : (
    <>
      <WhatsOnYourMind data={data}></WhatsOnYourMind>
      <TopRestaurantChains data={data} />
      <RestaurantsWithOnlineFooddelivery data={data} />
    </>
  );
};

export default Main;
