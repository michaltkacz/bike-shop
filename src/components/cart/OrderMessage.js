import React from 'react';

import { Alert, Button } from 'react-bootstrap';

const OrderMessage = ({ show, onClose }) => {
  return (
    <Alert show={show} variant='info' className='rounded-0 m-0'>
      <Alert.Heading className='display-4'>
        Thank you for your purchase!
      </Alert.Heading>
      <p>Your order will be sent as soon as possible</p>
      <hr />
      <div className='d-flex justify-content-end'>
        <Button onClick={onClose} variant='outline-info'>
          Close
        </Button>
      </div>
    </Alert>
  );
};

export default OrderMessage;
