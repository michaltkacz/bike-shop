import React, { useState, useEffect } from 'react';
import { Table, Card, Button, Alert } from 'react-bootstrap';
import { IoTrashOutline } from 'react-icons/io5';

import { StyleSheet, css } from 'aphrodite';
const styles = StyleSheet.create({
  deleteButton: {
    cursor: 'pointer',
    transition: 'transform 333ms ease-in-out',

    ':hover': {
      boxShadow: '0 0px 4px 0 #ff8c00, 0 0px 4px 0 #ff8c00',
      transform: 'scale(1.5, 1.5)',
    },
  },
});

const Cart = ({ items, onClearCart, onCartItemRemove, onCartCheckout }) => {
  const [totalValue, setTotalValue] = useState(null);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (items && items.length) {
      const currency = items[0].price.currency;
      let value = 0;
      items.forEach((item) => {
        value += parseFloat(item.price.value);
      });
      setTotalValue({ value, currency });
      return;
    }
    setTotalValue(null);
  }, [items]);

  const removeOneItem = (itemId) => {
    onCartItemRemove && onCartItemRemove(itemId);
    activateAlert();
  };

  const removeAllItems = () => {
    onClearCart && onClearCart();
    activateAlert();
  };

  const checkoutCart = () => {
    onCartCheckout &&
      onCartCheckout({
        items,
        status: 'new',
        value: totalValue,
        orderDate: new Date(),
        paidUp: true,
      });
  };

  const activateAlert = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };

  if (items && items.length) {
    return (
      <Card border='primary' className='rounded-0'>
        <Card.Body className='p-0'>
          <Table striped hover responsive>
            <thead>
              <tr>
                <th></th>
                <th>#</th>
                <th>Name</th>
                <th>Options</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => {
                return (
                  <tr key={item.id}>
                    <td className='text-center'>
                      <IoTrashOutline
                        className={css(styles.deleteButton)}
                        onClick={() => removeOneItem(item.id)}
                      />
                    </td>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>
                      {item?.options ? (
                        item.options.map((option, index) => {
                          return <span key={index}>{option.value} </span>;
                        })
                      ) : (
                        <span className='text-italic text-muted'>
                          No options
                        </span>
                      )}
                    </td>
                    <td>
                      <nobr>
                        {item.price.value}
                        {item.price.currency}
                      </nobr>
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              {totalValue && (
                <tr>
                  <td className='text-center'>
                    <IoTrashOutline
                      className={css(styles.deleteButton)}
                      style={{ fontSize: '1.1rem' }}
                      onClick={() => removeAllItems()}
                    />
                  </td>
                  <td colSpan='2'>
                    <Alert
                      show={showAlert}
                      variant='secondary'
                      className='rounded-0 m-0 text-center'
                    >
                      Cart updated
                    </Alert>
                  </td>
                  <td className='text-right px-2'>
                    <strong>Total:</strong>
                  </td>
                  <td>
                    <nobr>
                      {totalValue.value.toFixed(2)}
                      {totalValue.currency}
                    </nobr>
                  </td>
                </tr>
              )}
            </tfoot>
          </Table>
        </Card.Body>
        <Card.Footer className='text-right'>
          <Button variant='primary' onClick={() => checkoutCart()}>
            Checkout
          </Button>
        </Card.Footer>
      </Card>
    );
  }

  return (
    <Card border='primary' className='rounded-0'>
      <Card.Body className='p-5 text-center'>
        <h5>Your cart is currently empty!</h5>
      </Card.Body>
    </Card>
  );
};

export default Cart;
