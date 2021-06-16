import React from 'react';

import { Jumbotron } from 'react-bootstrap';

import { StyleSheet, css } from 'aphrodite';

const styles = (props) =>
  StyleSheet.create({
    jumbo: {
      paddingTop: '10rem',
      paddingBottom: '3rem',
      borderRadius: 0,
      backgroundImage: `radial-gradient(circle at center, rgba(0,0,0,0), rgba(0,0,0,0.25)), url(${props.img})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepat: 'no-repeat',
      boxShadow:
        '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
      ':hover': {
        boxShadow: '0 0px 8px 0 #B18AFF, 0 0px 8px 0 #B18AFF',
      },
    },

    jumboClick: {
      cursor: 'pointer',
      transition: 'transform 330ms ease-in-out',
      ':hover': {
        transform: 'scale(1.05, 1.05)',
      },
    },

    overlay: {
      padding: '1rem',
      background: 'rgba(0,0,0,0.7)',
    },
  });

const Jumbo = ({ title, subtitle, img, onClick }) => {
  return (
    <Jumbotron
      fluid
      className={css(
        styles({ img }).jumbo,
        onClick && styles({ img }).jumboClick
      )}
      onClick={onClick ? () => onClick() : null}
    >
      <div className={css(styles({ img }).overlay)}>
        <p className='display-4 text-secondary font-weight-italic'>{title}</p>
        <p className='text-white font-italic'>{subtitle}</p>
      </div>
    </Jumbotron>
  );
};

export default Jumbo;
