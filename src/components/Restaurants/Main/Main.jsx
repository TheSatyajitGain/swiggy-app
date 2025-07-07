import { useContext, useState, useEffect } from 'react';
import { context } from '../../../../AppLayout/Restaurants';
import WhatsOnYourMind from './WhatsOnYourMind';

const Main = () => {
  const API = useContext(context);
  const [data, setData] = useState(null);
  useEffect(() => {
    FetchAPI();
  }, []);

  const FetchAPI = async () => {
    const response = await fetch(API);
    const data = await response.json();
    setData(data);
  };

  return <WhatsOnYourMind data={data}></WhatsOnYourMind>;
};

export default Main;
