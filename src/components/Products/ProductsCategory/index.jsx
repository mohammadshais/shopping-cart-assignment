import './productsCategory.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../../redux/slice/filterSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
const ProductsCategory = ({ category: categories }) => {
  const {
    filter: { filter },
  } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const selectedCategory = categories.filter((itm) => itm.id === filter)[0];
  categories = categories.filter((itm) => itm.enabled);
  const handleFilter = (categoryId) => {
    if (categoryId !== filter) {
      dispatch(setFilter(categoryId));
    } else {
      dispatch(setFilter(null));
    }
    setSidebarOpen(!sidebarOpen);
  };
  const handleSidebarOpen = () => {
    setSidebarOpen(!sidebarOpen);
  };
  const sidbarClassName = `sidebar-mobile-content ${
    sidebarOpen ? '' : 'sidbar-hide'
  }`;

  return (
    <aside>
      <div className='sidebar'>
        <ul>
          {categories &&
            categories.map((category, index) => {
              let activeClass = `${category.id === filter ? 'active' : ''}`;
              return (
                <li
                  key={index}
                  className={activeClass}
                  onClick={() => handleFilter(category.id)}
                >
                  <div>{category.name}</div>
                </li>
              );
            })}
        </ul>
      </div>

      <div className='sidebar-mobile'>
        <div className='sidebar-mobile-container'>
          <div className='sidebar-selected-text'>
            {selectedCategory?.name || 'Select Category'}
          </div>
          <div className='sidebar-open' onClick={() => handleSidebarOpen()}>
            {sidebarOpen && <FontAwesomeIcon icon={faAngleUp} />}
            {!sidebarOpen && <FontAwesomeIcon icon={faAngleDown} />}
          </div>
        </div>
        <div className={sidbarClassName}>
          <ul>
            {categories &&
              categories.map((category, index) => {
                let activeClass = `${category.id === filter ? 'active' : ''}`;
                return (
                  <li
                    key={index}
                    className={activeClass}
                    onClick={() => handleFilter(category.id)}
                  >
                    <div>{category.name}</div>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default ProductsCategory;
