import { appDownloadBanner } from './Constants';
import Styles from './appDownload.module.css';
import { Element } from 'react-scroll';

let AppDownload = () => {
  return (
    <Element name="appDownload">
      {' '}
      <div className={Styles.appDownload} id="app">
        <img src={appDownloadBanner} alt="BANNER......" />
      </div>
    </Element>
  );
};

export default AppDownload;
