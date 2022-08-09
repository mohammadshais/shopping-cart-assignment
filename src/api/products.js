import http from './httpService';

const getProducts = async () => {
  return await http.get('/products');
};

export { getProducts };
