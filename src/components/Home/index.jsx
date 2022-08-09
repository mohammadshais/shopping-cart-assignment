import React, { useState, useEffect, useRef } from 'react';

import { useHistory } from 'react-router-dom';
import { getBannerItems } from '../../api/banner';
import { getCategories } from '../../api/categories';
import BannerCarousel from '../BannerCarousel';
import Categories from '../Categories';
import './index.scss';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/slice/filterSlice.js';
const Home = () => {
  const isCalled = useRef(false);
  const [banner, setBanner] = useState([]);
  let [categories, setCategories] = useState([]);

  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    if (!isCalled.current) {
      (async function () {
        const { data: category = [] } = await getCategories();
        const { data: banners = [] } = await getBannerItems();
        setBanner(banners);
        setCategories(category);
      })();
    }
    isCalled.current = true;

    // get("banners").then(({ data }) => {
    //   setBanner(data);
    // });
    // get("categories").then(({ data }) => {
    //   setCategories(data);
    // });
  }, []);

  const openCategory = (categoryId) => {
    dispatch(setFilter(categoryId));
    history.push('/products');
  };
  // console.log(categories, banner);

  categories = categories.filter((item) => item.enabled);
  return (
    <div className='banners'>
      <BannerCarousel data={banner} />
      <Categories data={categories} openCategory={openCategory} />
      {/* {categories
        .filter((item) => item.enabled)
        .map((item) => (
          <Categories
            category={item}
            key={item.key}
            openCategory={openCategory}
          />
        ))} */}
    </div>
  );
};

export default Home;
