import React, { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { database } from '../../firebase/firebase';
import { Container, Row, Col, Alert, Button } from 'react-bootstrap';
import Cart from './Cart';
import { IoCartOutline } from 'react-icons/io5';

const CartPage = () => {
  const [items, setItems] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const { currentUser } = useAuth();

  const getData = () => {
    const ref = database.ref('carts').child(currentUser.uid);
    ref.on('value', (snapshot) => {
      const itemsDatabase = snapshot.val();
      const newItems = [];
      for (let id in itemsDatabase) {
        newItems.push({ id, ...itemsDatabase[id] });
      }

      setItems(newItems);
    });
  };

  const removeCartItem = (id) => {
    const ref = database.ref('carts').child(currentUser.uid).child(id);
    ref.remove();
  };

  const clearCart = () => {
    const ref = database.ref('carts').child(currentUser.uid);
    ref.remove();
  };

  const makeOrder = (orderData) => {
    const ref = database.ref('orders').child(currentUser.uid);
    ref.push(orderData);
  };

  const checkoutCart = (orderData) => {
    makeOrder(orderData);
    clearCart();
    setShowAlert(true);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container fluid='xl' style={{ minHeight: 'calc(100vh - 56px)' }}>
      <Row>
        <Col className='p-0 px-md-3'>
          <p className='display-4 px-1'>
            <IoCartOutline />
            Cart
          </p>
          {showAlert || (
            <Cart
              items={items}
              onClearCart={clearCart}
              onCartItemRemove={removeCartItem}
              onCartCheckout={checkoutCart}
            />
          )}
          <Alert show={showAlert} variant='info' className='rounded-0 m-0'>
            <Alert.Heading className='display-4'>
              Thank you for your purchase!
            </Alert.Heading>
            <p>
              Your order will be sent as soon as possible
              <hr />
            </p>
            <div className='d-flex justify-content-end'>
              <Button
                onClick={() => setShowAlert(false)}
                variant='outline-info'
              >
                Close
              </Button>
            </div>
          </Alert>
        </Col>
      </Row>
    </Container>
  );
};

export default CartPage;
