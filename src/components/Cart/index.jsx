import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../../redux/slice/cartSlice';
import './index.scss';
const Cart = ({ onClose: closeCart }) => {
  const cart = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  let cartLength = cart.length;
  let isCartEmpty = cart.length === 0;
  let cartTotal = cart.reduce(function (total, item) {
    return total + item.price * item.quantity;
  }, 0);

  const onClose = useCallback(() => {
    closeCart();
  }, [closeCart]);

  const handleCartUpdate = useCallback(
    (item) => {
      dispatch(addToCart(item));
    },
    [dispatch]
  );

  const handleCartRemove = useCallback(
    (item) => {
      dispatch(removeFromCart(item));
    },
    [dispatch]
  );

  const renderCartItem = (item, index) => {
    return (
      <div className='cart-item' key={index}>
        <div className='cart-item-image'>
          <img src={item.imageURL} alt='image' />
        </div>
        <div className='cart-item-text'>
          <div className='cart-item-name'>{item.name}</div>
          <div className='cart-item-price'>
            <span
              className='circle-button'
              onClick={() => handleCartRemove(item)}
            >
              <FontAwesomeIcon icon={faMinus} />
            </span>
            <span className='cart-item-count'>{item?.quantity}</span>
            <span
              className='circle-button'
              onClick={() => handleCartUpdate(item)}
            >
              <FontAwesomeIcon icon={faPlus} />
            </span>
            <span className='cart-item-cross'>
              <FontAwesomeIcon icon={faXmark} />
            </span>
            <span>Rs.{item.price}</span>
          </div>
        </div>
        <div className='cart-item-rate'>
          <div>Rs.{item?.quantity * item.price}</div>
        </div>
      </div>
    );
  };

  return (
    <div className='cart'>
      <div className='cart-header'>
        <div className='cart-header-text'>
          My Cart
          {cartLength > 0 && (
            <span className='item-count'>({cartLength} items)</span>
          )}
        </div>
        <div className='cart-close' onClick={() => onClose()}>
          <FontAwesomeIcon icon={faXmark} />
        </div>
      </div>
      {isCartEmpty ? (
        <>
          <div className='cart-content-empty'>
            <div className='cart-content-empty-header'>
              No items in your cart{' '}
            </div>
            <div className='cart-content-empty-text'>
              Your favorite items are just a click away
            </div>
          </div>
          <div className='cart-footer-empty'>
            <div
              className='cart-footer-empty-button'
              onClick={() => onClose(false)}
            >
              Start Shopping
            </div>
          </div>
        </>
      ) : (
        <>
          {' '}
          <div className='cart-content'>
            <div className='cart-items'>
              {cart.map((product, index) => {
                return renderCartItem(product, index);
              })}
            </div>
            <div className='cart-lowest-price'>
              <div className='cart-lowest-price-image'>
                <img src='/static/images/lowest-price.png'></img>
              </div>
              <div className='cart-lowest-price-text'>
                You won't find it cheaper anywhere
              </div>
            </div>
          </div>
          <div className='cart-footer'>
            <div className='cart-footer-text'>
              Promo code can be applied on payment page
            </div>
            <div className='cart-footer-button' onClick={() => onClose(false)}>
              <div className='cart-footer-button-chekout'>
                Proceed to Checkout
              </div>
              <div className='cart-footer-button-amount'>
                Rs.{cartTotal}
                <span>&gt;</span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
