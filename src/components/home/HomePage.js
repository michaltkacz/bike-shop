import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';

import { useHistory } from 'react-router-dom';

import img1 from '../../assets/1.jpg';
import img4 from '../../assets/4.jpg';
import img6 from '../../assets/6.jpg';
import img8 from '../../assets/8.jpg';
import img9 from '../../assets/9.jpg';

import Jumbo from './Jumbo';

const HomePage = () => {
  const history = useHistory();

  return (
    <Container
      fluid='xl'
      className='py-3'
      style={{ minHeight: 'calc(100vh - 56px)' }}
    >
      <Row>
        <Col>
          <Jumbo
            img={img8}
            title='Welcome to the Bike-Shop!'
            subtitle='Complete bikes / Custom shop / Sportswear / Tools / Accessories / Parts'
          />
        </Col>
      </Row>
      <Row>
        <Col lg={7}>
          <Jumbo
            img={img1}
            title='Bikes'
            subtitle='Complete ikes, off-the-shelf'
            onClick={() => history.push('/browse?cat=bikes')}
          />
        </Col>
        <Col lg={5}>
          <Jumbo
            img={img9}
            title='Sportswear'
            subtitle='For men, women and kids'
            onClick={() => history.push('/browse?cat=sportswear')}
          />
        </Col>
      </Row>
      <Row>
        <Col lg={5}>
          <Jumbo
            img={img6}
            title='Tools & Parts'
            subtitle='All the essenstials'
            onClick={() => history.push('/browse?cat=tools')}
          />
        </Col>
        <Col lg={7}>
          <Jumbo
            img={img4}
            title='Custom Shop'
            subtitle='Build your dream machine'
            onClick={() => history.push('/custom-shop')}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
