import React, { useEffect, useState } from 'react';
import { getCategories } from '../../api/categories';
import { getProducts } from '../../api/products';
import ProductsCategory from './ProductsCategory';
import { useSelector } from 'react-redux';
import './index.scss';
import Product from './Product';
const Products = () => {
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);
  const {
    filter: { filter },
  } = useSelector((state) => state);

  useEffect(() => {
    (async function () {
      const { data = [] } = await getProducts();
      const { data: categories = [] } = await getCategories();
      //   console.log(res, res1);
      setData(data);
      setCategories(categories);
    })();
    // get("products").then(({ data }) => {
    //   setData(data);
    // });
    // get("categories").then(({ data }) => {
    //   setCategories(data);
    // });
  }, []);

  return (
    <main role='main'>
      <div className='products-container'>
        <div className='category-sidebar'>
          <ProductsCategory category={categories} />
        </div>

        <section className='product-cards-container'>
          <Product data={data} filter={filter} />
        </section>
      </div>
    </main>
  );
};

export default Products;
