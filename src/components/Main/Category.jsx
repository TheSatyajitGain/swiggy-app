import { useState } from 'react';
import CategoryAPI from './CategoryAPI';
import Styles from './Category.module.css';

const ITEMS_PER_PAGE = 12;

const Category = () => {
  const [page, setPage] = useState(0);

  const startIndex = page * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const visibleItems = CategoryAPI.slice(startIndex, endIndex);

  const handleForward = () => {
    if (endIndex < CategoryAPI.length) {
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
            opacity: endIndex >= CategoryAPI.length ? 0.5 : 1,
          }}
        ></ion-icon>
      </div>

      <div className={Styles.category}>
        {visibleItems.map((category, key) => (
          <div className={Styles.categoryItem} key={key}>
            <img src={category.ImgSrc} alt={category.name} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Category;
