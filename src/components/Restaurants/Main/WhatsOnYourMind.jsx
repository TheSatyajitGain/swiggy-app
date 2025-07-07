import { useState } from 'react';
import Styles from './WhatsOnYourMind.module.css';
const WhatsOnYourMind = ({ data }) => {
  if (data === null) {
    return (
      <>
        <h1>Loading</h1>
      </>
    );
  }

  const WhatsOnYourMind = data.data.cards[0].card.card.imageGridCards.info;
  const header = data.data.cards[0].card.card.header.title;
  console.log(WhatsOnYourMind);
  console.log(data);

  const ITEMS_PER_PAGE = 7;
  const [page, setPage] = useState(0);
  const img =
    'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/';

  const startIndex = page * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const visibleItems = WhatsOnYourMind.slice(startIndex, endIndex);

  const handleForward = () => {
    if (endIndex < WhatsOnYourMind.length) {
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
            opacity: endIndex >= WhatsOnYourMind.length ? 0.5 : 1,
          }}
        ></ion-icon>
      </div>

      <div className={Styles.category}>
        {visibleItems.map((category, key) => (
          <div className={Styles.categoryItem} key={key}>
            <img src={img + category.imageId} alt={category.name} />
          </div>
        ))}
      </div>
    </>
  );
};

export default WhatsOnYourMind;
