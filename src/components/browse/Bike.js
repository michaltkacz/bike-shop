import React, { useState } from 'react';

import {
  Card,
  ListGroup,
  Badge,
  Button,
  ButtonGroup,
  ToggleButton,
  Fade,
} from 'react-bootstrap';

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

  const addToCart = () => {
    const { sizes, colors, ...selectedData } = data;
    console.log({ ...selectedData, choosenSize, choosenColor });
  };

  return (
    <Card
      border='primary'
      className={`rounded-0 h-100 ${css(styles.expandOnHover)}`}
    >
      <Card.Img variant='top' src={data.img} className='rounded-0' />

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
          <h6>Available sizes:</h6>
          <ButtonGroup toggle>
            {data?.sizes.map((size, index) => {
              return (
                <ToggleButton
                  className='rounded-0'
                  key={`size-${index}`}
                  type='radio'
                  variant='secondary'
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
        </ListGroup.Item>
        <ListGroup.Item>
          <h6>Available colors:</h6>
          <ButtonGroup toggle>
            {data?.colors.map((color, index) => {
              return (
                <ToggleButton
                  className='rounded-0'
                  key={`color-${index}`}
                  type='radio'
                  variant='secondary'
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
        </ListGroup.Item>
      </ListGroup>
      <Button
        variant='outline-primary'
        className='rounded-0'
        onClick={addToCart}
      >
        Add to cart
      </Button>
    </Card>
  );
};

export default Bike;
