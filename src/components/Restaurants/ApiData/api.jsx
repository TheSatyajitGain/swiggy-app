const api = () => {
  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      const swiggyAPI = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${coords.latitude}&lng=${coords.longitude}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`;
      resolve(swiggyAPI);
    });
  });

  return promise;
};

export default api;
