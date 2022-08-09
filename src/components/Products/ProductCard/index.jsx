import React, { useCallback } from 'react';

import './productCard.scss';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../redux/slice/cartSlice';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const handleClick = useCallback(() => {
    dispatch(addToCart(product));
  }, [dispatch, product]);

  return (
    <div key={product.id} className='product'>
      <div className='name'>{product.name}</div>
      <div className='image-description-container'>
        <div className='image'>
          <img src={product.imageURL}></img>
        </div>
        <div className='description'>{product.description}</div>
      </div>
      <div className='price-container desktop'>
        <div className='price'>MRP Rs.{product.price}</div>
        <button className='button' onClick={() => handleClick(product)}>
          Buy Now
        </button>
      </div>
      <div className='price-container tablet'>
        <button className='button' onClick={() => handleClick(product)}>
          Buy Now @ Rs.{product.price}
        </button>
      </div>
      <div className='mobile-image-description-container'>
        <div className='image'>
          <img src={product.imageURL}></img>
        </div>
        <div className='description-price-container'>
          <div className='description'>{product.description}</div>
          <button className='button' onClick={() => handleClick(product)}>
            Buy Now @ Rs.{product.price}
          </button>
        </div>
      </div>
    </div>
  );
  // return (
  //   <li className='product-cards' id={product.category}>
  //     <h2 className='product-name truncate'>{product.name}</h2>
  //     <img src={product.imageURL} alt={product.name} className='product-img' />
  //     <p className='product-desc'>{product.description}</p>
  //     <button className='btn-cta mobile tablet' onClick={handleClick}>
  //       Buy Now @ Rs. {product.price}
  //     </button>
  //     <div className='product-cta-container'>
  //       <span className='product-price'>MRP Rs. {product.price}</span>
  //       <button onClick={handleClick} className='btn-cta'>
  //         Buy Now
  //       </button>
  //     </div>
  //   </li>
  // );
};

export default ProductCard;
