import Styles from './Slogan.module.css';
let imgLeft =
  'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png';
let imgRight =
  'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png';
const Slogan = () => {
  return (
    <>
      <div className={Styles.slogan}>
        <img src={imgRight} alt="" className={Styles.ImgRight} />
        <strong>
          Order food & groceries. Discover best restaurants. Swiggy it!
        </strong>
        <img src={imgLeft} alt="" className={Styles.ImgLeft} />
      </div>
    </>
  );
};

export default Slogan;
