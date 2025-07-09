import { useState } from 'react';
import Styles from './WhatsOnYourMind.module.css';
import { constant } from '../Constants/constants';

const WhatsOnYourMind = ({ data }) => {
  if (data === undefined) {
    return null;
  }

  const WhatsOnYourMind = data.data.cards[0].card.card.imageGridCards.info;
  const header = data.data.cards[0].card.card.header.title;

  const ITEMS_PER_PAGE = 7;
  const [page, setPage] = useState(0);

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
      <div className={Styles.WhatsOnYourMindIcon}>
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

      <div className={Styles.WhatsOnYourMind}>
        {visibleItems.map((category, key) => (
          <div className={Styles.WhatsOnYourMindItem} key={key}>
            <img src={constant + category.imageId} alt={category.name} />
          </div>
        ))}
      </div>
    </>
  );
};

export default WhatsOnYourMind;
