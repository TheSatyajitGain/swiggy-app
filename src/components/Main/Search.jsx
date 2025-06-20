import Styles from './Search.module.css';

const Search = () => {
  return (
    <>
      <div className={Styles.search}>
        <div className={Styles.location}>
          <ion-icon name="location"></ion-icon>
          <input type="text" placeholder="Enter Your Delivery Location" />
          <ion-icon name="chevron-down-outline"></ion-icon>
        </div>

        <div className={Styles.searchByItem}>
          <input
            type="text"
            placeholder="Search for restaurant, item or more"
          />
          <ion-icon name="search"></ion-icon>
        </div>
      </div>
    </>
  );
};

export default Search;
