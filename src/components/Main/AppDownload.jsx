import { appDownloadBanner } from './Constants';
import Styles from './appDownload.module.css';

let AppDownload = () => {
  return (
    <div className={Styles.appDownload}>
      <img src={appDownloadBanner} alt="BANNER......" />
    </div>
  );
};

export default AppDownload;
