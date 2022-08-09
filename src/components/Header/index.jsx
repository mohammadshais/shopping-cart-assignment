import { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import Cart from '../Cart';
import './index.scss';
import { useSelector } from 'react-redux';

const Header = () => {
  const [openCart, setOpenCart] = useState(false);
  const cartItems = useSelector((state) => state.cart.cartItems);

  const toggleCart = useCallback(() => setOpenCart(!openCart), [openCart]);

  return (
    <header className='header'>
      <div className='container'>
        <div className='image-container'>
          <Link to='/'>
            <img src='static/images/logo.png' alt='Sabka Bazaar logo' />
          </Link>
        </div>
        <nav className='nav-container'>
          <Link to='/home'>Home</Link>
          <Link to='/products'>Products</Link>
        </nav>
        <div className='cart-signup-container'>
          <div className='signup-container'>
            <Link to='/login'>Signin</Link>
            <Link to='/register'>Register</Link>
          </div>
          <div className='cart-container' onClick={toggleCart}>
            <div className='cart-image-container'>
              <img src='cart.svg' alt='Sabka Bazaar logo' />
            </div>
            <div className='cart-text-container'>{cartItems.length} items</div>
          </div>
        </div>
      </div>
      <div className={`cart-popup ${openCart ? 'show' : ''}`}>
        <Cart onClose={toggleCart} />
      </div>
    </header>
  );
};

export default Header;
