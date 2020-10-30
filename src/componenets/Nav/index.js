import React, { useEffect } from './node_modules/react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
    const {
        categories = [],
        setCurrentCategory,
        currentPage, 
        handlePageChange
    } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name);
  }, [currentCategory]);

  return (    
      <nav>
        <ul className="flex-row">
          {pages.map((Category) => (
            <li
              className={`mx-5 ${
                currentPage.name === Category.name && 'navActive'
                }`}
              key={Category.name}
            >
              <span
                onClick={() => setCurrentCategory(Category)}
              >
                {capitalizeFirstLetter(Category.name)}
              </span>
            </li>
          ))}
        </ul>
      </nav>
  );
}

export default Nav;
