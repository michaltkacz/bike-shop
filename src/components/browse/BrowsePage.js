import React, { useState, useEffect } from 'react';

import { Container, Row, Col } from 'react-bootstrap';

import useQuery from './../../hooks/useQuery';

import CategoryMenu from './CategoryMenu';
import SearchFilter from './SearchFilter';

import AccessoriesList from './accessories/AccessoriesList';
import BikeList from './bikes/BikeList';
import PartsList from './parts/PartsList';
import SportswearList from './sportswear/SportswearList';
import ToolsList from './tools/ToolsList';

const BrowsePage = () => {
  const [page, setPage] = useState('bikes');

  const query = useQuery();

  useEffect(() => {
    const cat = query.get('cat');
    if (cat) {
      setPage(cat);
    }
  }, []);

  return (
    <Container fluid='xl' style={{ minHeight: 'calc(100vh - 56px)' }}>
      <Row>
        <Col lg={4} className='p-0 m-0'>
          <CategoryMenu onCategoryChange={setPage} />
          <SearchFilter />
        </Col>
        <Col className='p-0 m-0'>
          <p className='display-4 px-3 mb-0'>Results</p>
          {page === 'bikes' && <BikeList />}
          {page === 'sportswear' && <SportswearList />}
          {page === 'accessories' && <AccessoriesList />}
          {page === 'parts' && <PartsList />}
          {page === 'tools' && <ToolsList />}
        </Col>
      </Row>
    </Container>
  );
};

export default BrowsePage;
