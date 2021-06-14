import React, { useState, useEffect } from 'react';

import { Container, Row, Col } from 'react-bootstrap';

import AccessoriesList from './AccessoriesList';
import BikeList from './BikeList';
import CategoryMenu from './CategoryMenu';
import SearchFilter from './SearchFilter';
import SportswearList from './SportswearList';

const BrowsePage = () => {
  const [page, setPage] = useState('bikes');

  useEffect(() => {
    console.log(page);
  }, [page]);

  return (
    <Container fluid='xl' style={{ minHeight: 'calc(100vh - 56px)' }}>
      <Row>
        <Col lg={4} className='p-0 m-0'>
          <CategoryMenu onCategoryChange={setPage} />
          <SearchFilter />
        </Col>
        <Col className='p-0 m-0'>
          {page === 'bikes' && <BikeList />}
          {page === 'sportswear' && <SportswearList />}
          {page === 'accessories' && <AccessoriesList />}
        </Col>
      </Row>
    </Container>
  );
};

export default BrowsePage;
