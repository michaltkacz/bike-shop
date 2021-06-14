import React, { useState, useEffect } from 'react';

import { MdDirectionsBike } from 'react-icons/md';
import { IoShirtOutline, IoStarOutline } from 'react-icons/io5';

import { ListGroup } from 'react-bootstrap';

const CategoryMenu = ({ onCategoryChange }) => {
  const [category, setCategory] = useState('bikes');

  useEffect(() => {
    onCategoryChange && onCategoryChange(category);
  }, [category]);

  return (
    <div>
      <ListGroup variant='flush'>
        <ListGroup.Item
          action
          active={category === 'bikes'}
          onClick={() => setCategory('bikes')}
        >
          <MdDirectionsBike size='1.2rem' className='mr-1' />
          Bikes
        </ListGroup.Item>
        <ListGroup.Item
          action
          active={category === 'sportswear'}
          onClick={() => setCategory('sportswear')}
        >
          <IoShirtOutline size='1.2rem' className='mr-1' />
          Sportswear
        </ListGroup.Item>
        <ListGroup.Item
          action
          active={category === 'accessories'}
          onClick={() => setCategory('accessories')}
        >
          <IoStarOutline size='1.2rem' className='mr-1' /> Accessories
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default CategoryMenu;
