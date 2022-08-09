import React from 'react';
import ProductCard from '../ProductCard';
import './index.scss';
const Product = ({ data, filter }) => {
  return (
    <div className='products'>
      {filter === null && data.length > 0
        ? data.map((item) => <ProductCard product={item} key={item.id} />)
        : data
            .filter((item) => item.category === filter)
            .map((item) => <ProductCard product={item} key={item.id} />)}
    </div>
  );
};

export default Product;
