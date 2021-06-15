import React from 'react';

import { Container, Row, Col, Alert } from 'react-bootstrap';

const CustomShop = () => {
  return (
    <Container fluid='xl' style={{ minHeight: 'calc(100vh - 56px)' }}>
      <Row>
        <Col>
          <Alert variant='primary' className='rounded-0 my-3 text-center'>
            Custom shop in not implemented yet
          </Alert>
        </Col>
      </Row>
    </Container>
  );
};

export default CustomShop;
