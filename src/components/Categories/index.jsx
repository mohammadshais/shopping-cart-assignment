import { useCallback } from 'react';
import './index.scss';

const Categories = ({ data, openCategory }) => {
  const handleCategory = useCallback(
    (id) => {
      openCategory(id);
    },
    [openCategory]
  );
  return (
    <div className='categories'>
      <div className='container'>
        {data.map((category, index) => {
          let className = `category ${
            index % 2 == 0 ? 'category-reverse' : ''
          }`;
          return (
            <div key={category.id} className={className}>
              <div className='category-image-container'>
                <div className='category-image'>
                  <img
                    src={category.imageUrl}
                    alt={category.name}
                    className='banner-image'
                  />
                </div>
              </div>
              <div className='category-content'>
                <h4 className='heading'>{category.name}</h4>
                <p className='desc'>{category.description}</p>
                <button
                  className='link-button'
                  onClick={() => handleCategory(category.id)}
                >
                  Explore {category.key}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
