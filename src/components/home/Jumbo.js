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

      ':hover': {
        transform: 'scale(1.02, 1.02)',
      },
    },

    title: {
      color: '#B18AFF',
      fontWeight: 'bold',
    },
    subtitle: {
      color: 'white',
      fontStyle: 'italic',
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
        <h2 className={css(styles({ img }).title)}>{title}</h2>
        <p className={css(styles({ img }).subtitle)}>{subtitle}</p>
      </div>
    </Jumbotron>
  );
};

export default Jumbo;
