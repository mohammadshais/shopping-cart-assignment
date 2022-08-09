import http from './httpService';

const getBannerItems = async () => {
  return await http.get('/banners');
};
export { getBannerItems };
