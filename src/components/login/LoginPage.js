import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';

import { StyleSheet, css } from 'aphrodite';

import Login from './Login';
import Register from './Register';

const styles = StyleSheet.create({
  header: {
    borderBottom: '1px solid black',
  },
});

const LoginPage = () => {
  return (
    <Container
      fluid='xl'
      className='py-1 '
      style={{ minHeight: 'calc(100vh - 56px)' }}
    >
      <Row>
        <Col>
          <h1 className={`my-2 ${css(styles.header)}`}>Authorization</h1>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md>
          <Login />
        </Col>
        <Col xs={12} md>
          <Register />
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
