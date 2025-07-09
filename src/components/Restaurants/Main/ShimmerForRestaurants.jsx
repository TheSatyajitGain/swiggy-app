import Styles from './ShimmerForRestaurants.module.css';

const ShimmerForRestaurants = () => {
  return (
    <>
      <div className={Styles.WhatsOnYourMindIcon}>
        <h2>Whats On Your Mind</h2>
        <ion-icon name="arrow-back-outline"></ion-icon>
        <ion-icon name="arrow-forward-outline"></ion-icon>
      </div>

      <div className={Styles.WhatsOnYourMind}>
        {Array(7)
          .fill(0)
          .map((ele, key) => (
            <div className={Styles.WhatsOnYourMindItem} key={key}></div>
          ))}
      </div>

      <div className={Styles.topRestaurantChainsIcon}>
        <h2>Top restaurant chains</h2>
        <ion-icon name="arrow-back-outline"></ion-icon>
        <ion-icon name="arrow-forward-outline"></ion-icon>
      </div>

      <div className={Styles.topRestaurants}>
        {Array(20)
          .fill(1)
          .map((ele, key) => {
            return <div className={Styles.topRestaurantsCard} key={key}></div>;
          })}
      </div>
    </>
  );
};

export default ShimmerForRestaurants;
