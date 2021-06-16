import React, { useState, useEffect } from 'react';

import { Container, Row, Col, Alert, Button } from 'react-bootstrap';

import { IoCartOutline } from 'react-icons/io5';

import { useAuth } from '../../contexts/AuthContext';
import { database } from '../../firebase/firebase';

import Cart from './Cart';
import OrderMessage from './OrderMessage';

const CartPage = () => {
  const [items, setItems] = useState([]);
  const [showOrderMessage, setShowOrderMessage] = useState(false);
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
    setShowOrderMessage(true);
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
          {showOrderMessage || (
            <Cart
              items={items}
              onClearCart={clearCart}
              onCartItemRemove={removeCartItem}
              onCartCheckout={checkoutCart}
            />
          )}
          <OrderMessage
            show={showOrderMessage}
            onClose={() => setShowOrderMessage(false)}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default CartPage;
