import Header from '../src/components/Restaurants/Header/Header';
import Main from '../src/components/Restaurants/Main/Main';
import Footer from '../src/components/Restaurants/Footer/Footer';
import { createContext } from 'react';
import { useState } from 'react';
import SwiggyDefaultApi from '../src/components/Restaurants/ApiData/SwiggyDefaultApi';

const context = createContext();
const Restaurants = () => {
  const [data, setData] = useState(SwiggyDefaultApi);
  const fetchAPI = (response) => {
    setData(response);
  };
  return (
    <>
      <Header data={fetchAPI} />
      <context.Provider value={data}>
        <Main />
      </context.Provider>
      <Footer />
    </>
  );
};
export { context };
export default Restaurants;
