import React from 'react';

import { Container, Jumbotron, Button, Row, Col } from 'react-bootstrap';

import { StyleSheet, css } from 'aphrodite';

import { useHistory } from 'react-router-dom';

import img1 from '../../assets/1.jpg';
import img2 from '../../assets/2.jpg';
import img3 from '../../assets/3.jpg';
import img4 from '../../assets/4.jpg';

import Jumbo from './Jumbo';

const styles = StyleSheet.create({
  header: {
    borderBottom: '1px solid black',
  },
  brandName: {
    fontFamily: `'Do Hyeon', sans-serif`,
  },
});

const HomePage = () => {
  const history = useHistory();

  return (
    <Container
      fluid='xl'
      className='py-1'
      style={{ minHeight: 'calc(100vh - 56px)' }}
    >
      <Row>
        <Col>
          <h1 className={css(styles.header)}>
            Welcome to the{' '}
            <span className={css(styles.brandName)}>
              <nobr>Bike-Shop!</nobr>
            </span>
          </h1>
        </Col>
      </Row>
      <Row>
        <Col lg={7}>
          <Jumbo
            img={img1}
            title='Bikes'
            subtitle='Complete bikes, off-the-shelf '
            onClick={() => history.push('/browse')}
          />
        </Col>
        <Col lg={5}>
          <Jumbo
            img={img2}
            title='Sportwear'
            subtitle='For men and women'
            onClick={() => history.push('/browse')}
          />
        </Col>
      </Row>
      <Row>
        <Col lg={5}>
          <Jumbo
            img={img3}
            title='Parts and accessories'
            subtitle='Everything you need for your bike'
            onClick={() => history.push('/browse')}
          />
        </Col>
        <Col lg={7}>
          <Jumbo
            img={img4}
            title='Bike builder'
            subtitle='Build your dream bike'
            onClick={() => history.push('/bike-builder')}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
