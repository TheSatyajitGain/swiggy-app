import { useState } from 'react';
import instaMartAPI from './InstaMartAPI';
import Styles from './InstaMartShop.module.css';

const ITEMS_PER_PAGE = 6;

const InstaMartShop = () => {
  const [page, setPage] = useState(0);

  const startIndex = page * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const visibleItems = instaMartAPI.slice(startIndex, endIndex);

  const handleForward = () => {
    if (endIndex < instaMartAPI.length) {
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
        <h2>Shop groceries on Instamart</h2>
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
            opacity: endIndex >= instaMartAPI.length ? 0.5 : 1,
          }}
        ></ion-icon>
      </div>

      <div className={Styles.category}>
        {visibleItems.map((category, key) => (
          <div className={Styles.categoryItem} key={key}>
            <img src={category.ImgSrc} alt={category.name} />
            <h3>{category.name}</h3>
          </div>
        ))}
      </div>
    </>
  );
};

export default InstaMartShop;
