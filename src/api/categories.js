import http from './httpService';

const getCategories = async () => {
  return await http.get('/categories');
};
export { getCategories };
