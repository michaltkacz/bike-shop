import React, { useState } from 'react';

import { useHistory } from 'react-router-dom';
import { database } from '../../../firebase/firebase';

import {
  Card,
  ListGroup,
  Badge,
  Button,
  ButtonGroup,
  ToggleButton,
  Alert,
} from 'react-bootstrap';

import { useAuth } from '../../../contexts/AuthContext';

import { StyleSheet, css } from 'aphrodite';
const styles = StyleSheet.create({
  expandOnHover: {
    ':hover': {
      boxShadow: '0 0px 4px 0 #ff8c00, 0 0px 4px 0 #ff8c00',
    },
  },
});

const Bike = ({ data }) => {
  const [choosenSize, setChoosenSize] = useState(data?.sizes?.[0]);
  const [choosenColor, setChoosenColor] = useState(data?.colors?.[0]);
  const [inCart, setInCart] = useState(false);
  const { currentUser } = useAuth();
  const history = useHistory();

  const addToCart = () => {
    setInCart(true);
    setTimeout(() => {
      setInCart(false);
    }, 5000);

    const cartItem = {
      itemId: data.id,
      item: 'bike',
      name: `${data.brand} ${data.model} ${data.year}`,
      price: data.price,
      options: [
        { key: 'size', value: choosenSize },
        { key: 'color', value: choosenColor },
      ],
    };
    pushToDatabase(cartItem);
  };

  const pushToDatabase = (item) => {
    const ref = database.ref('carts').child(currentUser.uid);
    ref.push(item);
  };

  return (
    <Card
      border='primary'
      className={`rounded-0 h-100 ${css(styles.expandOnHover)}`}
    >
      <Card.Img variant='top' src={data.img} className='rounded-0 p-1' />
      <Card.Body className='d-flex'>
        <Card.Title>
          {data.type && (
            <Badge variant='secondary' className='mr-2'>
              {data.type.toUpperCase()}
            </Badge>
          )}
          {data.brand} {data.model || 'Unknown model'} {data.year}
        </Card.Title>
      </Card.Body>
      <Card.Body>
        <Card.Text>
          {data.description || (
            <span className='text-muted font-italic'>No description</span>
          )}
        </Card.Text>
      </Card.Body>
      <ListGroup variant='flush' className='flex-grow-1'>
        <ListGroup.Item>
          {data.sizes && data.sizes.length > 0 ? (
            <>
              <h6>Available sizes:</h6>
              <ButtonGroup toggle size='sm'>
                {data.sizes.map((size, index) => {
                  return (
                    <ToggleButton
                      className='rounded-0'
                      key={`size-${index}`}
                      type='radio'
                      variant='outline-secondary'
                      name='radio-size'
                      value={size}
                      checked={choosenSize === size}
                      onChange={(e) => setChoosenSize(e.currentTarget.value)}
                    >
                      {size}
                    </ToggleButton>
                  );
                })}
              </ButtonGroup>
            </>
          ) : (
            <h6>No sizes available</h6>
          )}
        </ListGroup.Item>
        <ListGroup.Item>
          {data.colors && data.colors.length > 0 ? (
            <>
              <h6>Available colors:</h6>
              <ButtonGroup toggle size='sm'>
                {data.colors.map((color, index) => {
                  return (
                    <ToggleButton
                      className='rounded-0'
                      key={`color-${index}`}
                      type='radio'
                      variant='outline-secondary'
                      name='radio-color'
                      value={color}
                      checked={choosenColor === color}
                      onChange={(e) => setChoosenColor(e.currentTarget.value)}
                    >
                      {color}
                    </ToggleButton>
                  );
                })}
              </ButtonGroup>
            </>
          ) : (
            <h6>No colors available</h6>
          )}
        </ListGroup.Item>
      </ListGroup>

      {currentUser ? (
        <>
          <ButtonGroup className='w-100'>
            <Button variant='primary' className='rounded-0 font-weight-bold'>
              <nobr>
                {data.price.value}
                {data.price.currency}
              </nobr>
            </Button>
            <Button
              variant='outline-primary'
              className='rounded-0'
              block
              onClick={addToCart}
            >
              Add to cart
            </Button>
          </ButtonGroup>
          <Alert
            transition={true}
            show={inCart}
            variant='secondary'
            className='rounded-0 m-0 text-center'
          >
            Item has been added to your cart
          </Alert>
        </>
      ) : (
        <Button
          variant='outline-primary'
          className='rounded-0'
          onClick={() => history.push('/login')}
        >
          Sing-in to add to the cart
        </Button>
      )}
    </Card>
  );
};

export default Bike;
