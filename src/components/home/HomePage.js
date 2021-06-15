import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';

import { useHistory } from 'react-router-dom';

import img1 from '../../assets/1.jpg';
import img2 from '../../assets/2.jpg';
import img3 from '../../assets/3.jpg';
import img4 from '../../assets/4.jpg';
import img5 from '../../assets/5.jpg';
import img6 from '../../assets/6.jpg';
import img7 from '../../assets/7.jpg';

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
            img={img6}
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
            onClick={() => history.push('/browse')}
          />
        </Col>
        <Col lg={5}>
          <Jumbo
            img={img7}
            title='Sportswear'
            subtitle='For men, women and kids'
            onClick={() => history.push('/browse')}
          />
        </Col>
      </Row>
      <Row>
        <Col lg={5}>
          <Jumbo
            img={img6}
            title='Tools & Parts'
            subtitle='All the essenstials'
            onClick={() => history.push('/browse')}
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
