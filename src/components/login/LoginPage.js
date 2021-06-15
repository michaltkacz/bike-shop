import React from 'react';
import { IoPersonCircleOutline } from 'react-icons/io5';

import { Container, Row, Col } from 'react-bootstrap';

import Login from './Login';
import Register from './Register';

const LoginPage = () => {
  return (
    <Container
      fluid='xl'
      // className='d-flex align-items-center justify-content-center'
      style={{ minHeight: 'calc(100vh - 56px)' }}
    >
      <Row>
        <Col className='p-0 px-md-3'>
          <p className='display-4 px-1'>
            <IoPersonCircleOutline />
            Authorize
          </p>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md className='p-0 px-md-3'>
          <Login />
        </Col>
        <Col xs={12} md className='p-0 px-md-3'>
          <Register />
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
